/**
 * Gulp Configuration
 */

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var pug = require('gulp-pug');
var header = require('gulp-header');
var bower = require('gulp-bower');
var ghPages = require('gulp-gh-pages');

var pkg = require('./package.json');


var banner =
    '/** \n' +
    ' * <%= pkg.name %> - <%= pkg.description %>\n' +
    ' * @version v<%= pkg.version %>\n' +
    ' * @link <%= pkg.homepage %>\n' +
    ' * @license <%= pkg.license %>\n' +
    ' */\n\n';

var dirs = {
    build: __dirname + '/build',
    src: __dirname + '/src'
};

/**
 * Static files
 */
gulp.task('static', function() {
    return gulp.src(dirs.src + '/static/**/*').pipe(gulp.dest(dirs.build));
});


/**
 * CSS
 */
gulp.task('css', function() {
    return gulp.src(dirs.src + '/css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'compact',
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./',{
            addComment: true,
            includeContent: true
        }))
        .pipe(gulp.dest(dirs.build + '/css'));
});


/**
 * HTML
 */
gulp.task('html', function() {
    return gulp.src([
        dirs.src + '/html/**/*.pug',
        '!' + dirs.src + '/html/_*',
        '!' + dirs.src + '/html/_*/**'
    ])
        .pipe(pug({
            pretty: true,
            locals: {}
        }))
        .pipe(gulp.dest(dirs.build));
});


/**
 * JS
 */
gulp.task('js', function() {
    return gulp.src([
        dirs.src + '/js/**/*.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(header(banner, {pkg : pkg}))
        .pipe(rename(function(path){
            path.extname = '.min.js';
        }))
        .pipe(uglify({
            mangle: true,
            compress: true
        }))
        .pipe(sourcemaps.write('./', {
            addComment: true,
            includeContent: true
        }))
        .pipe(gulp.dest(dirs.build + '/js'));
});


/**
 * Resize base images to create needed sizes
 */
gulp.task('img', function() {

});


gulp.task('bower', function() {
    return bower({
        directory: dirs.build + '/bower_components'
    });
});


gulp.task('build', ['css', 'html', 'js', 'static']);

gulp.task('watch', ['build'], function(){
    return gulp.watch([dirs.src + '/**/*'], ['build']);
});


/**
 * Builds website and then deploys result to gitub pages branch
 */
gulp.task('deploy', ['build', 'bower'], function() {
    return gulp.src(dirs.build + '/**/*')
        .pipe(ghPages({
            remoteUrl: pkg.repository,
            force: true
        }));
});


/**
 * Demo server. Basic static express app pointing to the build folder
 */
gulp.task('demo', ['build', 'bower'], function(done) {
    var express = require('express');
    var http = require('http');
    var morgan = require('morgan');

    var port = 5000;

    var app = express();
    app.use(morgan('dev'));
    app.use('/', express.static(dirs.build));
    app.get('/', function(req, res) {
        res.redirect('/index.html');
    });

    var server = http.createServer(app);
    server.on('error', function(error) {
        console.log('Server error!', error);
        done(error);
    });
    server.on('listening', function() {
        console.log('Express app hosting static directory ', dirs.build);
        console.log('Listening on localhost ' + port);
        done();
    });
    server.listen(port);
});


gulp.task('default', ['build']);
