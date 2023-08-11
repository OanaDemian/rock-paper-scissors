import { app } from "../app.js";
import chai from "./chai-local.js";

describe(`game router tests`, () => {
  it(`checks post requests to /game/new redirects`, async () => {
    await chai
      .request(app)
      .post("/game/new")
      .type("form")
      .send({
        playerOne: "Barbie",
        playerTwo: "Ken",
      })
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
      });
  });
});
