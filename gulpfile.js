#!/usr/bin/env node

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const chalk = require('chalk');
const del = require('del');

let packagejson = require(process.cwd() + '/package.json');

let ocfVar = packagejson['open-chat-framework'];

if(!ocfVar) {
    return console.log(chalk.red('Error! Please define a "open-chat-framework" property in the local package.json.'));
}

let namespace = ocfVar['namespace'];

if(!namespace) {
    return console.log(chalk.red('Error! Please define a "namespace" property within the "open-chat-framework" object within package.json.'));
}

// task
let compile = function () {
    
    gulp.src(__dirname + '/wrap.js')
        .pipe(gulp.dest('./.tmp/'));

    browserify({
        entries: ['./.tmp/wrap.js'],
        debug: true
    })
    .bundle()
    .pipe(source(namespace + '.js'))
    .pipe(gulp.dest('./web/'));

    del(['./.tmp/']).then(paths => {
        // console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    return true;

};

gulp.task('compile', compile);

gulp.task('default', ['compile']);

// gulp.watch('./src/*', ['compile']);

compile();

console.log(chalk.green('Open Chat Framework Plugin Compilation Complete!'));
console.log(chalk.yellow('Output: ') + './web/' + namespace + '.js');
