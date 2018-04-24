$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getWelcomePage);
    this.get('index.html', getWelcomePage);

    this.post('#/register', (ctx) => {
      let username = ctx.params.username;
      let password = ctx.params.password;
      let repeatPass = ctx.params.repeatPass;

      if (!/^[A-Za-z]{3,}$/.test(username)) {
        notify.showError('Username should be at least 3 characters long and contain only english alphabet letters');
      } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
        notify.showError('Password should be at least 6 characters long and contain only english alphabet letters');
      } else if (repeatPass !== password) {
        notify.showError('Passwords must match!');
      } else {
        auth.register(username, password)
          .then((userData) => {
            auth.saveSession(userData);
            notify.showInfo('User registration successful!');
            ctx.redirect('#/catalog');
          })
          .catch(notify.handleError);
      }
    });

    this.post('#/login', (ctx) => {
      let username = ctx.params.username;
      let password = ctx.params.password;

      if (username === '' || password === '') {
        notify.showError('All fields should be non-empty!');
      } else {
        auth.login(username, password)
          .then((userData) => {
            auth.saveSession(userData);
            notify.showInfo('Login successful.');
            ctx.redirect('#/catalog');
          })
          .catch(notify.handleError);
      }
    });
    this.get('#/logout', (ctx) => {
      auth.logout()
        .then(() => {
          sessionStorage.clear();
          ctx.redirect('#/home');
        })
        .catch(notify.handleError);
    });

    this.get('#/catalog', (ctx) => {
      if (!auth.isAuth()) {
        ctx.redirect('#/home');
        return;
      }

      postsService.getAllPosts()
        .then((posts) => {
          posts.forEach((p, i) => {
            p.rank = i + 1;
            p.date = calcTime(p._kmd.ect);
            p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
          });

          ctx.isAuth = auth.isAuth();
          ctx.username = sessionStorage.getItem('username');
          ctx.articles = posts;
          console.log(ctx.imgUrl);

          ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            navigation: './templates/common/navigation.hbs',
            article: './templates/posts/article.hbs',
            postList: './templates/posts/post-list.hbs' 
          }).then(function () {
            this.partial('./templates/posts/catalog-page.hbs');
          })
        });
    });


    //helper function
    function getWelcomePage(ctx) {
      if (!auth.isAuth()) {
        ctx.loadPartials({
          header: './templates/common/header.hbs',
          loginForm: './templates/forms/login-form.hbs',
          registerForm: './templates/forms/register-form.hbs',
          footer: './templates/common/footer.hbs'
        }).then(function () {
          this.partial('./templates/welcome-anonymous.hbs');
        });
      } else {
        ctx.redirect('#/catalog');
      }
    }

    function calcTime(dateIsoFormat) {
      let diff = new Date - (new Date(dateIsoFormat));
      diff = Math.floor(diff / 60000);
      if (diff < 1) return 'less than a minute';
      if (diff < 60) return diff + ' minute' + pluralize(diff);
      diff = Math.floor(diff / 60);
      if (diff < 24) return diff + ' hour' + pluralize(diff);
      diff = Math.floor(diff / 24);
      if (diff < 30) return diff + ' day' + pluralize(diff);
      diff = Math.floor(diff / 30);
      if (diff < 12) return diff + ' month' + pluralize(diff);
      diff = Math.floor(diff / 12);
      return diff + ' year' + pluralize(diff);
      function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
      }
    }
  });

  app.run();
});