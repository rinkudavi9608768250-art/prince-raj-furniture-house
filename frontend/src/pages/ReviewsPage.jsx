import { useState } from 'react';
import { api } from '../api/api';
import { SectionTitle } from '../components/SectionTitle';
import { useShop } from '../context/ShopContext';

export const ReviewsPage = () => {
  const { reviews, setReviews } = useShop();
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' });

  const submitReview = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/reviews', form);
    setReviews((prev) => [data, ...prev]);
    setForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="space-y-8">
      <SectionTitle title="Customer Reviews" subtitle="Live review and rating system." />
      <form onSubmit={submitReview} className="bg-white p-5 rounded-xl shadow grid md:grid-cols-3 gap-3">
        <input className="border p-2 rounded" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <select className="border p-2 rounded" value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}>
          {[5,4,3,2,1].map((r) => <option key={r} value={r}>{r} Star</option>)}
        </select>
        <input className="border p-2 rounded" placeholder="Comment" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} required />
        <button className="md:col-span-3 bg-wood text-cream py-2 rounded">Submit Review</button>
      </form>
      <div className="grid gap-4">
        {reviews.map((review) => (
          <article key={review._id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">{review.name} - {'⭐'.repeat(review.rating)}</h3>
            <p>{review.comment}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
