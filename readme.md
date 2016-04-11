# _[GitHub Search](http://joekarasek.github.io/epicodus-js-github/_

#### _Code Review Week 1 of Epicodus Javascript, 3.19.2016_

### By _**Joseph Karasek**_

## Description

_This web app is designed to take a GitHub user name and display information about that user including the 100 most recent public repositories they have on GitHub._

_The goal of this project is to show competency with node.js, gulp, dependency management, and Javascript, and API's. To pass the code review the code must use all of the build tools that have been introduced:_

* _Manage frontend dependencies with Bower._
* _Manage all our other dependencies with npm._
* _Write an asset pipeline with a live reloading development server in gulp._

_Gulp tasks for:_

* _Concatenation, minification, and running the browserify package on your JavaScript._
* _Building and cleaning._
* _Running the development server with live reloading._
* _Running JSHint._
* _Compiling SASS._
* _Automatically including Bower dependencies as vendor.js and vendor.css._

#### System Requirements

1. [Node.js](https://nodejs.org/en/) w/ [npm](https://www.npmjs.com/)
2. [Bower](http://bower.io/)
3. [Gulp](http://gulpjs.com/)

#### Installation

* You will need an access token from GitHub for the GitHub API to work. You can get a free public access token through settings>personal access tokens on GitHub. Place the access_token in the .env file in the root directory.

* After cloning the repo, you will need to install dependencies...


    npm install
    bower install

* Gulp is used to handle both building the site and launching a server to host the site...


    gulp serve

## Known Bugs

_The site only returns the 100 most recent github repos. Needs pagation._

## Support and contact details

_If you have any questions, concerns, or feedback, please contact the authors through_ [gitHub](https://github.com/joekarasek/).

## Technologies Used

* _This project was built on [Node.js](https://nodejs.org/en/)._
* _Dependencies were handled with [npm](https://www.npmjs.com/) and [Bower](http://bower.io/)._
* _[Gulp](http://gulpjs.com/) is an awesome asset pipeline used in this project._

### License

MIT License.

Copyright (c) 2016 **_Joseph Karasek_**
