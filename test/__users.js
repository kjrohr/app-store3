// Imports chai with expect
const expect = require('chai').expect;
// Imports supertest
const request = require('supertest');
// Starts test for user routes
describe('User Routes', () => {
  // Declare server
  var server;
  // Declare user
  var user;

  // Do this before each test
  beforeEach(() => {
    // Set server to the server.js file
    server = require('../src/server.js');
  });

  // Do this after each test
  afterEach(() => {
    // Closes the server
    server.close();
  });

  // Test for Multiple Users
  it('GET /api/v1/users returns multiple users', (done) => {
    request(server)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const users = res.body;

        // Save one single user from the list to test on in later tests
        this.user = users[0]

        expect(users.length).to.be.above(0)
      })
      .end(done)
  });

  // Test for a single user
  it('GET /api/v1/users/:id returns an user obj with a id and name property', (done) => {
    request(server)
      .get('/api/v1/users/' + this.user.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const user = res.body;
        expect(user).to.have.property('id')
        expect(user).to.have.property('name')
      })
      .end(done)
  });

});
