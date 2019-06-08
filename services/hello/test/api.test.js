import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
chai.should();

describe('Person', () => {
  describe('GET /', () => {
    it("should return status 200", (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
