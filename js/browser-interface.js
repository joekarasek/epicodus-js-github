var getRepos = require('./../js/getRepos.js').getRepos;
var populateRepoList = require('./../js/displayFunctions.js').displayListItem;

// var populateRepoList = function(miniRepo) {
//   $('#repo_list').append('<li><div class="collapsible-header">' + miniRepo.name + '</div><div class="collapsible-body"><p>Description: ' + miniRepo.description + '</p></div></li>');
// };

$(document).ready(function(){

  // On submit of userName form
  $('#userName').submit(function(event) {
    // prevent default http request from form
    event.preventDefault();
    // Clear last results
    $('#repo_list').empty();
    // Populate repo list with user name from input form and the displayListItem function from UI.js
    getRepos($('#userNameInput').val(), populateRepoList);
  });
});
