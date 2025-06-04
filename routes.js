import express from 'express';
import creditCardData from './data.js';

const router = express.Router();

// Define endpoint for credit card data
router.get('/credit-cards', (req, res) => {
  res.json(creditCardData);
});

export default router;