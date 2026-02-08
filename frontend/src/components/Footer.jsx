import { business } from '../data/siteData';

export const Footer = () => (
  <footer className="mt-16 bg-[#1f120b] border-t border-gold/30 text-cream">
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="text-gold font-bold text-lg">{business.name}</h3>
        <p>{business.tagline}</p>
        <p className="mt-2">{business.story}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gold">Contact</h4>
        {business.phones.map((phone) => (
          <p key={phone}>{phone}</p>
        ))}
        {business.emails.map((email) => (
          <p key={email}>{email}</p>
        ))}
      </div>
      <div>
        <h4 className="font-semibold text-gold">Address</h4>
        <p>{business.location}</p>
        <p>Owner: {business.owner}</p>
        <p>Established: {business.established}</p>
      </div>
    </div>
  </footer>
);
