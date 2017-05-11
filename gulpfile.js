const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

let namespace = require('./package.json')['open-chat-framework']['namespace'];

// task
gulp.task('compile', function () {
    
    browserify({
        entries: ['wrap.js'],
        debug: true
    })
    .bundle()
    .pipe(source(namespace + '.js'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('default', ['compile']);

gulp.task('watch', function() {
  gulp.watch('./src/*', ['compile']);
});
