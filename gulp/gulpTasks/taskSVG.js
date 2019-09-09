/*Task for creating SVG sprite*/

let svgConfig = {
    mode: {
      css: { // Activate the «view» mode
      	dest: '.',
      	sprite: `${$.build.sprites}sprite.svg`,
        bust: false,
        dimensions: true,
        render: {
          scss: {  // Activate Sass output (with default options)
          	dest: `${$.src.styles}_sprite.scss`
          } 
        }
      }
    }
  };

module.exports = function(){

	$.gulp.task('svg', function(){
		
		return $.gulp.src( `${$.src.sprites}**/*.svg` )
		.pipe($.gp.svgSprite( svgConfig ))
		.pipe($.gp.debug({title: 'styles.svg'}))
		.pipe( $.gulp.dest('.'));

	});
}