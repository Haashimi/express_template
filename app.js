const express = require('express')
const app = express()
const path = require('path')
const port = 3000


app.use(express.static('views'))

// app.set('views',path.join(__dirname, '/views'), )
// app.set('view engine','ejs')



// app.use('/css', express.static(__dirname + '/views/assets/css'));

console.log('_dirname ',path.join(__dirname+'/views/index.html'));
app.get('/',  (req, res) => {
//   res.send('hello world')
    // res.render('home')
    res.sendFile('index.html')
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