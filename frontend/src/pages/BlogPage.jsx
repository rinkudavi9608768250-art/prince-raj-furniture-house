import { SectionTitle } from '../components/SectionTitle';
import { blogs } from '../data/siteData';

export const BlogPage = () => (
  <div>
    <SectionTitle title="Blog" subtitle="Furniture care tips and latest updates." />
    <div className="grid md:grid-cols-3 gap-5">
      {blogs.map((blog) => (
        <article key={blog.title} className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold">{blog.title}</h3>
          <p className="mt-2 text-wood/80">{blog.excerpt}</p>
        </article>
      ))}
    </div>
  </div>
);
