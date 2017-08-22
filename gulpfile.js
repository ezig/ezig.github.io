var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var ts = require('gulp-typescript');
var liquid = require('gulp-liquify');
var decache = require('decache');
var rename = require('gulp-rename')

gulp.task('data', function () {
    return gulp.src('./src/ts/data.ts')
    .pipe(ts({
        noImplicitAny: true,
    }))
    .pipe(gulp.dest('./src/js'))
})

gulp.task('styles', function () {
    return gulp.src('./src/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
});

gulp.task('templates', function () {
    var templateDir = './src/templates/'

    decache('./src/js/data.js')
    var data = require('./src/js/data.js')

    return gulp.src(templateDir + 'index.html')
    .pipe(liquid(data))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
})

gulp.task('serve', ['data', 'styles', 'templates'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: true
    })

    gulp.watch('src/ts/data.ts', ['data'])
    gulp.watch('src/scss/*.scss', ['styles'])
    gulp.watch(['src/templates/**/*.html', 'src/js/data.js'], ['templates'])

    gulp.watch('index.html', function () {
        gulp.src('index.html').pipe(browserSync.stream())
    })
    gulp.watch('css/index.css', function () {
        gulp.src('css/index.css').pipe(browserSync.stream())
    })
})
