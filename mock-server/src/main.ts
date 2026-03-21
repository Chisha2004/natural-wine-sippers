/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';

// import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/user.routes';
import { registerGenericRoutes } from './routes/generic-config.routes';
import { registerFileNamedRoutes } from './routes/generic-file-named.routes';

const app = express();

app.use((req, res, next) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // Or your frontend URL
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    // Preflight request: just return OK
    return res.sendStatus(204);
  }

  next();
});

// Register generic routes from config files
registerGenericRoutes(app);

// Register file-named routes by convention
registerFileNamedRoutes(app);

app.use('/api', usersRoutes);
app.use('/api/cart', usersRoutes);

// Optional error simulation route
app.get('/api/error', (req, res) =>
  res.status(500).json({ error: 'Simulated server error' })
);

// Optional latency middleware
app.use((req, res, next) => setTimeout(next, 500));

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
