var gulp = require('gulp');
// var react = require('gulp-react');
// var babel = require('gulp-babel');
var less = require('gulp-less');
var sass = require('gulp-sass');


// gulp.task('less',function(){

// });

// gulp.task('default',function(){
// 	// console.log('ok');
// 	return gulp.src('/src/myui.js')
// 	.pipe(react())
// 	.pipe(babel({
// 			presets:['babel-preset-es2015']
// 	}))
// 	.pipe(gulp.dest('/dest'));

// });
// 

var	htmlmin = require('gulp-htmlmin');
var	imagemin = require('gulp-imagemin');
var   minifycss = require('gulp-minify-css')
var   uglify = require('gulp-uglify');

gulp.task('testLess', function () {
    return gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
    
//压缩html
gulp.task('htmlmin',function(){
    //可以不在同一个目录下面
    gulp.src('*.html')
        .pipe(htmlmin({
            removeComments:true
        }))
        .pipe(gulp.dest('dist'));
});
 
//压缩js
// gulp.task('uglify',function(){
//     gulp.src('js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/static/js'));
// });
 
//压缩css
gulp.task('minifycss',['testLess'],function(){
    gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/static/css'));
});
 
//压缩图片
// gulp.task('imagemin',function(){
//     gulp.src('images/**/*.{png,jpg,gif,ico}')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/static/images'));
// });
 
//动态监听
gulp.task('watch',function(){
    gulp.src('*.html',['htmlmin']);
    gulp.src('js/*.js',['uglify']);
    gulp.src('src/css/*.css',['minifycss']);
    // gulp.src('images/**/*.{png,jpg,gif,ico}',['imagemin']);
});
 
 
//合并运行任务
gulp.task('default',['testLess','htmlmin','minifycss','watch']);
