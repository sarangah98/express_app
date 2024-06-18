// src/routes/testRoute.ts
import { Router } from 'express';
import { Client } from 'pg';

const testRoute = (client: Client) => {
  const router = Router();

  router.get('/testRoute', async (req, res) => {
    res.send('This is test route');
  });

  return router;
};

export default testRoute;
