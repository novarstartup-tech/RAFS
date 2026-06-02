import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';
import sac2 from '../../assets/optimized/sac-2.jpg';
import sac3 from '../../assets/optimized/sac-3.jpg';
import sac4 from '../../assets/optimized/sac-4.jpg';
import sac5 from '../../assets/optimized/sac-5.jpg';
import sac6 from '../../assets/optimized/sac-6.jpg';
import sac7 from '../../assets/optimized/sac-7.jpg';
import sac8 from '../../assets/optimized/sac-8.jpg';
import sac9 from '../../assets/optimized/sac-9.jpg';
import sac10 from '../../assets/optimized/sac-10.jpg';
import sac12 from '../../assets/optimized/sac-12.jpg';

const creations = [
  { id: 2, src: sac2, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 3, src: sac3, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 4, src: sac4, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 5, src: sac5, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 6, src: sac6, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 7, src: sac7, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 8, src: sac8, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 9, src: sac9, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 10, src: sac10, alt: 'Création artisanale par une apprenante RAFS' },
  { id: 12, src: sac12, alt: 'Création artisanale par une apprenante RAFS' },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    // We want to stop before the end depending on visible items. 
    // CSS handles the width, but JS needs to know the max index.
    // If we assume max 3 items visible, length - 3 is safe. On mobile it might just stop a bit early, or we can just loop infinitely.
    // Let's loop infinitely!
    setCurrentIndex((prev) => (prev + 1) % creations.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? creations.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="galerie" className="gallery">
      <div className="section-shell gallery-layout">
        <div className="gallery-header">
          <span className="section-kicker">L'Artisanat au service de l'Autonomie</span>
          <h2 className="section-heading">Chaque création finance le réseau et soutient une artisane.</h2>
          <p className="section-copy">
            Ces pièces uniques, réalisées avec passion par les femmes de RAFS à l’issue de leur
            formation, sont la preuve tangible de leur nouveau pouvoir économique.
            Acquérir une de ces pièces, c'est contribuer directement à notre mission d'autonomisation à Faranah.
          </p>
        </div>

        <div className="gallery-carousel-wrapper">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Précédent">
            &#8592;
          </button>
          
          <div className="gallery-carousel-viewport">
            <div 
              className="gallery-carousel-track" 
              style={{ transform: `translateX(calc(-${currentIndex} * var(--item-width)))` }}
            >
              {/* To make infinite loop visually pleasing without complex cloning, we just duplicate the array once so it flows nicely */}
              {[...creations, ...creations].map((item, index) => (
                <figure key={`${item.id}-${index}`} className="gallery-item">
                  <div className="gallery-img-container">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Suivant">
            &#8594;
          </button>
        </div>

        <div className="gallery-cta">
          <p>
            Vous souhaitez soutenir le réseau en acquérant l'une de ces créations ou en proposant un partenariat commercial ?
          </p>
          <a className="woven-button" href="#contact">
            Nous contacter pour commander
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
