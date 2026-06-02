import './Products.css';
import programImage1 from '../../assets/optimized/outputs.jpg';
import programImage2 from '../../assets/optimized/saponification.png';
import programImage3 from '../../assets/optimized/community.jpg';

const initiatives = [
  {
    id: 1,
    name: 'Métiers créatifs',
    category: 'Artisanat et couture',
    detail: 'Des ateliers qui transforment la précision, le goût et le savoir-faire local en activités économiques.',
    image: programImage1,
  },
  {
    id: 2,
    name: 'Production locale',
    category: 'Agro-alimentaire et saponification',
    detail: 'Des compétences de transformation pour créer des revenus autour de produits utiles au quotidien.',
    image: programImage2,
  },
  {
    id: 3,
    name: 'Leadership féminin',
    category: 'Finance, gestion et conférences',
    detail: 'Des espaces de parole et de formation pour préparer des femmes capables de négocier, gérer et décider.',
    image: programImage3,
  },
];

const Products = () => {
  return (
    <section id="creations" className="products">
      <div className="section-shell products-layout">
        <div className="products-heading">
          <span className="section-kicker">Initiatives</span>
          <h2 className="section-heading">Des programmes concrets, pensés pour l’autonomie économique.</h2>
          <p className="section-copy">
            Les productions visibles ne sont qu’une partie du travail. Derrière chaque activité RAFS,
            il y a un parcours de formation, un projet professionnel et une ambition collective.
          </p>
        </div>

        <div className="products-grid">
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="product-card">
              <img
                src={initiative.image}
                alt={initiative.name}
                className="product-img"
                loading="lazy"
                decoding="async"
                width="900"
                height="600"
              />
              <div className="product-info">
                <span>{initiative.category}</span>
                <h3>{initiative.name}</h3>
                <p>{initiative.detail}</p>
                <a href="#contact" className="text-link">
                  Soutenir ce pôle
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="products-callout">
          <p>
            Soutenir RAFS, c’est financer des formations, du matériel, des formatrices et un cadre
            d’incubation pour les entrepreneuses de Faranah.
          </p>
          <a className="woven-button" href="#contact">
            Proposer un partenariat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
