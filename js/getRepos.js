var apiKey = require('./../.env').apiKeyGithub;


// function getRepos: Takes a user name string and returns a user object with the user name and a list array of user's public repos (repo name and description)
exports.getRepos = function(userName){
  var userReposObject = {
    name: userName
  };
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
