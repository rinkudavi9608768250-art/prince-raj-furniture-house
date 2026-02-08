import express from 'express';
import enquiryRoutes from './enquiryRoutes.js';
import orderRoutes from './orderRoutes.js';
import productRoutes from './productRoutes.js';
import reviewRoutes from './reviewRoutes.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ ok: true, message: 'Prince Raj Furniture House API is running securely.' });
});

router.use('/products', productRoutes);
router.use('/reviews', reviewRoutes);
router.use('/orders', orderRoutes);
router.use('/enquiries', enquiryRoutes);

export default router;
