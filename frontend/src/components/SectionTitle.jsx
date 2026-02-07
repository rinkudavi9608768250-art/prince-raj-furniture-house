export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-3xl md:text-4xl font-bold text-wood">{title}</h1>
    {subtitle ? <p className="text-wood/80 mt-2">{subtitle}</p> : null}
  </div>
);
