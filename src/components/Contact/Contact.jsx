import './Contact.css';
import logo from '../../assets/rafs-logo.jpg';
import novarLogo from '../../assets/novar.jpg';

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact-footer">
      <div className="section-shell">
        
        <div className="bento-grid">
          
          {/* Card 1: Brand & Manifesto (Large) */}
          <div className="bento-card bento-brand">
            <img
              src={logo}
              alt="Logo de RAFS, Réseau pour l'Autonomie des Femmes du Sankaran"
              className="bento-logo"
              width="200"
              height="200"
              loading="lazy"
              decoding="async"
            />
            <h2 className="bento-heading">Travaillons<br/>Ensemble.</h2>
            <p className="bento-copy">
              Partenariat, appui en matériel, mentorat ou mise en relation :
              chaque contribution aide une femme à transformer une compétence en activité durable.
            </p>
            <p className="bento-address">
              <strong>Siège :</strong> Faranah, République de Guinée
            </p>
          </div>

          {/* Card 2: Form (Tall) */}
          <div className="bento-card bento-form-card">
            <h3>Envoyez-nous un message</h3>
            <form
              className="bento-form"
              action="mailto:reseaudautonomisationrafs@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label>
                Nom
                <input type="text" name="nom" placeholder="Votre nom" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="vous@email.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Votre message pour RAFS" required />
              </label>
              <button type="submit" className="woven-button">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Card 3: WhatsApp (Square) */}
          <a href="https://wa.me/224629342448" target="_blank" rel="noreferrer" className="bento-card bento-link bento-whatsapp">
            <span className="bento-label">WhatsApp</span>
            <strong>+224 629 34 24 48</strong>
            <div className="bento-icon">↗</div>
          </a>

          {/* Card 4: Community (Square) */}
          <a href="https://chat.whatsapp.com/DfDZtqs01rp7D7mezR66JL" target="_blank" rel="noreferrer" className="bento-card bento-link bento-community">
            <span className="bento-label">Communauté</span>
            <strong>Rejoindre le groupe</strong>
            <div className="bento-icon">↗</div>
          </a>

          {/* Card 5: Email (Wide) */}
          <a href="mailto:reseaudautonomisationrafs@gmail.com" className="bento-card bento-link bento-email">
            <span className="bento-label">Email</span>
            <strong>reseaudautonomisationrafs@gmail.com</strong>
            <div className="bento-icon">↗</div>
          </a>

          {/* Card 6: Facebook (Wide) */}
          <a href="https://www.facebook.com/profile.php?id=61588964693920" target="_blank" rel="noreferrer" className="bento-card bento-link bento-facebook">
            <span className="bento-label">Facebook</span>
            <strong>Page officielle RAFS</strong>
            <div className="bento-icon">↗</div>
          </a>

        </div>

        <div className="footer-bottom">
          <p>© {year} RAFS Faranah. Réseau pour l’Autonomie des Femmes du Sankaran.</p>
          
          <div className="footer-credits">
            <span>Développé par</span>
            <span className="novar-badge">
              <img
                src={novarLogo}
                alt="Novar"
                className="novar-logo"
                loading="lazy"
                decoding="async"
              />
            </span>
          </div>
        </div>
      </div>

      <a href="#accueil" className="back-to-top" aria-label="Retour en haut">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </a>
    </footer>
  );
};

export default Contact;
