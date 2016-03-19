

// Takes an array of github repos
exports.listRepos = function(response) {
  $('#repo_list').empty();
  console.log(response);
  response.forEach(function(repo) {
    $('#repo_list').append('<li><div class="collapsible-header"><div class="left">Name: ' + repo.name + '</div><div class="right">Created: ' + moment(repo.created_at).fromNow() + '</div></div><div class="collapsible-body"><p>Description: ' + repo.description + '</p><p>Link</p></div></li>');
  });
};

exports.showUserInfo = function(response) {
  $('.user-wrapper').empty();
  $('.user-wrapper')
    .append('<img class="z-depth-2" src=' + response.avatar_url + ' alt="gitHub gravitar user"/>')
    .append('<p class="user-header">User ID:</p><p class="user-info">' + response.login + '</p>');
  if (response.email)
  {$('.user-wrapper').append('<p class="user-header">User Email:</p><p class="user-info">' + response.email + '</p>');}
  $('.user-wrapper').addClass('card');
};
