//File for handling requests to /api/notes section of the site
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');

notes.get('/', (req, res) => {
    console.log("Made a get request to /api/notes");
    //
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log("Made a post request to /api/notes");
    console.log(req.body);
}) 

module.exports = notes;