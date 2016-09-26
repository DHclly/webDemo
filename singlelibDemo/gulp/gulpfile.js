var combiner = require('stream-combiner2');
var uglify = require('gulp-uglify');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var stripDebug = require('gulp-strip-debug');
var gulp = require('gulp');

gulp.task('default',['clean:mobile','clean:tmp'], function() {
	// 将你的默认的任务代码放在这
	console.log(arguments);
});

//整合 streams 来处理错误
//默认情况下，在 stream 中发生一个错误的话，它会被直接抛出，
//除非已经有一个时间监听器监听着 error 时间。 这在处理一个
//比较长的管道操作的时候会显得比较棘手。
//
//通过使用 stream-combiner2，你可以将一系列的 stream 合并
//成一个，这意味着，你只需要在你的代码中一个地方添加监听
//器监听 error 时间就可以了。
//这里是一个在 gulpfile 中使用它的例子：
gulp.task("stream-error", function() {
	var combined = combiner.obj([gulp.src("./test/*.js"), uglify(), gulp.dest("./test/a")]);
	// 任何在上面的 stream 中发生的错误，都不会抛出，
	// 而是会被监听器捕获
	combined.on('error', console.error.bind(console));
	return combined;
})

//删除文件和文件夹
//
//你也许会想要在编译文件之前删除一些文件。由于删除文件和文件
//内容并没有太大关系，所以，我们没必要去用一个 gulp 插件。最
//好的一个选择就是使用一个原生的 node 模块。
//
//因为 del 模块支持多个文件以及 globbing，因此，在这个例子中
//，我们将使用它来删除文件：
gulp.task('clean:mobile', function() {
	del(['./test/dest/report.csv',
		// 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
		'./test/dest/mobile/**/*',
		// 我们不希望删掉这个文件，所以我们取反这个匹配模式
		'!./test/dest/mobile/deploy.json'
	], function () {
	});
});

//在管道中删除文件
//
//你可能需要在管道中将一些处理过的文件删除掉。
//
//我们使用 vinyl-paths 模块来简单地获取 stream 
//中每个文件的路径，然后传给 del 方法。
gulp.task("clean:tmp",function () {
	return gulp.src("./test/tmp/*.*")
	//.pipe(stripDebug())// 仅用于本例做演示
	.pipe(gulp.dest('./test/dist'))
	.pipe(vinylPaths(del));
});


