const user = require('../models/user.js');

// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  let router = express.Router();

  // Read All
  router.get('/users', (req,res) => {
    console.log('finding all');
    user.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read All
  router.get('/users/:id', (req,res) => {
    req.body.id = req.params.id;
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Delete
  router.delete('/users/:id', (req,res) => {
    req.body.id = req.params.id;
    user.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Create
  router.post('/users', (req,res) => {
    console.log('create user hit');
    user.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Update
  router.post('/users/:id', (req,res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Read One
  // got to the route of a specificed user app
  router.get('/users/:id/apps', (req, res) => {
    const userData = { id: req.params.id };
    user.one(userData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // By putting .apps when you go to the specific route it will only show the apps.
      res.status(200).json(data.apps);
    });
  });



// Returns router to the file that would call it
  return router;
};
