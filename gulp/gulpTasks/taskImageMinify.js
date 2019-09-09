/*
required plugins:
npm i -D gulp-load-plugins gulp-imagemin gulp-newer
*/

//Task for image minification
'use strict';

module.exports = () => {

	$.gulp.task('image', () => {
	  
		return $.gulp.src(`${$.src.img}*.{png, jpg}`)
		  .pipe($.gp.newer($.build.img)) // Add the newer pipe to pass through newer images only
		  .pipe($.gp.imagemin())
		  .pipe($.gulp.dest($.build.img));
		  
	});
 
};