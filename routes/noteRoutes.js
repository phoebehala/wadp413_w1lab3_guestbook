const express = require('express');
const router = express.Router(); // to create a new instance of a router object

const path = require('path')
const rootDirectory = require('../util/path')

//console.log({root:__dirname});
router.get('/note/create',(req, res)=>{
    //res.sendFile('../views/create.html', {root:__dirname}) //error:forbidden
    res.sendFile(path.join(rootDirectory, 'views', 'create.html'))

 })
 
 
router.get('/note/read', (req, res)=>{
    //res.sendFile('../views/readNotes.html', {root:__dirname}) //error:forbidden
    res.sendFile(path.join(rootDirectory, 'views', 'readNotes.html'))
})

module.exports = router