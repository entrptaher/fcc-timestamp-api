var express = require('express')
var app = express()
app.set('view engine', 'pug')

app.get('/', function(req,res){
    res.render('index', { title: 'Timestamp API', message: 'Hello there!' })
})

app.get('/:time', function (req, res) {
    // empty array
    var data={'unix':'', 'natural':""};
    var inputtime = req.params.time;
    
    //check if this is a UTC time
    if(!isNaN(Date.parse(inputtime))){
            data.unix = Date.parse(inputtime)/1000
            data.natural = new Date(inputtime).toUTCString();
    }
    // Check if this is a unix timestamp
    else if(!isNaN(new Date(inputtime*1000))){
        data.unix = inputtime
        data.natural = new Date(inputtime*1000).toUTCString();
    }
    else{
        data.unix = 'null'
        data.natural = 'null'
    }
    res.send(data)
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})