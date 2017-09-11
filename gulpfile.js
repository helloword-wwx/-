var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlreplace = require('gulp-html-replace');


//html压缩处理

gulp.task('htmlmin', function() {
    gulp.src(['src/**/*.html', 'index.html'])
        .pipe(htmlreplace({
            style: gulp.src('src/html/common/style.html'),
            aside: gulp.src('src/html/common/aside.html'),
            header: gulp.src('src/html/common/header.html')
        }))
        .pipe(htmlmin({
            collapseWhitespace: true, //清除页面空格
            minifyJS: true, //压缩js
            minifyCSS: true, //
            removeComments: true //清除页面html注释
        }))
        .pipe(gulp.dest('dist'));
});

//less处理
gulp.task('less', function() {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});
//配置打包的第三方路径.---未成功
var jsLibs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery-form/dist/jquery.form.min.js'
];
gulp.task('jsLib', function() {
    gulp.src(jsLibs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('dist/js'));
});
//打包commonjs
// gulp.task('js', function() {
//     browserify('src/js/index.js').bundle()
//         .pipe(source('index.js'))
//         .pipe(buffer())
//         // .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// });


var jsModules = [
    //首页js
    'src/js/index.js',
    //用户user js
    'src/js/user/login.js',
    'src/js/user/repass.js',
    'src/js/user/profile.js',
    //讲师
    'src/js/teacher/add.js',
    'src/js/teacher/edit.js',
    'src/js/teacher/list.js',
    //课程
    'src/js/course/add.js',
    'src/js/course/edit1.js',
    'src/js/course/edit2.js',
    'src/js/course/edit3.js',
    'src/js/course/list.js',
    //学科分类
    'src/js/category/add.js',
    'src/js/category/edit.js',
    'src/js/category/list.js'
];


//打包commonjs
gulp.task('js', function() {
    jsModules.forEach(function(jsPath) {
        var pathArr = jsPath.split('/'); //jsPathb变成['src','js','user','login.js']
        var jsName = pathArr.pop();
        pathArr.shift()
        browserify(jsPath).bundle()
            .pipe(source(jsName))
            .pipe(buffer())
            // .pipe(uglify())
            .pipe(gulp.dest('dist/' + pathArr.join('/')));
    })
});


// //统一打包
gulp.task('build', function() {
    gulp.run(['htmlmin', 'less', 'jsLib', 'js']);
});
//监听
gulp.task('default', function() {
    gulp.run('build');
    gulp.watch(['src/**/*.html', 'index.html'], function() {
        gulp.run('htmlmin');
    });
    gulp.watch(['src/**/*.less'], function() {
        gulp.run('less');
    });
    gulp.watch(['src/**/*.js'], function() {
        gulp.run('js');
    });
});