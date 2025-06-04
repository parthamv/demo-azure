import express from 'express';
import routes from './routes.js';

const app = express();
const port = process.env.PORT || 3000;

// Use routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
