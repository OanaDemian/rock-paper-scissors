import { expect }  from 'chai';
import { app } from '../app.js';
import  chai from './chai-local.js';

describe(`app router tests`, () => { 
  let testServer;
  beforeEach(() => {
    testServer = chai.request(app).keepOpen();
  })

  afterEach(() => {
    testServer.close()
  })

  it(`checks get request to the /game route redirects to index page when rockPaperScissors undefined`, async () => {
    const res = await testServer.get(`/game`).redirects(0)
    expect(res).to.redirectTo('/');
  });
  
  it(`checks that get request to /index route renders the index page `, async () => {
    const res = await testServer.get(`/`);
    expect(res).to.have.status(200);
    expect(res.text).to.contain(`Hi, welcome to Rock, Paper, Scissors!`);
    expect(res).to.be.html;
  });
  
  it(`checks get request to the /game route renders the game page when player information successfully sent`, async () => {
    await testServer.post(`/game/new`).type('form')
    .send({
      playerOne: "Barbie",
      playerTwo: "Ken"
    })
    const res = await testServer.get(`/game`);
    expect(res).to.have.status(200);
    expect(res.text).to.contain(`Fight!`);
    expect(res).to.be.html;
  });
});