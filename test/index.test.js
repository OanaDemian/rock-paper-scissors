import { expect }  from 'chai';
import  chaiHttp from 'chai-http';
import { app } from '../app.js';
import  chai from 'chai';

chai.use(chaiHttp);

describe(`app router tests`, () => {
      const testApp = chai.request(app);
      it(`should render index page first`, async () => {
        const res = await testApp.get(`/`)
          expect(res).to.have.status(200);
          expect(res).to.be.html;
      });
  });