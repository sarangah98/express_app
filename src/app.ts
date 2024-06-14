import express,{ Request, Response }  from "express";
import pool from "./db";


const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
    try {
        const client = await pool.connect();
        await client.query('SELECT NOW()');
        client.release();
        res.send('Database connection successful!');
      } catch (err) {
        res.status(500).send('Database connection failed!');
      }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });