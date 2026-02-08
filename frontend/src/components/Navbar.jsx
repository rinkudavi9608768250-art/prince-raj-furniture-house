import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/products', 'Products'],
  ['/gallery', 'Gallery'],
  ['/reviews', 'Reviews'],
  ['/contact', 'Contact'],
  ['/dashboard', 'Dashboard'],
];

export const Navbar = () => (
  <header className="sticky top-0 z-50 bg-wood/95 backdrop-blur border-b border-gold/30">
    <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-4 justify-between items-center">
      <Logo />
      <div className="flex flex-wrap gap-3 text-sm md:text-base">
        {links.map(([to, label]) => (
          <Link key={to} to={to} className="text-cream hover:text-gold transition">
            {label}
          </Link>
        ))}
      </div>
    </nav>
  </header>
);
