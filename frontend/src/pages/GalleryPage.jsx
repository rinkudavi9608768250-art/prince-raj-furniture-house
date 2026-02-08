import { SectionTitle } from '../components/SectionTitle';
import { galleryImages } from '../data/siteData';

export const GalleryPage = () => (
  <div>
    <SectionTitle title="Gallery" subtitle="Sample wood + ply inspired design references." />
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((img) => (
        <img key={img} src={img} alt="Furniture design" className="h-48 w-full object-cover rounded-xl shadow" />
      ))}
    </div>
  </div>
);
