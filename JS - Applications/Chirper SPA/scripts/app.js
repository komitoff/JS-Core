$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getWelcomePage);
    this.get('index.html', getWelcomePage);
    this.get('/', getWelcomePage);

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
                ctx.redirect('#/editor');
              })
              .catch(notify.handleError);
          } else {
            entryService.getEntriesByReceiptId(receipt[0]._id)
              .then((entries) => {
                ctx.entries = entries;
                let total = 0;
                let subtotal = 0;
                ctx.entries.forEach((p, i) => {
                  subtotal = (p.qty * p.price);
                  total += subtotal; 
                  p.subtotal = subtotal.toFixed(2);
                });

                ctx.total = total.toFixed(2);
                sessionStorage.setItem('receiptId', receipt[0]._id);
                ctx.loadPartials({
                  header: './templates/common/header.hbs',
                  footer: './templates/common/footer.hbs',
                  tableHead: './templates/editor/table-components/table-head.hbs',
                  createEntryForm: './templates/forms/create-entry-form.hbs',
                  entry: './templates/editor/table-components/entry.hbs',
                  entryList: './templates/editor/table-components/entries-list.hbs'                  
                }).then((function () {
                  this.partial('./templates/editor/editor-page.hbs');
                }));
              }).catch(notify.handleError);
          }
        });
      

    });

    this.post('#/create/entry', (ctx) => {
      let type = ctx.params.type;
      let qty = ctx.params.qty;
      let price = ctx.params.price;

      //TODO check validity of input
      let receiptId = sessionStorage.getItem('receiptId');
      entryService.addEntry(type, qty, price, receiptId)
        .then(() => {
          notify.showInfo('Product added successful !');
          ctx.redirect('#/editor');
        }).catch(notify.handleError);
    });

    this.get('#/delete/entry/:entryId', (ctx) => {
      if (!authService.isAuth()) {
        ctx.redirect('#/home');
        return;
      }

      let entryId = ctx.params.entryId;
      entryService.deleteEntry(entryId)
        .then(() => {
          notify.showInfo('Product Deleted Successful!');
          ctx.redirect('#/home');
        })
        .catch(notify.handleError);
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