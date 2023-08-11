/* eslint-disable no-undef */
import { app } from '../app.js';
import  chai from './chai-local.js';

describe(`game router tests`, () => {

  it(`checks post requests to /game/new`, done => {
    chai
      .request(app)
      .post('/game/new')
      .type('form')
      .send({
        playerOne: "Barbie",
        playerTwo: "Ken"
      })
      .redirects(0)
      .end((res) => {
        res.should.have.status(302);
        done();
      })
  });
});