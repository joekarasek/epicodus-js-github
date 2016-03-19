
// Takes an array of github repos
exports.listRepos = function(response) {
  $('#repo_list').empty();
  response.forEach(function(repo) {
    $('#repo_list').append('<li><div class="collapsible-header">' + repo.name + '</div><div class="collapsible-body"><p>Description: ' + repo.description + '</p></div></li>');
  });
};
