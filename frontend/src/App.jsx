import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';
import { FAQPage } from './pages/FAQPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';
import { PaymentPage } from './pages/PaymentPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ProductsPage } from './pages/ProductsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ServicesPage } from './pages/ServicesPage';
import { TermsPage } from './pages/TermsPage';
import { WarrantyPage } from './pages/WarrantyPage';

const App = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/warranty" element={<WarrantyPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </MainLayout>
);

export default App;
