import './News.css';
import img1 from '../../assets/optimized/hero-network.jpg';
import img2 from '../../assets/optimized/community.jpg';
import img3 from '../../assets/optimized/graduates.jpg';

const moments = [
  { src: img1, label: 'Promotion RAFS et productions locales' },
  { src: img3, label: 'Reconnaissance des parcours de formation' },
  { src: img2, label: 'Communauté RAFS réunie' },
];

const News = () => {
  return (
    <section id="actualites" className="news">
      <div className="section-shell news-layout">
        <div className="news-text">
          <span className="section-kicker">Actualités</span>
          <h2 className="section-heading">Une promotion RAFS, ce sont des compétences qui deviennent visibles.</h2>
          <p className="section-copy">
            La cérémonie de remise d’attestations a célébré les apprenantes, les formateurs et les
            soutiens locaux. Ce moment public montre l’ambition du réseau : former des femmes capables
            de produire, gérer, entreprendre et inspirer leur communauté.
          </p>
          <a className="outline-button" href="#contact">
            Rejoindre la prochaine étape
          </a>
        </div>

        <div className="news-gallery" aria-label="Moments de la cérémonie RAFS">
          {moments.map((moment, index) => (
            <figure className={`news-frame frame-${index + 1}`} key={moment.label}>
              <img
                src={moment.src}
                alt={moment.label}
                loading="lazy"
                decoding="async"
                width="1000"
                height="667"
              />
              <figcaption>{moment.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="news-marquee" aria-hidden="true">
        <div>
          <span>Former</span>
          <span>Entreprendre</span>
          <span>Produire</span>
          <span>Diriger</span>
          <span>Gérer</span>
          <span>Former</span>
          <span>Entreprendre</span>
          <span>Produire</span>
          <span>Diriger</span>
          <span>Gérer</span>
        </div>
      </div>
    </section>
  );
};

export default News;
