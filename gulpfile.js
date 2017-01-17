var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', () => {
	return gulp.src('app/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notyfy: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], () => {
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/index.html', browserSync.reload);
});