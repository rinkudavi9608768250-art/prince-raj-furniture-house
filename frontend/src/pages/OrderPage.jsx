import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderPage = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({ customerName: '', phone: '', email: '', address: '', productName: '', quantity: 1, unitPrice: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      customerName: order.customerName,
      phone: order.phone,
      email: order.email,
      address: order.address,
      items: [{ productName: order.productName, quantity: Number(order.quantity), unitPrice: Number(order.unitPrice) }],
      totalAmount: Number(order.quantity) * Number(order.unitPrice),
    };
    localStorage.setItem('pendingOrder', JSON.stringify(payload));
    navigate('/payment');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Order Page</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-3">
        {['customerName', 'phone', 'email', 'address', 'productName', 'quantity', 'unitPrice'].map((field) => (
          <input
            key={field}
            className="border p-2 rounded"
            placeholder={field}
            required
            value={order[field]}
            onChange={(e) => setOrder({ ...order, [field]: e.target.value })}
          />
        ))}
        <button className="md:col-span-2 bg-wood text-cream py-2 rounded">Proceed to Payment</button>
      </form>
    </div>
  );
};
