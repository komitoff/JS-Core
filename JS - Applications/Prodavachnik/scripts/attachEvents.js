function attachAllEvents() {
  // Bind the navigation menu links
  $("#linkHome").on('click', showHomeView);
  $("#linkLogin").on('click', showLoginView);
  $("#linkRegister").on('click', showRegisterView);
  $("#linkListAds").on('click', listAdds);
  $("#linkCreateAd").on('click', showCreateAdView);
  $("#linkLogout").on('click', logoutUser);

  // Bind the form submit buttons
  $("#formLogin").on('submit', loginUser);
  $("#formRegister").on('submit', registerUser);
  $("#formCreateAd").on('submit', createAdd);
  $("#formEditAd").on('submit', editAdd);
  $("form").on('submit', function (event) { event.preventDefault() });

  // Bind the info / error boxes
  $("#infoBox, #errorBox").on('click', function () {
    $(this).fadeOut()
  })

  // Attach AJAX "loading" event listener
  $(document).on({
    ajaxStart: function () { $("#loadingBox").show() },
    ajaxStop: function () { $("#loadingBox").hide() }
  })
}