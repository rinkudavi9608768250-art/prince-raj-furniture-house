import { useEffect, useState } from 'react';
import { api } from '../api/api';

export const DashboardPage = () => {
  const [stats, setStats] = useState({ totalOrders: 0, paidOrders: 0, totalRevenue: 0 });

  useEffect(() => {
    api.get('/orders/dashboard-stats').then((res) => setStats(res.data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 shadow"><p>Total Orders</p><h2 className="text-2xl font-bold">{stats.totalOrders}</h2></div>
        <div className="bg-white rounded-xl p-5 shadow"><p>Paid Orders</p><h2 className="text-2xl font-bold">{stats.paidOrders}</h2></div>
        <div className="bg-white rounded-xl p-5 shadow"><p>Total Revenue</p><h2 className="text-2xl font-bold">₹{Number(stats.totalRevenue).toLocaleString('en-IN')}</h2></div>
      </div>
    </div>
  );
};
