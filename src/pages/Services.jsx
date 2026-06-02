import PageHero from '../components/PageHero.jsx';
import { services, BARBER_APP_LINK } from '../data/siteData.js';

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Corte, barba e cuidados para elevar tua presença."
        text="Serviços pensados para quem valoriza estilo, acabamento preciso e uma experiência premium do início ao fim."
      />

      <section className="section service-list">
        {services.map((s) => (
          <article className="service-wide" key={s.title}>
            <img src={s.image} alt={s.title} />

            <div>
              <span>{s.price}</span>

              <h2>{s.title}</h2>

              <p>{s.description}</p>

              <a
                className="btn primary"
                href={BARBER_APP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Agendar este serviço
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}