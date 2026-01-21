import express from 'express';
import todoRoutes from './routes/todo.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use(errorMiddleware);

export default app;
