// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  let router = express.Router();

  // Basic route set up to return dummy data
  // /api/v1/users would return the json from line 9 to 22
  router.get('/users', (req,res) => {
    res.json([
      {
        id: 1,
        name: 'Karl Rohr',
      },
      {
        id: 2,
        name: 'Lindsay Hampton',
      },
      {
        id: 3,
        name: 'Candy Johnson',
      }
    ]);
  });

// Basic route set up to return dummy data
// /api/v1/users/:id would return the json from line 29 to 32
  router.get('/users/:id', (req,res) => {
    res.json(
      {
        id: 1,
        name: 'Karl Rohr',
      });
  });

// Returns router to the file that would call it
  return router;
};
