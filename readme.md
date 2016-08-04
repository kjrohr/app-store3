# App Store

## Developers
### Please run the following
``` javascript

npm install
npm install mocha -g

```

### To run the server
``` javascript

node src/server.js

```

### To run unit tests
``` javascript

mocha

```

## End Points
### GET /api/v1/users
``` javascript

[
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
]

```

### GET /api/v1/users/:id
``` javascript

{
  id: 1,
  name: 'Karl Rohr',
};

```

### GET /api/v1/apps
``` javascript

[
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
]

```

### GET /api/v1/apps/:id
``` javascript

{
  id: 1,
  title: 'Doom',
  description: 'FPS',
  releaseDate: '5/13/16'
}

```
