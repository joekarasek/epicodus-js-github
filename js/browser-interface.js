var getRepos = require('./../js/gitHubApi.js').getRepos;
var getUser = require('./../js/gitHubApi.js').getUser;
var listRepos = require('./../js/display.js').listRepos;
var showUserInfo = require('./../js/display.js').showUserInfo;

$(document).ready(function() {

  // Hide user-wrapper at load
  $('.user-wrapper').hide();

  // On submit of userName populate repo list
  $('#userName').submit(function(event) {
    event.preventDefault();
    getRepos($('#userNameInput').val(), listRepos );
  });

  // On submit of userName populate user component
  $('#userName').submit(function(event) {
    event.preventDefault();
    getUser($('#userNameInput').val(), showUserInfo );
    $('.user-wrapper').show();
  });

});
