const noteData = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        fs.readFile('db/db.json', function(err, data){
            if (err) throw err;
            res.json(JSON.parse(data));
        }) 
        
    });

    app.post('/api/notes', function (req, res) {
        const note = req.body;
        note.id = uuidv4();
        noteData.push(note);
        fs.writeFileSync('db/db.json', JSON.stringify(noteData), function(err) {
            if (err) throw err;
            console.log('Saved!');
        })
        res.json(true);
      });

      app.delete('/api/notes/:id', function (req, res) {
        console.log(req.params.id);

        console.log("lenghty" + noteData.length);

        const newNotes = noteData.filter(note => note.id != req.params.id);

        fs.writeFileSync('db/db.json', JSON.stringify(newNotes), function(err) {
            if (err) throw err;
            console.log('Deleted!');
            });
        res.json(true)
    });
      
} 