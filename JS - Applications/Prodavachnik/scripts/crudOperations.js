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
    url: BASE_URL + 'user/' + APP_KEY + '/',
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
    data: {
      'Title': title,
      'Description': desc,
      'Date Published': datePublished,
      'Price': price,
      'Author': sessionStorage.getItem('username') }
  }).then((res) => {
    showView('viewAds')
  }).catch(handleAjaxError);
}

function listAdds() {
  $.ajax({
    method: 'GET',
    url: BASE_URL + 'appdata/' + APP_KEY + '/adds',
    headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') }
  }).then((res) => {
    showView('viewAds');
    displayAllAdds(res);
  }).catch(handleAjaxError);
}

function displayAllAdds(res) {
  let table = $('#ads').find('table');
  console.log(res);
  for (const key in res) {
    let tr = $('<tr>');
    let title = `<td>${res[key].Title}</td>`;
    let publisher = `<td>${res[key].Author}</td>`;
    let desc = `<td>${res[key].Description}</td>`;
    let price = `<td>${res[key].Price}</td>`;
    let date = `<td>${res[key]['Date Published']}</td>`;
    tr.append(title);
    tr.append(publisher);
    tr.append(desc);
    tr.append(price);
    tr.append(date);
    if (sessionStorage.getItem('username') === res[key].Author) {
      let edit = `<a href="#">[Edit]</a>`;
      let del = `<a href="#">[Delete]</a>`;
      let td = $('<td>');
      td.append(edit);
      td.append(del);
      tr.append(td);
    }
    
    table.append(tr);
  }
}

function editAdd() {
  //TODO
}


function deleteAdd(add) {
  $.ajax({
    method: 'DELETE',
    url: BASE_URL + 'appdata/' + APP_KEY + '/adds/' + book._id,
    headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') }
  }).then(function () {
    listAdds()
    showInfo('Add deleted.')
  }).catch(handleAjaxError)
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
  $('#loggedInUser').text(res.username);
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