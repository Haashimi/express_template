const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.set('view engine','ejs')
app.set('views',path.join(__dirname, '/views'), )
app.get('/',  (req, res) => {
//   res.send('hello world')
    res.render('home')
})


app.get('/rand', (req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('random', {num})
})

app.get('/r/:subred', (req,res)=>{
    const {subred} = req.params
    res.render('subred',{subred})
})
app.listen(port, ()=>{
    console.log('App listening on '+port);
})