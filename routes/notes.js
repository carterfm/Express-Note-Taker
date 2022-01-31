//File for handling requests to /api/notes section of the site
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    console.log("Made a get request to /api/notes");
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    //code that wasn't working
    const newNote = {
        title,
        text, 
        id: uuidv4()
    };
    
    console.log(newNote);
    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
});

module.exports = notes;