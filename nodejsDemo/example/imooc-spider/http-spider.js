var http = require('http'),
    cherrio = require('cheerio');
var url = process.argv[2]||'http://www.imooc.com/learn/494';
http.get(url, res => {
    var html = '';
    res.on('data', data => {
        html += data;
    });
    res.on('end', data => {
        filterChapters(html);
    });
}).on('error', err => {
    console.log(err);
});
function filterChapters(html) {
    var $ = cherrio.load(html),
        chapterList = $('.mod-chapters .chapter'),
        courseData = [];
    chapterList.each(function (index, item) {
        var chapter = $(this);
        chapter.find('.icon-info').remove();
        var chapterTitle = chapter.find('strong').text().trim();
        var videos = chapter.find('.video>li');
        var videoList = [];
        videos.each(function (index, item) {
            var video = $(this);
            var id = video.data('media-id');
            var tmp = video.find('.J-media-item');
            tmp.find('.r').remove().end().find('.type').remove();
            var name = tmp.text().trim();
            name = name.split('\r\n');
            videoList.push({
                id: id,
                subTitle: name[0],
                time: name[1].trim()
            });
        });
        courseData.push({
            title: chapterTitle,
            courseList: videoList
        });
    });
    formatOutput(courseData);
}
function formatOutput(courseData) {
    var returnList='';
    courseData.forEach(function (val, index) {
        var list ='\n'+val.title+"\n\n";
        val.courseList.forEach(function (val, index) {
            list+='[id:'+val.id+'] ';
            list+='[time:'+val.time+']\t';
            list+=val.subTitle+'\n';
        });
        returnList+=list;
    });
    console.log(returnList);
}