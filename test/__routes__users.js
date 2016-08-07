const expect = require('chai').expect;
const request = require('supertest');
const App = require('../src/models/app');


describe('User Routes', () => {
  var server;
  var user;
  var tempApp;


  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
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

  // Test for the Apps of a Specific user
  it('GET /api/v1/users/:id/apps should find all apps for a user', (done) => {

    this.tempApp = { name: 'Best New Test App', description: 'none', releaseDate: '8/06/2016', userID: this.user.id };
    console.log('this.tempApp: ', this.tempApp);
    App.add(this.tempApp, (err) => {
      throw new Error(err);
    }, (appData) => {

      // this.tempApp.id = appData.id;
      //console.log('this.tempApp.id: '. this.tempApp.id);
      console.log('appData: ', appData);
      request(server)
        .get('/api/v1/users/' + this.user.id + '/apps')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const apps = res.body;
          console.log(apps);


          // Save one single app from the list to test on in later tests
          expect(apps.length).to.be.above(0)
          App.remove(appData,
            (err) => {
              throw new Error(err);
            },
            (response) => {
              expect(response).to.be.equal(1);
              done();
            })
        })
        .end(done)
      });
    });
});
