let project_folder = 'dist';
let source_folder = 'src';

let fs = require('fs');

let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css',
    js: project_folder + '/js',
    img: project_folder + '/img',
    fonts: project_folder + '/fonts',
  },
  src: {
    html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
    css: source_folder + '/scss/style.scss',
    js: source_folder + '/js/script.js',
    img: source_folder + '/img/**/*',
    fonts: source_folder + '/fonts/*.ttf',
  },
  watch: {
    html: source_folder + '/**/*.html',
    css: source_folder + '/scss/**/*.scss',
    js: source_folder + '/js/**/*.js',
    img: source_folder + '/img/**/*',
  },
  clean: './' + project_folder + '/',
};

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync'),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    uglify = require('gulp-uglify-es').default,
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js');

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: './' + project_folder + '/',
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html).
      pipe(fileinclude()).
      pipe(dest(path.build.html)).
      pipe(browsersync.stream());
}

function image() {
  return src(path.src.img).
      pipe(dest(path.build.img)).
      pipe(browsersync.stream());
}

function js() {
  return src(path.src.js).
      pipe(fileinclude()).
      pipe(webpackStream(webpackConfig), webpack).
      pipe(dest(path.build.js)).
      pipe(browsersync.stream());
}

function css() {
  return src(path.src.css).
      pipe(sourcemaps.init()).
      pipe(
          sass({
            outputStyle: 'compressed',
          }).on('error', sass.logError),
      ).
      pipe(
          autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true,
          }),
      ).
      pipe(dest(path.build.css)).
      pipe(clean_css()).
      pipe(
          rename({
            extname: '.min.css',
          }),
      ).
      pipe(sourcemaps.write('.')).
      pipe(dest(path.build.css)).
      pipe(browsersync.stream());
}

function fonts() {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

function cb() {}

async function fontsStyle(params) {
  let file_content = await fs.readFileSync(source_folder + '/scss/_fonts.scss');
  if (file_content == '') {
    await fs.writeFile(source_folder + '/scss/_fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function(err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
                source_folder + '/scss/_fonts.scss',
                '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
                cb,
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], image);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css, html, js, image, fonts),
    fontsStyle);
let watch = gulp.parallel(browserSync, build, watchFiles);

exports.fontsStyle = fontsStyle;
exports.image = image;
exports.fonts = fonts;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
