$(() => {
  const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getWelcomePage);
    this.get('index.html', getWelcomePage);
    this.get('/', getWelcomePage);

    this.get('#/login', (ctx) => {
      if (!authService.isAuth()) {
        ctx.loadPartials({
          footer: './templates/common/footer.hbs',
          header: './templates/common/header.hbs'
        }).then(function () {
          this.partial('./templates/user/login.hbs');
        });
      } else {
        ctx.redirect('#/feed');
      }
    });

    this.post('#/register', (ctx) => {
      let username = ctx.params.username;
      let password = ctx.params.password;
      let repeatPass = ctx.params.repeatPass;

      if (repeatPass !== password) {
        notify.showError('Passwords does not match!');
      } else if (username.length < 5) {
        notify.showError('Username must be at least 5 symbols!');
      } else if(username === '' || password === '') {
        notify.showError('Please fill all fields!');
      } else {
        authService.register(username, password)
          .then((userData) => {
            authService.saveSession(userData);
            notify.showInfo('User registration successful!');
            ctx.redirect('#/editor');
          })
          .catch(notify.handleError);
      }
    });

    this.post('#/login', (ctx) => {
      let username = ctx.params.username;
      let password = ctx.params.password;

      if (username === '' || password === '') {
        notify.showError('Please fill all fields!');
      } else if (username.length < 5) { 
        notify.showError('Username must be at least 5 symbols!')
      } else {
        authService.login(username, password)
          .then((userData) => {
            authService.saveSession(userData);
            notify.showInfo('Login successful.');
            ctx.redirect('#/feed');
          })
          .catch(notify.handleError);
      }
    });
    this.get('#/logout', (ctx) => {
      authService.logout()
        .then(() => {
          sessionStorage.clear();
          ctx.redirect('#/home');
        })
        .catch(notify.handleError);
    });

    //helper function
    function getWelcomePage(ctx) {
      if (!authService.isAuth()) {
        ctx.loadPartials({
          footer: './templates/common/footer.hbs',
          header: './templates/common/header.hbs'
        }).then(function () {
          this.partial('./templates/user/register.hbs');
        });
      } else {
        ctx.redirect('#/feed');
      }
    }
  });

  app.run();
});