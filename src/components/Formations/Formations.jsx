import './Formations.css';

const CraftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 20 20 4" />
    <path d="m15 4 5 5" />
    <path d="M6.5 17.5c2 2 5.2 2 7.2 0" />
    <path d="M4 12c2.8-1.4 5.2-1.4 7.4 0 2.3 1.4 4.6 1.4 7.1 0" />
  </svg>
);

const ProductionIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 21h14" />
    <path d="M7 21V9l5-4 5 4v12" />
    <path d="M9 14h6" />
    <path d="M9 17h6" />
    <path d="M8 6V3h3" />
  </svg>
);

const LeadershipIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4Z" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
    <path d="M8 21h8" />
  </svg>
);

const formations = [
  {
    icon: <CraftIcon />,
    title: 'Artisanat et métiers créatifs',
    text: 'Des formations pratiques pour produire, améliorer la qualité et valoriser les savoir-faire locaux.',
    modules: ['Couture', 'Perlage', 'Accessoires'],
  },
  {
    icon: <ProductionIcon />,
    title: 'Agro-alimentaire et chimie locale',
    text: 'Des compétences utiles et monétisables pour développer des activités de transformation à petite échelle.',
    modules: ['Pâtisserie', 'Saponification', 'Hygiène de production'],
  },
  {
    icon: <LeadershipIcon />,
    title: 'Leadership, finance et gestion',
    text: 'Des modules pour structurer une activité, parler avec assurance, gérer l’argent et prendre des décisions.',
    modules: ['Leadership', 'Finance', 'Gestion d’entreprise'],
  },
];

const Formations = () => {
  return (
    <section id="formations" className="formations">
      <div className="section-shell formations-layout">
        <div className="formations-heading">
          <span className="section-kicker">Programmes</span>
          <h2 className="section-heading">Trois pôles pour former des femmes capables de produire, gérer et diriger.</h2>
          <p className="section-copy">
            RAFS agit comme un incubateur de compétences : chaque parcours associe apprentissage
            technique, esprit entrepreneurial, confiance personnelle et vision professionnelle.
          </p>
        </div>

        <div className="formations-list">
          {formations.map((formation, index) => (
            <article className="formation-item" key={formation.title}>
              <span className="formation-step">0{index + 1}</span>
              <div className="formation-icon">{formation.icon}</div>
              <div>
                <h3>{formation.title}</h3>
                <p>{formation.text}</p>
                <ul className="formation-tags" aria-label={`Modules ${formation.title}`}>
                  {formation.modules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;
