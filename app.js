const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);


// listen to path '/'
app.get('/', (req, res)=>{

    // .sendFile('absolute path',{root:__dirname} ) 
    //  path must be absolute or specify root to res.sendFile
   res.sendFile('./views/home.html', {root:__dirname})
 })


app.get('/create',(req, res)=>{
   res.sendFile('./views/create.html', {root:__dirname})
})


app.get('/read', (req, res)=>{
   res.sendFile('./views/read.html', {root:__dirname})
})

app.use((req, res)=>{
   res.sendFile('./views/404.html', {root:__dirname})
})
 