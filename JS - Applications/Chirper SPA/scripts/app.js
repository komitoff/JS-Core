$(() => {
  const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getWelcomePage);
    this.get('index.html', getWelcomePage);
    this.get('/', getWelcomePage);

    this.post('#/register', (ctx) => {
      let username = ctx.params.username;
      let password = ctx.params.password;
      let repeatPass = ctx.params.repeatPass;

      if (repeatPass !== password) {
        notify.showError('Passwords must match!');
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
        notify.showError('All fields should be non-empty!');
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
          this.partial('./templates/register.hbs');
        });
      } else {
        ctx.redirect('#/feed');
      }
    }
  });

  app.run();
});