let http =require('http'),
    express = require('express'),
    app = express();

app.get('/a', (req,res) => {
    res.end('<h1> Hello World! </h1>');
});

app.get('/b', (req,res) => {
    res.end('<h1> Hello World page B! </h1>');
});


http.createServer(app).listen(3000);