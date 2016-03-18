exports.displayListItem = function(miniRepo) {
  $('#repo_list').append('<li><div class="collapsible-header">' + miniRepo.name + '</div><div class="collapsible-body"><p>Description: ' + miniRepo.description + '</p></div></li>');
};
