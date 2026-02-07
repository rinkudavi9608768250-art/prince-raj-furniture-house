import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import { Product } from '../models/Product.js';
import { Review } from '../models/Review.js';

dotenv.config();
await connectDB();

const products = [
  {
    name: 'Royal Sheesham Bed',
    category: 'Bed',
    description: 'Luxury king-size bed with elegant hand-polished sheesham finish.',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    name: 'Maharaja Sofa Set',
    category: 'Sofa',
    description: 'Premium 5-seater sofa with strong wooden frame and plush comfort.',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    name: 'Classic Dining Table',
    category: 'Dining',
    description: '6-seater wooden dining table crafted for families and guests.',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Premium Wooden Almari',
    category: 'Almari',
    description: 'Large storage almari with stylish doors and premium hardware.',
    price: 39000,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
  },
];

const reviews = [
  { name: 'Ravi Kumar', rating: 5, city: 'Bihar Sharif', comment: 'Best furniture quality and finishing in Nalanda district.' },
  { name: 'Sonia Devi', rating: 5, city: 'Chandi', comment: 'Custom order bilkul perfect mila. Delivery bhi on time thi.' },
  { name: 'Aman Raj', rating: 4, city: 'Patna', comment: 'Bed and dining table quality is premium and durable.' },
];

await Product.deleteMany();
await Review.deleteMany();
await Product.insertMany(products);
await Review.insertMany(reviews);

console.log('Seed data inserted.');
process.exit(0);
