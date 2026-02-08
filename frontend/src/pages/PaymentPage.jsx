import { useState } from 'react';
import { api } from '../api/api';

export const PaymentPage = () => {
  const [status, setStatus] = useState('');
  const order = JSON.parse(localStorage.getItem('pendingOrder') || '{}');

  const payNow = async () => {
    if (!order.customerName) {
      setStatus('Please create an order first.');
      return;
    }

    const payload = { ...order, paymentStatus: 'paid' };
    await api.post('/orders', payload);
    localStorage.removeItem('pendingOrder');
    setStatus('Payment successful! Order placed securely.');
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Payment Page</h1>
      <p className="bg-white p-4 rounded shadow">Demo secure gateway (SSL-ready on deployment): UPI / Card / Net Banking simulation.</p>
      <button onClick={payNow} className="bg-gold text-wood px-5 py-2 rounded font-semibold">Pay Now</button>
      {status ? <p className="text-green-700">{status}</p> : null}
    </div>
  );
};
