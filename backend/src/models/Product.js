import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    material: { type: String, default: 'Solid Wood + Premium Ply' },
    warrantyYears: { type: Number, default: 5 },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
