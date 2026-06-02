import './About.css';
import aboutImage from '../../assets/optimized/training.jpg';
import workshopImage from '../../assets/optimized/working.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-shell about-layout">
        <div className="about-media">
          <div className="about-photo-main">
            <img
              src={aboutImage}
              alt="Formatrice RAFS auprès des apprenantes en atelier"
              loading="lazy"
              decoding="async"
              width="900"
              height="600"
            />
          </div>
          <div className="about-photo-small">
            <img
              src={workshopImage}
              alt="Jeunes femmes RAFS en séance pratique"
              loading="lazy"
              decoding="async"
              width="900"
              height="757"
            />
          </div>
          <div className="about-badge">
            <span>RAFS</span>
            <strong>Faranah</strong>
          </div>
        </div>

        <div className="about-text">
          <span className="section-kicker">Notre histoire</span>
          <h2 className="section-heading">Une ONG pour transformer le potentiel féminin en pouvoir économique.</h2>
          <p>
            Située au cœur de Faranah, RAFS accompagne les femmes dans toutes les dimensions de leur
            autonomisation : apprendre un métier, comprendre la gestion, prendre confiance, créer une
            activité et devenir une référence dans son environnement.
          </p>
          <p>
            Le réseau rassemble des formations pratiques en couture, perlage, pâtisserie et
            saponification, mais aussi des conférences et modules en leadership, finance personnelle,
            gestion d’entreprise et entrepreneuriat féminin.
          </p>

          <div className="about-values" aria-label="Valeurs RAFS">
            <article>
              <strong>Former</strong>
              <span>des compétences techniques et professionnelles</span>
            </article>
            <article>
              <strong>Incuber</strong>
              <span>des micro-entreprises portées par des femmes</span>
            </article>
            <article>
              <strong>Connecter</strong>
              <span>les apprenantes aux marchés, mentors et partenaires</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
