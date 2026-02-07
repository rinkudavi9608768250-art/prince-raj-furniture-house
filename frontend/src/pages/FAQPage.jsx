import { SectionTitle } from '../components/SectionTitle';
import { faqs } from '../data/siteData';

export const FAQPage = () => (
  <div>
    <SectionTitle title="Frequently Asked Questions" />
    <div className="space-y-4">
      {faqs.map((item) => (
        <details key={item.q} className="bg-white rounded-lg p-4 shadow">
          <summary className="font-semibold cursor-pointer">{item.q}</summary>
          <p className="mt-2">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
);
