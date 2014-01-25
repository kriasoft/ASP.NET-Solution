// For more information on how to configure a task runner, please visit:
// https://github.com/gulpjs/gulp

var gulp   = require('gulp'),
    clean  = require('gulp-clean'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less   = require('gulp-less'),
    recess = require('gulp-recess');

gulp.task('clean', function () {
    // Remove generated files
    gulp.src('src/web/js/**/*.*', { read: false }).pipe(clean());
    gulp.src('src/web/css/**/*.*', { read: false }).pipe(clean());
});

gulp.task('scripts', function () {
    // Concatenate, minify and copy all *.js files (except vendor scripts)
    return gulp.src(['src/web/scripts/**/*.js', '!src/web/scripts/vendor/**'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/web/js'));
});

gulp.task('vendor', function () {
    // Copy vendor scripts
    return gulp.src(['src/web/scripts/vendor/**'])
        .pipe(gulp.dest('src/web/js/vendor'));
});

gulp.task('styles', function () {
    // Concatenate and copy style sheets
    return gulp.src('src/web/styles/app.less')
        .pipe(less())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('src/web/css'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function () {
    gulp.run('clean', 'scripts', 'vendor', 'styles');

    // Watch .js files and run tasks if they change
    gulp.watch('src/web/scripts/**', function () {
        gulp.run('scripts');
    });

    // Watch .less files and run tasks if they change
    gulp.watch('src/web/styles/**/*.less', function () {
        gulp.run('styles');
    });
});