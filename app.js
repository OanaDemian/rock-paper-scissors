import express, { Router } from 'express'; 
import { router as indexRouter } from './routes/index.js';
import { router as gameRouter } from './routes/game.js';

const port = 3000;
export const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/game', gameRouter);

app.listen(port, () => {
  console.log(`Rock Paper Scissors app listening at http://localhost:${port}`)
});
