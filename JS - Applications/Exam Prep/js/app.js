$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', getWelcomePage);
    this.get('exam.html', getWelcomePage);
    this.get("", getWelcomePage);


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
      }
    }
  });

  app.run();
});