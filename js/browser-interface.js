var getRepos = require('./../js/gitHubApi.js').getRepos;
var getUser = require('./../js/gitHubApi.js').getUser;
var listRepos = require('./../js/display.js').listRepos;
var showUserInfo = require('./../js/display.js').showUserInfo;

$(document).ready(function() {

  // On submit of userName populate repo list
  $('#userName').submit(function(event) {
    event.preventDefault();
    console.log(moment().format());
    getRepos($('#userNameInput').val(), listRepos );
  });

  // On submit of userName populate user component
  $('#userName').submit(function(event) {
    event.preventDefault();
    getUser($('#userNameInput').val(), showUserInfo );
  });

});
