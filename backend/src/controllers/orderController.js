import { Order } from '../models/Order.js';

export const createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const getDashboardStats = async (req, res, next) => {
  try {
    const [totalOrders, paidOrders, totalRevenue] = await Promise.all([
      Order.countDocuments(),
      Order.countDocuments({ paymentStatus: 'paid' }),
      Order.aggregate([{ $group: { _id: null, revenue: { $sum: '$totalAmount' } } }]),
    ]);

    res.json({
      totalOrders,
      paidOrders,
      totalRevenue: totalRevenue[0]?.revenue ?? 0,
    });
  } catch (error) {
    next(error);
  }
};
