import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { useShop } from '../context/ShopContext';
import { business, services } from '../data/siteData';

export const HomePage = () => {
  const { products } = useShop();

  return (
    <div className="space-y-12">
      <section className="bg-texture bg-cover rounded-2xl shadow-luxury p-8 md:p-14 text-cream">
        <p className="text-gold uppercase tracking-widest">Luxury Wooden Furniture Since {business.established}</p>
        <h1 className="text-4xl md:text-6xl font-black mt-3">{business.name}</h1>
        <p className="text-xl mt-3">{business.tagline}</p>
        <p className="mt-2 max-w-2xl">{business.story}</p>
        <div className="mt-6 flex gap-4">
          <Link to="/order" className="bg-gold text-wood px-5 py-2 rounded font-semibold">Order Now</Link>
          <Link to="/contact" className="border border-gold px-5 py-2 rounded">Enquire</Link>
        </div>
      </section>

      <section>
        <SectionTitle title="Featured Collections" subtitle="Premium wood + ply designs with modern royal finish." />
        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow p-4">
              <img src={item.image} alt={item.name} className="h-52 w-full object-cover rounded" />
              <h3 className="font-bold mt-3">{item.name}</h3>
              <p className="text-sm">₹{item.price.toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Our Signature Services" />
        <ul className="grid md:grid-cols-2 gap-3">
          {services.map((service) => (
            <li key={service} className="bg-white rounded-lg px-4 py-3 shadow-sm border-l-4 border-gold">{service}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
