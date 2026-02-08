import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../api/api';

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [productRes, reviewRes] = await Promise.all([api.get('/products'), api.get('/reviews')]);
        setProducts(productRes.data);
        setReviews(reviewRes.data);
      } catch {
        // Fallback content so UI still works for beginners even without backend running.
        setProducts([]);
        setReviews([]);
      }
    };

    loadInitialData();
  }, []);

  return <ShopContext.Provider value={{ products, reviews, setReviews }}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);
