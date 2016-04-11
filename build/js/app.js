(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKeyGithub = "";

},{}],2:[function(require,module,exports){


// Takes an array of github repos
exports.listRepos = function(response) {
  $('#repo_list').empty();
  response.forEach(function(repo) {
    $('#repo_list').append('<li><div class="collapsible-header"><div class="left">Name: ' + repo.name + '</div><div class="right">Created ' + moment(repo.created_at).fromNow() + '</div></div><div class="collapsible-body"><p class="left">Description: ' + repo.description + '</p><p><a target="_blank" href=' + repo.svn_url + '>Link</a></p></div></li>');
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

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKeyGithub;

// Take a user name (string) and passes it to callback (function)
exports.getRepos = function(userName, callback) {
  // Ajax request to get all repo information for userName
  if (apiKey) {
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey + '&sort=created&per_page=100')
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + userName + '/repos?sort=created&per_page=100')
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }
};

exports.getUser = function(userName, callback) {
  // Ajax request to get all repo information for userName
  if (apiKey) {
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey)
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + userName + '?')
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }
};

},{"./../.env":1}],4:[function(require,module,exports){
var getRepos = require('./../js/gitHubApi.js').getRepos;
var getUser = require('./../js/gitHubApi.js').getUser;
var listRepos = require('./../js/display.js').listRepos;
var showUserInfo = require('./../js/display.js').showUserInfo;

$(document).ready(function() {

  // Hide user-wrapper at load
  $('.user-wrapper').hide();

  // On submit of userName populate repo list
  $('#userName').submit(function(event) {
    event.preventDefault();
    getRepos($('#userNameInput').val(), listRepos );
  });

  // On submit of userName populate user component
  $('#userName').submit(function(event) {
    event.preventDefault();
    getUser($('#userNameInput').val(), showUserInfo );
    $('.user-wrapper').show();
  });

});

},{"./../js/display.js":2,"./../js/gitHubApi.js":3}]},{},[4]);
