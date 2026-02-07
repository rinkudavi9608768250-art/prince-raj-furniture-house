import { SectionTitle } from '../components/SectionTitle';
import { services } from '../data/siteData';

export const ServicesPage = () => (
  <div>
    <SectionTitle title="Services" subtitle="A to Z furniture solutions under one roof." />
    <div className="grid gap-4">
      {services.map((service) => (
        <article key={service} className="bg-white p-5 rounded-lg shadow border border-gold/30">
          {service}
        </article>
      ))}
    </div>
  </div>
);
