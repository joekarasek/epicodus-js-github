var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function(){

  // On submit of userName form
  $('#userName').submit(function(event) {
    // prevent default http request from form
    event.preventDefault();
    var userName = $('#userNameInput').val();
    var userRepos = getRepos(userName);
    console.log(userRepos);
  });
});
