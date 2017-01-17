var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', () => {
	return gulp.src('docs/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('docs/css/'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: 'docs'
		},
		notyfy: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], () => {
	gulp.watch('docs/sass/*.sass', ['sass']);
	gulp.watch('docs/index.html', browserSync.reload);
});