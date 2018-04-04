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
    'Access-Control-Allow-Origin': '*',
    data: { username, password }
  }).then((res) => {
    signInUser(res, 'Registration successful.')
  }).catch(handleAjaxError);
}

function loginUser() {
  let username = $('#formRegister input[name=username]').val();
  let password = $('#formRegister input[name=passwd]').val();
  $.ajax({
    method: 'POST',
    url: BASE_URL + '/user' + APP_KEY + '/',
    headers: AUTH_HEADERS,
    'Access-Control-Allow-Origin': '*',
    data: { username, password }
  }).then((res) => {
    console.log(res);
    signInUser(res, 'Login Successful!');
    }).catch(handleAjaxError);
}

function createAdd() {
  let title = $('#formCreateAd input[name=title]').val();
  let desc = $('#formCreateAd textarea[name=description]').val();
  let datePublished = $('#formCreateAd input[name=datePublished]').val();
  let price = Number($('#formCreateAd input[name=price]').val());
  $.ajax({
    method: 'POST',
    url: BASE_URL + 'appdata/' + APP_KEY + '/adds',
    headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') },
    'Access-Control-Allow-Origin': '*',
    data: {
      'Title': title,
      'Description': desc,
      'Date Published': datePublished,
      'Price': price,
      'Author': sessionStorage.getItem('username') }
  }).then((res) => {
    console.log(res);
    }).catch(handleAjaxError);
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

function handleAjaxError(response) {
  let errorMsg = JSON.stringify(response)
  if (response.readyState === 0)
    errorMsg = "Cannot connect due to network error."
  if (response.responseJSON && response.responseJSON.description)
    errorMsg = response.responseJSON.description
  showError(errorMsg)
}