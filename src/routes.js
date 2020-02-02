import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

// funcao precisa ser asyncrona pq pode demorar pra executar
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gean Carlos Brandao',
    email: 'gean.kar@brave.ag',
    password_hash: '1234567',
  });

  res.json({ usuario: user });
});

export default routes;
