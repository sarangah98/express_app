import express from 'express';
import { Client } from 'pg';
import testRoute from './routes/testRoute';
import dotenv from 'dotenv';

dotenv.config();

console.log(`Database URL: ${process.env.DATABASE_URL}`);

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client
  .connect()
  .then(() => console.log('Connected to database'))
  .catch((err: Error) => console.error('Failed to connect to database', err));

app.use('/admin', testRoute(client));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { client };
