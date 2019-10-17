/*
Required plugins:

npm i -D gulp-load-plugins gulp-sass gulp-sourcemaps gulp-postcss autoprefixer browser-sync gulp-newer gulp-imagemin gulp-svg-sprite

*/

'use strict';

//General settings
global.$ = {
	gulp: require('gulp'),
	//Add pugins using gp	
	gp: require('gulp-load-plugins')({ 
		pattern: '*'
		}),

	path: {
		tasks: require('./gulp/config/tasks.js')		
	},

	build: {
	        html: './public/',	        
	        styles: './public/css/',
	        img: './public/img/',
	        sprites: './public/img/sprites/',
	        fonts: './public/fonts/'	        	        
		},

	src: {
		html: './app/template/',
		styles: './app/styles/',
		img: './app/img/',
		sprites: './app/img/sprites/',
		fonts: './app/fonts/',
		static: './app/static/'

	}
}

//Iterate defined tasks in config/tasks.js and add them
 $.path.tasks.forEach((taskPath) => {
 	require(taskPath)();
 })


//Default task for Gulp that runs and watch: 'image', 'svg', 'styles', 'browser-sync'
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('html', 'image', 'svg:sprite', 'svg:copy', 'static'),
	'styles',
	$.gulp.parallel('watch', 'browser-sync')	
	));

//Task for production
$.gulp.task('prod', $.gulp.series(
	$.gulp.parallel('html:prod', 'image:prod', 'svg:sprite:prod', 'svg:copy:prod', 'static:prod'),
	'styles:prod'
	));