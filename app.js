const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.get('/', function(req, res){
    var today = new Date()
    var currentDay = today.getDay()

    if(currentDay === 6  || currentDay === 0){
        res.write('<h1>Yay, its the weekend!</h1>')
        res.write('<p>I do not need to work</p>')
        res.send()
    } else{
        res.sendFile(__dirname + '/index.html')
    }

})

app.listen(3000, function(){
    console.log('Server started at port 3000')
})