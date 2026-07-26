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
  {
    id: 2,
    src: sac2,
    alt: "Sac à main au crochet en fil chenille bleu et beige, chaîne dorée, réalisé par une artisane RAFS à Faranah",
  },
  {
    id: 3,
    src: sac3,
    alt: "Sac à bandoulière crocheté bleu turquoise et noir avec fermoir doré, création RAFS",
  },
  {
    id: 4,
    src: sac4,
    alt: "Sac au crochet à motif zigzag rouge et vert d'eau, chaîne dorée, artisanat féminin du Sankaran",
  },
  {
    id: 5,
    src: sac5,
    alt: "Sac crocheté à chevrons bleus et vert menthe, fait main par les femmes du réseau RAFS",
  },
  {
    id: 6,
    src: sac6,
    alt: "Sac à main en fil chenille rouge et écru à motif zigzag, création artisanale RAFS Faranah",
  },
  {
    id: 7,
    src: sac7,
    alt: "Sac crocheté beige et noir à rayures avec chaîne dorée, réalisé en formation couture RAFS",
  },
  {
    id: 8,
    src: sac8,
    alt: "Sac à main crocheté chiné bordeaux et blanc, chaîne argentée, artisanat des femmes de Faranah",
  },
  {
    id: 9,
    src: sac9,
    alt: "Collection de sacs à main au crochet aux couleurs variées, produits par les apprenantes RAFS",
  },
  {
    id: 10,
    src: sac10,
    alt: "Sacs à main crochetés vert menthe et rouge présentés côte à côte, production RAFS Faranah",
  },
  {
    id: 12,
    src: sac12,
    alt: "Assortiment de sacs à main en fil chenille crochetés par les artisanes du réseau RAFS",
  },
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
              {[...creations, ...creations].map((item, index) => {
                // La seconde moitié n'est qu'un clone visuel pour la boucle du
                // carrousel : on la masque aux lecteurs d'écran et aux moteurs
                // pour ne pas dupliquer chaque création.
                const isClone = index >= creations.length;

                return (
                  <figure
                    key={`${item.id}-${index}`}
                    className="gallery-item"
                    aria-hidden={isClone || undefined}
                  >
                    <div className="gallery-img-container">
                      <img
                        src={item.src}
                        alt={isClone ? '' : item.alt}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="1067"
                      />
                    </div>
                  </figure>
                );
              })}
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
