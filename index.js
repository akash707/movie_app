var express= require('express');
var app= express();
var routes=require('./routes/routes');
var path=require('path');

app.use(express.static(path.join('./'+__dirname+'/public')));

   app.set('views', __dirname + '/assets/views');
app.set('view engine','ejs');

app.use(routes);


app.get('*',function(req,res)
{
  res.render('not-found');
}
);

app.listen(process.env.PORT || 3000);
