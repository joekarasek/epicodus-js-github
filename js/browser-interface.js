var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {

  // On submit of userName form
  $('#userName').submit(function(event) {
    console.log('submit');
    // prevent default http request from form
    event.preventDefault();
    // Clear last results
    $('#repo_list').empty();
    // Populate repo list with user name from input form and the displayListItem function from UI.js
    getRepos($('#userNameInput').val(), function(response) {
      response.forEach(function(repo) {
        $('#repo_list').append('<li><div class="collapsible-header">' + repo.name + '</div><div class="collapsible-body"><p>Description: ' + repo.description + '</p></div></li>');
      });
    });
  });

});
