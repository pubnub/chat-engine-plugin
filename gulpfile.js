#!/usr/bin/env node

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const chalk = require('chalk');
const rimraf = require('rimraf');

let packagejson = require(process.cwd() + '/package.json');

gulp.task('copy', function() {

    return gulp.src(__dirname + '/wrap.js')
        .pipe(gulp.dest('./.tmp/'));

})

gulp.task('compile', function () {

    return browserify({
        entries: ['./.tmp/wrap.js'],
        debug: true
    })
    .bundle()
    .pipe(source(packagejson.name + '.js'))
    .pipe(gulp.dest('./dist/'))
    .on('end', () => {
        return rimraf('./.tmp', () => {});
    })

});

gulp.task('default', ['copy', 'compile']);

// gulp.watch('./src/*', ['compile']);

gulp.start('default')

console.log(chalk.green('ChatEngine Plugin Compilation Complete!'));
console.log(chalk.yellow('Output: ') + './dist/' + packagejson.name + '.js');
