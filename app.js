import express from 'express'; 
import { router as indexRouter } from './routes/index.js';

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.listen(port, () => {
  console.log(`Rock Paper Scissors app listening at http://localhost:${port}`)
});
