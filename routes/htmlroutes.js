const path = require('path')

module.exports = function (app) {

    app.use('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/notes.html'));
      }); 

      app.use('/index', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/index.html'));
      }); 


      
} 