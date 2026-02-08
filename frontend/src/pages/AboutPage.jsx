import { SectionTitle } from '../components/SectionTitle';
import { business } from '../data/siteData';

export const AboutPage = () => (
  <div>
    <SectionTitle title="About Us" subtitle="Craftsmanship, trust and family values from Nalanda." />
    <div className="bg-white p-6 rounded-xl shadow space-y-3">
      <p>
        <strong>{business.name}</strong> was founded in {business.established} by <strong>{business.owner}</strong> with a single
        mission: durable furniture with honest service.
      </p>
      <p>
        We have <strong>{business.workers} skilled workers</strong> building and restoring furniture for homes, schools,
        offices and hotels.
      </p>
      <p className="italic text-lg text-wood/80">“{business.story}”</p>
    </div>
  </div>
);
