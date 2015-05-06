# WNYC Podcasts Page

## Development Environment

This project was originally scaffolded out using [Yeoman](http://yeoman.io/) and [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) with [Susy](http://susy.oddbird.net/) being installed via Bower afterwards. 

By default, gulp-webapp uses libsass (gulp-sass) for compiling and while quicker than ruby-sass, there are a couple of issues, that merited switching to the older gulp-ruby-sass:

1. Libsass currently has an issue with importing partials where it fails intermittently.
2. Libsass  only supports nested and compressed output styles at this time, not expanded. 

The original workaround was to not use partials and keep everything in main.scss and deal with nested output styles. I wanted something cleaner. Switching from gulp-sass to gulp-ruby-sass and modifying package.json, gulpfile.js as well as installing/using susy's ruby gem allowed for this. 

## How to Use

The most important thing is to make sure you have Ruby installed and susy's ruby gem installed, then you can use this project with whatever preprocessor you like, Yeoman, Compass, etc.