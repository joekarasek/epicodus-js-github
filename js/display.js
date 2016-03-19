
// Takes an array of github repos
exports.listRepos = function(response) {
  $('#repo_list').empty();
  response.forEach(function(repo) {
    $('#repo_list').append('<li><div class="collapsible-header">' + repo.name + '</div><div class="collapsible-body"><p>Description: ' + repo.description + '</p></div></li>');
  });
};

exports.showUserInfo = function(response) {
  console.log(response);
  $('.user-wrapper').empty();
  $('.user-wrapper')
    .append('<img class="z-depth-2" src=' + response.avatar_url + ' alt="gitHub gravitar user"/>')
    .append('<p class="user-header">User ID:</p><p class="user-info">' + response.login + '</p>');
  if (response.email) $('.user-wrapper').append('<p class="user-header">User Email:</p><p class="user-info">' + response.email + '</p>');
};
