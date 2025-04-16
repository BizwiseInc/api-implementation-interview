import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Express API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 