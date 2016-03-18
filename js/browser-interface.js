var getRepos = require('./../js/getRepos.js').getRepos;

var populateRepoList = function(miniRepo) {
  $('#repo_list').append('<li><div class="collapsible-header">' + miniRepo.name + '</div><div class="collapsible-body"><p>Description: ' + miniRepo.description + '</p></div></li>');
};

$(document).ready(function(){

  // On submit of userName form
  $('#userName').submit(function(event) {
    // prevent default http request from form
    event.preventDefault();
    var userName = $('#userNameInput').val();
    var userRepos = getRepos(userName, populateRepoList);
  });
});
