#!/usr/bin/env node

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const chalk = require('chalk');

let packagejson = require('./package.json');

let ocfVar = packagejson['open-chat-framework'];

if(!ocfVar) {
    return console.log(chalk.red('Error! Please define a "open-chat-framework" property in the local package.json.'));
}

let namespace = ocfVar['namespace'];

if(!namespace) {
    return console.log(chalk.red('Error! Please define a "namespace" property within the "open-chat-framework" object within package.json.'));
}

let main = packagejson['main'];

if(!main) {
    return console.log(chald.red('Please define a "main" property within your package.json.'));
}

// task
let compile = function () {
    
    browserify({
        entries: ['wrap.js'],
        debug: true
    })
    .bundle()
    .pipe(source(namespace + '.js'))
    .pipe(gulp.dest('./web/'));

    return true;

};

gulp.task('compile', compile);

gulp.task('default', ['compile']);

// gulp.watch('./src/*', ['compile']);

compile();

console.log(chalk.green('Open Chat Framework Plugin Compilation Complete!'));
console.log(chalk.yellow('Output: ') + './web/' + namespace + '.js');
