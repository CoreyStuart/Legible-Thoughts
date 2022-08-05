const PORT = process.env.PORT || 3001;
const fs = require('fs');
const api = require('./routes/index.js');

const express = require('express');
const app = express();

const notes = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/', api);

function createNote() {
    
}

app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});








app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
  