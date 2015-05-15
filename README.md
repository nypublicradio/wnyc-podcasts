# WNYC Podcasts Page

## Development Environment

This project was originally scaffolded out using [Yeoman](http://yeoman.io/) and [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) with [Susy](http://susy.oddbird.net/) being installed via Bower afterwards. 

By default, gulp-webapp uses libsass (gulp-sass) for compiling and while quicker than ruby-sass, Libsass only supports nested and compressed output styles at this time, not expanded so the gulpfile was modified to use gulp-ruby-sass along with the susy gem, rather than the bower install.

## How to Use
- Clone repository: `https://github.com/nypublicradio/wnyc-podcasts.git`
- Run `npm install` to install gulp dependencies (package.json)
- Run `bower install --save` to install frontend dependencies
- Run `gulp serve` to preview and watch for changes
- Run `gulp` to build your webapp for production
 
Important: Make sure you have Ruby and susy's ruby gem installed as well as Bower (globally), then you can use this project with whatever preprocessor you like, Yeoman, Compass, etc. 

One last quick tip: Once you have things working locally, you don't actually have to do the last step above. Just grab the CSS source from the browser while 'gulp serve' is running. You don't have to grab everything as there are some extra styles and a slight difference here and there in the local version. Best bet is to copy everything from the bottom of the CSS (minus the map at the very bottom) to the class called .hidden and replace in the superchunk.