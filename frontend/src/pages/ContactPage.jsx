import { useState } from 'react';
import { api } from '../api/api';
import { SectionTitle } from '../components/SectionTitle';
import { business } from '../data/siteData';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/enquiries', form);
    setMessage('Enquiry submitted successfully. We will call you soon.');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="space-y-6">
      <SectionTitle title="Contact Us" subtitle={business.location} />
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-5 grid md:grid-cols-2 gap-3">
        <input className="border p-2 rounded" placeholder="Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea className="border p-2 rounded md:col-span-2" placeholder="Message" rows="4" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="md:col-span-2 bg-gold text-wood py-2 rounded font-semibold">Send Enquiry</button>
      </form>
      {message ? <p className="text-green-700">{message}</p> : null}
    </div>
  );
};
