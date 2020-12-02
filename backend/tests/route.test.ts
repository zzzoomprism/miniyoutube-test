import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

const chaiFiles = require('chai-files');

chai.should();
chai.use(chaiHttp);
chai.use(chaiFiles);

describe('Test routes of application', () => {

  //Test GET route
  it('Get /video route. Should get all video from data.json file', (done) => {
    chai.request(server)
      .get("/video")
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.be.gte(0);
        done();
      })
  });

  // Test wrong route
  it('Test wrong API. Should not get anything', (done) => {
    chai.request(server)
      .get("/wrong-url")
      .end((err, response) => {
        response.should.have.status(404);
        done();
      })
  })
});
