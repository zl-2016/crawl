/**
 * 在这个模块里会读取URL里的数据
 * 并且是在回调函数返回电影数组
 * 1.读取url的响应体
 * 2.提取电影列表
 */
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug = require('debug')('crawl:read');
module.exports = function (url,callback) {
  //请求URL地址得到响应体
  request({url,encoding:null},function (err,response,body) {
    //把GBK格式的buffer转成utf8字符串
    body = iconv.decode(body,'gbk');
    let $ = cheerio.load(body);
    let movies = [];//电影数组
    $('.keyword a.list-title').each(function(index,item){
      let $this = $(this);//把原生对象转成JQUERY对象
      let movie = {
        name:$this.text(),//名称
        url:$this.attr('href')//超链接
      }
      debug(`读到电影:${movie.name}`);
      movies.push(movie);
    })
    callback(err,movies);
  })
}

//测试驱动开发 TDD Test Driven Development
// 先写测试用例，再根据测试用例填写内容
/*let url = 'http://top.baidu.com/buzz?b=26';
module.exports(url,function(err,movies){
  console.log(movies);
});*/
