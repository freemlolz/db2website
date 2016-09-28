'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
    return gulp.src([
        'dist/*'
    ], {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src([
        'app/sass/*.scss',
        'app/font-awesome/*.scss',
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/slick-carousel/slick/slick.scss',
        'app/sass/*.sass'
    ])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concatCss("app.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('autoprefix', function () {
    return gulp.src('dist/css/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('concat-css', function () {
    return gulp.src('app/css/*.css')
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest('app/css'));
});

gulp.task('minify-css', function() {
    return gulp.src('app/css/all.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-ui/jquery-ui.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/slick-carousel/slick/slick.min.js',
        'app/js/*.js'
        // 'app/js/menu-and-scroll.js',
        // 'app/js/tabs.js',
        // 'app/js/menu-indicator.js',
        // 'app/js/responsive.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('images', function(){
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});


gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('app/sass/*.sass', ['sass']);
});


gulp.task('watch', function() {
    gulp.watch('app/sass/*.sass', ['sass']);
});

gulp.task('default', ['clean', 'sass', 'images', 'scripts']);