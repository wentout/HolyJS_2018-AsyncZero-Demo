const gulp			=	require('gulp');
const sass			=	require('gulp-sass');
const autoprefixer	=	require('gulp-autoprefixer');
const sourcemap		=	require('gulp-sourcemaps');
const postcss		=	require('gulp-postcss');
const cssSorting	=	require('postcss-sorting');
const SASS_PATH		=	'./sass/';
const CSS_PATH		=	'./content/css/';

gulp.task('sass', () => {
	return gulp	.src	( SASS_PATH + '**/*.{scss,sass}' )
				.pipe	( sourcemap.init() )
				.pipe	( sass() )
				.on		( 'error', err => { return { title: 'Sass', message: err.message } } )
				.pipe	( autoprefixer({ browsers: ['last 5 versions'], cascade: false }) )
				.pipe	( postcss(
							[ cssSorting({ "properties-order" : "alphabetical"}) ]))
				.pipe	( sourcemap.write('./sourcemaps/') )
				.pipe	( gulp.dest( CSS_PATH ) );
});

gulp.task( 'default', () => {
	gulp.watch( SASS_PATH + '**/*.{scss,sass}', ['sass'] );
});
