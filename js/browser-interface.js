var getRepos = require('./../js/getRepos.js').getRepos;
var listRepos = require('./../js/display.js').listRepos;

$(document).ready(function() {

  // On submit of userName populate repo list
  $('#userName').submit(function(event) {
    event.preventDefault();
    getRepos($('#userNameInput').val(), listRepos );
  });
});
