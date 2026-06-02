import { Camera,MapPin, Phone, Clock3 } from 'lucide-react';


import {
  BARBER_APP_LINK,
  WHATSAPP_LINK
} from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="section-tag">Prime Club</span>

        <h2>Presença, estilo e experiência em cada detalhe.</h2>

        <p>
          Uma barbearia criada para quem valoriza atendimento de qualidade,
          ambiente premium e acabamento de alto nível.
        </p>

        <div className="footer-mini">
          <span>
            <Clock3 size={15} />
            Atendimento com hora marcada
          </span>
        </div>
      </div>

      <div className="footer-links">
        <span className="section-tag">Contato</span>

        <a
          href={BARBER_APP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={16} />
          Agendar pelo Barber App
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={16} />
          Falar pelo WhatsApp
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        > <Camera size={16} />
          Instagram da barbearia
        </a>

        <span>
          <MapPin size={16} />
          Governador Celso Ramos - SC
        </span>
      </div>
    </footer>
  );
}