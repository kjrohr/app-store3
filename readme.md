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

### POST /api/v1/users
Create a user

``` javascript
{
  "name": "Test User"
}

```

### GET /api/v1/users
Read all users

``` javascript

[
  {
    id: 5,
    name: "Karl Rohr",
    createdAt: "2016-08-07T01:04:27.000Z",
    updatedAt: "2016-08-07T01:04:27.000Z"
  }
]

```

### GET /api/v1/users/:id
Read one user by id

``` javascript

{
  id: 5,
  name: "Karl Rohr",
  createdAt: "2016-08-07T01:04:27.000Z",
  updatedAt: "2016-08-07T01:04:27.000Z",
  apps: [
    {
      id: 2,
      name: "Skyrim",
      description: "RPG",
      releaseDate: "11/11/2011",
      createdAt: "2016-08-07T01:05:36.000Z",
      updatedAt: "2016-08-07T01:05:36.000Z",
      userID: 5
    }
  ]
}

```

### POST /api/v1/users/:id
Update a user

``` javascript

{
  "name": "Still A Test User"
}

```

### DELETE /api/v1/users/:id
Delete a user

``` javascript
1

```

### POST /api/v1/apps/
Create an app

``` javascript

  {
    "name": "Test App",
    "description": "Something witty",
    "releaseDate": "11/11/2011",
    "userID": 5
  }

```

### GET /api/v1/apps
Read all apps

``` javascript

[
  {
    id: 2,
    name: "Skyrim",
    description: "RPG",
    releaseDate: "11/11/2011",
    createdAt: "2016-08-07T01:05:36.000Z",
    updatedAt: "2016-08-07T01:05:36.000Z",
    userID: 5
  }
]

```

### GET /api/v1/apps/:id
Read on app by id

``` javascript

{
  id: 2,
  name: "Skyrim",
  description: "RPG",
  releaseDate: "11/11/2011",
  createdAt: "2016-08-07T01:05:36.000Z",
  updatedAt: "2016-08-07T01:05:36.000Z",
  userID: 5
}

```

### GET /api/v1/users/:id/apps
Show all the apps for a specific user

``` javascript

[
  {
    id: 2,
    name: "Skyrim",
    description: "RPG",
    releaseDate: "11/11/2011",
    createdAt: "2016-08-07T01:05:36.000Z",
    updatedAt: "2016-08-07T01:05:36.000Z",
    userID: 5
  }
]

```

### POST /api/v1/apps/:id
Update an app

``` javascript

{
  "name": "This is still a test App",
  "description": "Something witty",
  "releaseDate": "11/11/2011",
  "userID": 5
}

```

### DELETE /api/v1/apps/:id
Delete an app

``` javascript

  1

```
