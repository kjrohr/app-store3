const app = require('../models/app.js');

// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  let router = express.Router();

  // Read All
  router.get('/apps', (req,res) => {
    console.log('finding all');
    app.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read All
  router.get('/apps/:id', (req,res) => {
    req.body.id = req.params.id;
    app.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Delete
  router.delete('/apps/:id', (req,res) => {
    req.body.id = req.params.id;
    app.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Create
  router.post('/apps', (req,res) => {
    console.log('create app hit');
    app.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Update
  router.post('/apps/:id', (req,res) => {
    req.body.id = req.params.id;
    app.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

// Returns router to the file that would call it
  return router;
};
