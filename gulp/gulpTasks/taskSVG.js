/*Task for creating SVG sprite*/

let svgConfig = {
  mode: {
      css: { // Activate the «css» mode
      	dest: `${$.build.html}css`,
      	sprite: `../img/sprites/sprite`,
        bust: false,
        dimensions: true,
        render: {
          scss: {  // Activate Sass output (with default options)
          	dest: `../../${$.src.styles}_sprite.scss`
          } 
        }
      }
    }
  };

  module.exports = function(){

    $.gulp.task('svg:sprite', function(){

      return $.gulp.src( `${$.src.sprites}**/*.svg` )
      .pipe($.gp.svgSprite( svgConfig ))
      .pipe($.gp.debug({title: `styles.svg`}))
      .pipe( $.gulp.dest(`.`));

    });

    $.gulp.task('svg:copy', function(){

      return $.gulp.src( `${$.src.img}*.svg` )
  .pipe($.gp.newer( $.build.img )) // Add the newer pipe to pass through newer images only
  .pipe( $.gulp.dest( $.build.img ));

});

    $.gulp.task('svg:sprite:prod', function(){

      return $.gulp.src( `${$.src.sprites}**/*.svg` )
      .pipe($.gp.svgSprite( svgConfig ))
      .pipe( $.gulp.dest(`.`));

    });

    $.gulp.task('svg:copy:prod', function(){

      return $.gulp.src( `${$.src.img}*.svg` )
      .pipe( $.gulp.dest(`${$.build.img}`));

    });
  }
