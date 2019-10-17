//Watching for any changes
'use strict'


module.exports = () => {
		$.gulp.task('watch', function(){
		$.gulp.watch( `${$.src.styles}**/*.scss`, $.gulp.series('styles') ) //Watching Sass and Scss files
		$.gulp.watch( `${$.src.img}**/*.*`, $.gulp.series('image') ) //Watch images, minify and copy to the destination folder
		$.gulp.watch( `${$.src.sprites}*.svg`, $.gulp.series('svg:sprite') ) //Watch svg files, create sprite, css file and copy
		$.gulp.watch( `${$.src.img}*.svg`, $.gulp.series('svg:copy') ) //Copy svg to img folder without creating sprite
		$.gulp.watch( `${$.src.html}**/*.html`, $.gulp.series('html') ) //Watch html files and copy
	});
}
