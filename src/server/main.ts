import express from 'express';
import cors from 'cors';

const app = express();
const port = 3100;
app.use(cors({ origin: '*' }));

app.get('/', (_req, res) => {
  res.send('Hello World! Hello now..!!');
});

app.get('/questionnaires', (_req, res) => {
  const questionnaires = [
    {
      name: 'LMS',
    },
    {
      name: 'FRS',
    },
  ];
  res.json(questionnaires);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
