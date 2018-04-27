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
            userData.subscriptions = [];
            authService.saveSession(userData);
            notify.showInfo('User registration successful!');
            ctx.redirect('#/feed');
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

    this.get('#/feed', (ctx) => {
      let username = sessionStorage.getItem('username');
      ctx.username = username;
      let subscriptions = JSON.parse(sessionStorage.getItem('subscriptions'));
      console.log(subscriptions[0]);
    
      ctx.loadPartials({
        footer: './templates/common/footer.hbs',
        header: './templates/common/header.hbs',
        nav: './templates/common/nav.hbs',
        chirpList: './templates/feed/chirp-list.hbs',
        chirp: './templates/feed/chirp.hbs',
        createChirp: './templates/feed/create-chirp.hbs',
        myStats: './templates/feed/my-stats.hbs'
      })
        .then(function () {
          this.partial('./templates/feed/feed-page.hbs');
        });
    });

    this.post('#/create/chirp', (ctx) => {
      if (!authService.isAuth()) {
        ctx.redirect('#/home');
        return;
      }
      let text = ctx.params.text;
      let author = sessionStorage.getItem('username');

      if (text === '') {
        notify.showError('Please add some text!');
      } else if (text.length > 150) {
        notify.showError('Text must be less than 150 symbols');
      } else {
        chirpService.createChirp(escapeHtml(text), author)
          .then((res) => {
            notify.showInfo('Chirp posted successful!');
            ctx.redirect('#/me');
          });
      }
    });

    this.get('#/me', (ctx) => {
      if (!authService.isAuth()) {
        ctx.redirect('#/home');
        return;
      }

      ctx.username = sessionStorage.getItem('username');
      chirpService.getUserChirps(ctx.username)
        .then((res) => {
          res.forEach((c, i) => {
            c.time = calcTime(c._kmd.ect);
            c.isAuthor = sessionStorage.getItem('userId') === c._acl.creator;
            console.log(c.time);
          });
          ctx.chirps = res.reverse();

          ctx.loadPartials({
            footer: './templates/common/footer.hbs',
            header: './templates/common/header.hbs',
            nav: './templates/common/nav.hbs',
            chirpList: './templates/feed/chirp-list.hbs',
            chirp: './templates/feed/chirp.hbs',
            createChirp: './templates/feed/create-chirp.hbs',
            myStats: './templates/feed/my-stats.hbs'
          })
            .then(function () {
              this.partial('./templates/me/me-page.hbs');
            })
        });
    });

    this.get('#/delete/:chirpId', (ctx) => {
      if (!authService.isAuth()) {
        ctx.redirect('#/home');
        return;
      }

      let chirpId = ctx.params.chirpId;
      chirpService.deleteChirp(chirpId)
        .then(() => {
          notify.showInfo('Chirp deleted successful!');
          ctx.redirect('#/me');
        })
        .catch(notify.handleError);

    });

    this.get('#/discover', (ctx) => { 
      if (!authService.isAuth()) {
        ctx.redirect('#/home');
        return;
      }

      authService.getAllUsers()
        .then((res) => {
          res.forEach((u, i) => {
            chirpService.getFollowers(u.username)
              .then((flw) => {
                u.followers = flw.length - 1;
                console.log(u.followers);
              }).catch(notify.handleError);
          });
          ctx.users = res;
          console.log(res);
          ctx.loadPartials({
            footer: './templates/common/footer.hbs',
            header: './templates/common/header.hbs',
            nav: './templates/common/nav.hbs',
            user: './templates/discover/user.hbs',
            userList: './templates/discover/user-list.hbs'
          })
            .then(function () {
              this.partial('./templates/discover/discover-page.hbs');
            })
            .catch(notify.handleError);
        });
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

  //Helper function 
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

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  app.run();
});