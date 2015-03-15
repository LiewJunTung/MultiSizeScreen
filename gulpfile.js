var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	minCss = require("gulp-minify-css"),
	rename = require("gulp-rename")
	browserSync = require("browser-sync");

gulp.task("build", ['js', 'css']);
gulp.task("js", MinifyJS);
gulp.task("css", MinifyCSS);
gulp.task("browserSync", BrowserSync);

function MinifyJS(){
	gulp.src('src/js/*.js')
		.pipe(uglify({mangle: false}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/js/'));
}

function MinifyCSS(){
	gulp.src('src/css/*.css')
		.pipe(minCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/css/'));
}

function BrowserSync(){
	var files = [
		'src/js/*.js',
		'src/css/*.css',
		'index.html'
	];
	browserSync.init(files, {
		server: {
			baseDir: './'
		}
	});
}

 