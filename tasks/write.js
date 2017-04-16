/**
 * 在这个模块里我们会把电影数组保存到mongodb里面
 *
 */
let Movie = require('../model').Movie;
let async = require('async')
let debug = require('debug')('crawl:write');
module.exports = function (movies, callback) {
  //循环数组中的每个元素，把生个对象依次保存在数据库中，全部保存完成之后调用回调函数
  async.forEach(movies, function (movie, cb) {
    Movie.create(movie, cb);
    debug(`写入电影:${movie.name}`);
  }, callback);
  //Movie.create(movies, callback);
}
