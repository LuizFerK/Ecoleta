import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  response.json([
    'Diego',
    'Luiz',
    'Gutin',
  ]);
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
