import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/rafs-logo.jpg';

const links = [
  { label: 'Impact', href: '#impact' },
  { label: 'Histoire', href: '#about' },
  { label: 'Programmes', href: '#formations' },
  { label: 'Initiatives', href: '#creations' },
  { label: 'Galerie Solidaire', href: '#galerie' },
  { label: 'Actualités', href: '#actualites' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`nav-shell ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="brand-mark" href="#accueil" aria-label="Accueil RAFS" onClick={closeMenu}>
        <img src={logo} alt="" />
        <span>
          <strong>RAFS</strong>
          <small>Femmes du Sankaran</small>
        </span>
      </a>

      <button
        className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        aria-label="Ouvrir le menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="site-navigation"
        className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Navigation principale"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Partenariat
      </a>
    </header>
  );
};

export default Navbar;
