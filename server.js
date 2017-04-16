let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();
app.use(express.static(path.resolve('public')));
//指定模板引擎
app.set('view engine','html');
//设置针对HTML类型的模板应该如何渲染
app.engine('html',require('ejs').__express);
app.get('/',function (req,res) {
  Movie.find({},function (err,movies) {
    res.render('index',{movies});
  });
});
app.listen(8080);
