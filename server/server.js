
var express = require('express'),
bodyParser = require('body-parser');

app.use(express.static('./public'));

const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.post('/api/signup', function(req, res) {
  //todo
  //passport authenticate here
});

app.post('/api/login', function(req, res) {
  //todo
  //passport login
});

app.post('/api/submitinfo', function(req, res) {
  //save info
  //return user with new info
});



app.listen(PORT, ()=>{
  console.log("App is running on port ", ${PORT})
})
