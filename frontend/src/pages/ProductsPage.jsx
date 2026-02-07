import { SectionTitle } from '../components/SectionTitle';
import { useShop } from '../context/ShopContext';

export const ProductsPage = () => {
  const { products } = useShop();

  return (
    <div>
      <SectionTitle title="Products" subtitle="Beds, sofas, dining, almari and custom pieces." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item._id} className="bg-white rounded-xl shadow p-4">
            <img src={item.image} alt={item.name} className="h-52 w-full object-cover rounded" />
            <h3 className="font-bold mt-3">{item.name}</h3>
            <p className="text-sm text-wood/70">{item.description}</p>
            <p className="mt-2 text-gold font-semibold">₹{item.price.toLocaleString('en-IN')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
