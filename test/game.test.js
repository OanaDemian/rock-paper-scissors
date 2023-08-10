import  chaiHttp from 'chai-http';
import { app } from '../app.js';
import  chai from 'chai';

chai.use(chaiHttp);
chai.should();
describe(`game router tests`, () => {

  it(`checks that posting to new game returns a redirect`, done => {
    chai
      .request(app)
      .post("/game/new")
      .send({
        playerOne: "Barbie",
        playerTwo: "Ken"
      })
      .redirects(0)
      .end((err, res, body) => {
        res.should.have.status(302);
        done();
      });
  });
});