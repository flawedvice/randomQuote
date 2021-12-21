const { src, dest, watch, series } = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


// Transpile SCSS to CSS
function scss() {
    return src('src/assets/src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(dest('src/assets/dist/css'));
}

// Uglify JS
function uglifyJS() {
    return src('src/assets/src/js/*.js')
        .pipe(uglify())
        .pipe(dest('src/assets/dist/js'));
}

// Watch scss files
function watcher() {
    watch('src/assets/src/sass/*.scss', scss);
    watch('src/assets/src/js/*js', uglifyJS);
}


exports.default = watcher;
