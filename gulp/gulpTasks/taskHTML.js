module.exports = function(){

	$.gulp.task('html', function(){
		
		return $.gulp.src( `${$.src.html}**/*.html` )
		.pipe($.gp.newer($.build.html)) // Add the newer pipe to pass through newer images only
		.pipe( $.gulp.dest($.build.html) );

	});
}