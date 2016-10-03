# 入门指南

1. 全局安装 gulp：
```javascript
$ npm install --global gulp
```
2. 作为项目的开发依赖（devDependencies）安装：
```javascript
$ npm install --save-dev gulp
```
3. 在项目根目录下创建一个名为 `gulpfile.js` 的文件：
```javascript
var gulp = require('gulp');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```
4. 运行 gulp：
```javascript
$ gulp
```
默认的名为 default 的任务（task）将会被运行，在这里，这个任务并未做任何事情。

想要单独执行特定的任务（task），请输入 `gulp <task> <othertask>`。