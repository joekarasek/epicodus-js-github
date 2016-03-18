var getRepos = require('./../js/getRepos.js').getRepos;

var populateRepoList = function(userRepos) {
  var response = '';
  userRepos.repos.forEach(function(repo) {

    response += '<li><div class="collapsible-header">' + repo.name + '</div><div class="collapsible-body"><p>Description: ' + repo.description + '</p></div></li>';
  });
  return reponse;
};

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
