const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imageMin = require('gulp-imagemin')


function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images)'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest("./build/styles"))
}





exports.default = function() {
    gulp.watch('./source/styles/*.scss' , {ignoreInitial: false} , gulp.series(compilaSass))
    gulp.watch('./source/images/*' , {ignoreInitial: false} , gulp.series(comprimeImagem))
    gulp.watch('../source/scripts/*.js' , {ignoreInitial: false} , gulp.series(comprimeJavaScript))
}

