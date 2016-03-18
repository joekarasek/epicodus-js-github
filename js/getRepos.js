var apiKey = require('./../.env').apiKeyGithub;


// function getRepos: Takes a user name string and returns a user object with the user name and a list array of user's public repos (repo name and description)
exports.getRepos = function(userName){
  // Return variable to populate with repo data
  var userReponseObject = {
    name: userName,
    repos: []
  };
  // Ajax request to get all repo information for userName
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey + '&sort=created&per_page=100').then(function(response){
    //Sort through response to take out unneeded information, pushes repo object to userReponseObject array of repos
    response.forEach(function(repo) {
      var miniRepo = {
        name: repo.name,
        description: repo.description
      };
      userReponseObject.repos.push(miniRepo);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  return userReponseObject;
};
