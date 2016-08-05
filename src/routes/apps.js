// Starts the export for this file
module.exports = (express) => {
  // Creates an instance of express.Router() and assigns it to router
  let router = express.Router();

  // Basic route set up to return dummy data
  // api/v1/apps/:id would return the json between lines 9 and 14
  router.get('/apps/:id', (req, res) => {
    res.json({
      id: 1,
      title: 'Doom',
      description: 'FPS',
      releaseDate: '5/13/16'
    });
  });

// Basic route set up to return dummy data
// /api/v1/apps would return the json between lines 20 and 39
  router.get('/apps', (req,res) => {
    res.json([
      {
        id: 1,
        name: 'Doom',
        description: 'FPS',
        releaseDate: '5/13/16'
      },
      {
        id: 2,
        name: 'Starcraft 2',
        description: 'RTS',
        releaseDate: '7/27/2010'
      },
      {
        id: 3,
        name: 'Skyrim',
        description: 'RPG',
        releaseDate: '11/11/11'
      },
    ]);
  });
  // Returns router to the file that would call it.
  return router;
};
