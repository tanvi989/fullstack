import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.get('/api/hello', (req: Request, res: Response) => {
  res.send('Hello World from Node.js!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
