import './Impact.css';

const metrics = [
  {
    value: '3',
    label: 'pôles structurants',
    text: 'Artisanat, agro-alimentaire/chimie locale, développement personnel et professionnel.',
  },
  {
    value: '360°',
    label: 'autonomisation',
    text: 'Compétences techniques, confiance, gestion, finance et posture entrepreneuriale.',
  },
  {
    value: '1',
    label: 'réseau à Faranah',
    text: 'Un ancrage local pour connecter les apprenantes, les formatrices et les partenaires.',
  },
];

const Impact = () => {
  return (
    <section id="impact" className="impact">
      <div className="section-shell impact-layout">
        <div className="impact-statement">
          <span className="section-kicker">Impact</span>
          <h2 className="section-heading">Un réseau peut révéler une entrepreneuse, une productrice, une leader.</h2>
          <p className="section-copy">
            RAFS agit comme une plateforme de formation et d’incubation locale. L’ONG aide les femmes
            à acquérir des compétences rentables, à structurer leurs projets et à prendre la parole
            dans leur communauté.
          </p>
        </div>

        <div className="impact-grid">
          {metrics.map((metric) => (
            <article className="impact-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
