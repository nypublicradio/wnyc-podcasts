# WNYC Podcasts Page

## Development Environment

This project was originally scaffolded out using [Yeoman](http://yeoman.io/) and [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) with [Susy](http://susy.oddbird.net/) being installed via Bower afterwards. 

By default, gulp-webapp uses libsass (gulp-sass) for compiling and while quicker than ruby-sass, Libsass  only supports nested and compressed output styles at this time, not expanded so the gulpfile was modified to use gulp-ruby-sass along with the susy gem, rather than the bower install.

## How to Use

The most important thing is to make sure you have Ruby installed and susy's ruby gem installed, then you can use this project with whatever preprocessor you like, Yeoman, Compass, etc.