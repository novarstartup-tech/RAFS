import { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/optimized/hero-network.jpg';
import img2 from '../../assets/optimized/training.jpg';
import img3 from '../../assets/optimized/working.jpg';
import img4 from '../../assets/optimized/graduates.jpg';

const heroImages = [
  {
    src: img1,
    title: 'Réseau de femmes entrepreneuses en formation à Faranah',
  },
  {
    src: img2,
    title: 'Encadrement pratique autour des métiers et de la production',
  },
  {
    src: img3,
    title: 'Atelier de transformation des compétences en activités économiques',
  },
  {
    src: img4,
    title: 'Certification et reconnaissance publique des apprenantes',
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const activeImage = heroImages[currentImage];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="hero">
      <div className="hero-slider" aria-hidden="true">
        <img key={activeImage.src} className="slide active" src={activeImage.src} alt="" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-weave" />
      </div>

      <div className="hero-content section-shell">
        <div className="hero-copy">
          <p className="hero-kicker">Faranah, Guinée</p>
          <h1>Former les entrepreneuses et leaders de demain.</h1>
          <p className="hero-lead">
            RAFS est un réseau d’autonomisation globale de la femme : artisanat, agro-alimentaire,
            chimie locale, leadership, finance et gestion d’entreprise au service des femmes du Sankaran.
          </p>

          <div className="button-row hero-actions">
            <a className="woven-button" href="#formations">
              Découvrir les pôles
            </a>
            <a className="outline-button" href="#contact">
              Devenir partenaire
            </a>
          </div>

          <div className="hero-metrics" aria-label="Chiffres clés de RAFS">
            <div>
              <strong>3</strong>
              <span>pôles de formation</span>
            </div>
            <div>
              <strong>1</strong>
              <span>réseau territorial</span>
            </div>
            <div>
              <strong>360°</strong>
              <span>autonomie féminine</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Instantané RAFS">
          <div className="hero-panel-image">
            <img src={activeImage.src} alt={activeImage.title} width="380" height="475" />
          </div>
          <div className="hero-panel-copy">
            <span>Incubateur féminin</span>
            <p>{activeImage.title}</p>
          </div>
          <div className="hero-dots" role="tablist" aria-label="Images de présentation">
            {heroImages.map((image, index) => (
              <button
                key={image.title}
                type="button"
                className={index === currentImage ? 'active' : ''}
                aria-label={`Afficher : ${image.title}`}
                aria-selected={index === currentImage}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </aside>
      </div>

      <a className="hero-scroll" href="#impact" aria-label="Aller à la section impact">
        <span>Découvrir</span>
      </a>
    </section>
  );
};

export default Hero;
