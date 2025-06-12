import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Express API!' });
});

app.post('/', (req: Request, res: Response) => {
  // Example of how to get the user-id from the headers
  const userId = req.headers['user-id'];

  res.json({ 
    userId,
    status: 'Message received successfully'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 