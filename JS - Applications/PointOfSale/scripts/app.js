$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getWelcomePage);
    this.get('index.html', getWelcomePage);

    this.post('#/register', (ctx) => {
      let username = ctx.params['username-register'];
      let password = ctx.params['password-register'];
      let repeatPass = ctx.params['password-register-check'];

      if (!/^[A-Za-z]{3,}$/.test(username)) {
        notify.showError('Username should be at least 3 characters long and contain only english alphabet letters');
      } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
        notify.showError('Password should be at least 6 characters long and contain only english alphabet letters');
      } else if (repeatPass !== password) {
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
      let username = ctx.params['username-login'];
      let password = ctx.params['password-login'];

      if (username === '' || password === '') {
        notify.showError('All fields should be non-empty!');
      } else {
        authService.login(username, password)
          .then((userData) => {
            authService.saveSession(userData);
            notify.showInfo('Login successful.');
            ctx.redirect('#/editor');
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

    this.get('#/editor', (ctx) => {
      ctx.username = sessionStorage.getItem('username');
      let currentUserId = sessionStorage.getItem('userId');
      receiptService.getReceiptById(currentUserId)
        .then((receipt) => {
          if (receipt.length === 0) {
            receiptService.createReceipt('true', 0, 0)
              .then((res) => {
                console.log(res);
              });
          } else {
            console.log(receipt[0]._id);
            entryService.getEntriesByReceiptId(receipt[0]._id)
              .then((entries) => {
                console.log(entries);
              });
          }
        });
      // ctx.loadPartials({
      //   header: './templates/common/header.hbs',
      //   footer: './templates/common/footer.hbs',
      //   tableHead: './templates/editor/table-components/table-head.hbs',
      //   createEntryForm: './templates/forms/create-entry-form.hbs',
      //   entryList: './templates/editor/table-components/entries-list.hbs',
      //   entry: './templates/editor/table-components/entries-list.hbs'
      // }).then((function () {
      //   this.partial('./templates/editor/editor-page.hbs');
      // }))
    });

    this.post('#/create/entry', (ctx) => {
      //TODO
    });

    //helper function
    function getWelcomePage(ctx) {
      if (!authService.isAuth()) {
        ctx.loadPartials({
          loginForm: './templates/forms/login-form.hbs',
          registerForm: './templates/forms/register-form.hbs',
          footer: './templates/common/footer.hbs'
        }).then(function () {
          this.partial('./templates/welcome-anonymous.hbs');
        });
      } else {
        ctx.redirect('#/editor');
      }
    }
  });

  app.run();
});