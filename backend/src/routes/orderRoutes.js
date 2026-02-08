import express from 'express';
import { createOrder, getDashboardStats } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/dashboard-stats', getDashboardStats);

export default router;
