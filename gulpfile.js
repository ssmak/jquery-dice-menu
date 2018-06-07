const gulp = require('gulp');
const clean = require('gulp-clean');
const npmDist = require('gulp-npm-dist');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const gulpSequence = require('gulp-sequence');
const pump = require('pump');

gulp.task('clean', () => {
  return pump([
    gulp.src(['dist'], { read: false }),
    clean()
  ]);
});

gulp.task('copy.source', () => {
  return pump([
    gulp.src(['src/scss/jq.dice-menu.min.css', 'src/jq.dice-menu.js']),
    gulp.dest('dist')
  ]);
});

gulp.task('optimize.js', () => {
  return pump([
    gulp.src(['dist/**/*.js']),
    uglify({ mangle: false }),
    gulp.dest((file) => {
      return file.base;
    })
  ]);
});

gulp.task('build', gulpSequence('clean', 'copy.source', 'optimize.js'));
gulp.task('default', ['build']);
