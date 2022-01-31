const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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