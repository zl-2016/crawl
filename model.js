/**
  1.引入mongoose
  2. 先启动数据库并连接数据库
  3. 定义Schema
  4. 定义Model
**/
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201615crawl');
let MovieSchema = new mongoose.Schema({
  name:String,
  url:String
});
exports.Movie = mongoose.model('Movie',MovieSchema);

