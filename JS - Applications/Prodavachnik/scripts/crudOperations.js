const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_HJp2KEGjz' // need change
const APP_SECRET = '7bfcc4d1f25647efac2de02aaaf56d3c' // need change
const AUTH_HEADERS = { 'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET) }

function registerUser() {
  let username = $('#formRegister input[name=username]').val();
  let password = $('#formRegister input[name=passwd]').val();
  console.log('HERE!');
  $.ajax({
    method: 'POST',
    url: BASE_URL + 'user/' + APP_KEY + '/',
    headers: AUTH_HEADERS,
    Origin: 'https://baas.kinvey.com//userkid_HJp2KEGjz/',
    data: { username, password }
  }).then((res) => {
    signInUser(res, 'Registration successful.')
  }).catch(handleAjaxError)
}

function loginUser() {
  let username = $('#formRegister input[name=username]').val();
  let password = $('#formRegister input[name=passwd]').val();
  $.ajax({
    method: 'POST',
    url: BASE_URL + '/user' + APP_KEY + '/',
    headers: AUTH_HEADERS,
    Origin: 'https://baas.kinvey.com//userkid_HJp2KEGjz/',
    data: {username, password}
  }).then((res) => {
    console.log(res);
    signInUser(res, 'Login Successful!');
  })
}

function createAdd() {
  //TODO
}

function listAdds() {
  //TODO
}

function editAdd() {
  //TODO
}

function showCreateAddView() {
  showView('viewCreateAd')
}

function logoutUser() {
  sessionStorage.clear();
  showHomeView();
  showHideMenuLinks();
  showInfo('Logout successful.');
}

function signInUser(res, message) {
  sessionStorage.setItem('username', res.username);
  sessionStorage.setItem('authToken', res._kmd.authtoken);
  sessionStorage.setItem('userId', res._id);
  showHomeView();
  showHideMenuLinks();
  showInfo(message);
}