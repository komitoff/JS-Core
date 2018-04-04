const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_BJCfsj9B' // need change
const APP_SECRET = 'e2bfc81da6c4490eb548e16a24b27c56' // need change
const AUTH_HEADERS = { 'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET) }

function registerUser() {
  let username = $('#formRegister input[name=username]').val()
  let password = $('#formRegister input[name=passwd]').val()
  $.ajax({
    method: 'POST',
    url: BASE_URL + 'user/' + APP_KEY + '/',
    headers: AUTH_HEADERS,
    data: { username, password }
  }).then(function (res) {
    signInUser(res, 'Registration successful.')
  }).catch(handleAjaxError)
}

function loginUser() {
  let username = $('#formRegister input[name=username]').val()
  let password = $('#formRegister input[name=passwd]').val()
  $.ajax({
    method: 'POST',
    url: BASE_URL + '/user' + APP_KEY + '/',
    headers: AUTH_HEADERS,
    data: {username, password}
  }).then((res) => {
    console.log(res);
    signInUser(res, 'Login Successful!');
  })
}

function logoutUser() {

}

function createAdd() {

}

function listAdds() {
  
}

function editAdd() {

}

function showCreateAdView() {

}

function showCreateAddView() {
  
}

function logoutUser() {
  sessionStorage.clear()
  showHomeView()
  showHideMenuLinks()
  showInfo('Logout successful.')
}

function signInUser(res, message) {
  sessionStorage.setItem('username', res.username)
  sessionStorage.setItem('authToken', res._kmd.authtoken)
  sessionStorage.setItem('userId', res._id)
  showHomeView()
  showHideMenuLinks()
  showInfo(message)
}