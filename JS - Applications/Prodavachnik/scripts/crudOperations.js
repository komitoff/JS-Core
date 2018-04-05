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
    url: BASE_URL + 'user/' + APP_KEY + '/login',
    headers: AUTH_HEADERS,
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

  for (const key in res) {
    let add = res[key];
    let tr = $('<tr>');

    //fill the table with incoming data
    let title = `<td>${add.Title}</td>`;
    let publisher = `<td>${add.Author}</td>`;
    let desc = `<td>${add.Description}</td>`;
    let price = `<td>${add.Price}</td>`;
    let date = `<td>${add['Date Published']}</td>`;

    //append data to table
    tr.append(title);
    tr.append(publisher);
    tr.append(desc);
    tr.append(price);
    tr.append(date);

    //check if the ad is created by the current user
    if (sessionStorage.getItem('username') === add.Author) {
      //setting edit button
      let edit = $('<a>');
      edit.attr('href', '#');
      edit.text('[Edit]');
      edit.on('click', () => {
        editAdd(add);
      });
      
      //setting delete button
      let del = $('<a>');
      del.attr('href', '#');
      del.text('[Delete]');
      del.on('click', () => {
        deleteAdd(add);
      });

      //append elements
      let td = $('<td>');
      td.append(edit);
      td.append(del);
      tr.append(td);
    }
    
    table.append(tr);
  }
}

function editAdd() {
  let id = $('#formEditAd input[name=id]').val();
  let title = $('#formEditAd input[name=title]').val();
  let author = $('#formEditAd input[name=publisher]').val();
  let desc = $('#formEditAd textarea[name=description]').val();
  let datePublished = $('#formEditAd input[name=datePublished]').val();
  let price = $('#price input[name=price]').val();

  $.ajax({
    method: 'PUT',
    url: BASE_URL + 'appdata/' + APP_KEY + '/adds/' + add._id,
    headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') },
    data: {
      'Title': title,
      'Description': desc,
      'Date Published': datePublished,
      'Price': price,
      'Author': sessionStorage.getItem('username')
    }
  }).then((res) => {
    showView('viewAds')
  }).catch(handleAjaxError);
}


function deleteAdd(add) {
  $.ajax({
    method: 'DELETE',
    url: BASE_URL + 'appdata/' + APP_KEY + '/adds/' + add._id,
    headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') }
  }).then(function () {
    showView('viewHome');
    showInfo('Add deleted.');
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
  console.log(res.username);
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