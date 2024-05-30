import express, { Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//Not Found
app.use(notFound);

export default app;
