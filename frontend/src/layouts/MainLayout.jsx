import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-cream text-wood">
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    <Footer />
  </div>
);
