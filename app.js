const express = require('express');

// import express router
const noteRoutes = require('./routes/noteRoutes')

// express app
const app = express();

// listen for requests
app.listen(3000);

const path = require('path')
/*  middleware & static files */
// make folder named public public to the browser
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public'))) //serve files statically


// listen to path '/'
app.get('/', (req, res)=>{

    // .sendFile('absolute path',{root:__dirname} ) 
    //  path must be absolute or specify root to res.sendFile
   res.sendFile('./views/home.html', {root:__dirname})
 })
/*
app.get('/note/create',(req, res)=>{
   res.sendFile('./views/create.html', {root:__dirname})
})


app.get('/note/read', (req, res)=>{
   res.sendFile('./views/readNotes.html', {root:__dirname})
})

*/

//note routes 
app.use(noteRoutes)


app.use((req, res)=>{
   res.sendFile('./views/404.html', {root:__dirname})
})
 