const express = require('express')
const app = express()
const path = require('path')
const port = 3001
const logger  = require('./logger/logger')

// app.use(express.static('views'))
app.use(express.static(__dirname + '/public'));

// app.set('views',path.join(__dirname, '/views'), )
app.set('view engine','ejs')



// app.use('/css', express.static(__dirname + '/views/assets/css'));


app.get('/',  (req, res) => {
//   res.send('hello world')

res.render('signin')
  
    
})



app.get('/home',  (req, res) => {
    //   res.send('hello world')
    
    res.render('index')
      
        
    })

    


app.listen(port, ()=>{
    logger.info('App listening on '+port);
})