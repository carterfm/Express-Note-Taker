const express = require('express');
const path = require('path');
// Notes router
const notes = require('./routes/notes.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware directing requests made to /api/notes to notes.js 
app.use('/api/notes', notes);
// Middleware directing static requests to the public directory
app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//Get wildcard route--will direct to the homepage at index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//setting server to listen for requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);