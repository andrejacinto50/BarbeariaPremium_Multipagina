import PageHero from '../components/PageHero.jsx';
import { barbers, BARBER_APP_LINK } from '../data/siteData.js';

export default function Team() {
  return (
    <main>
      <PageHero
        eyebrow="Equipe"
        title="Profissionais que entendem de estilo, técnica e acabamento."
        text="Cada barbeiro carrega uma especialidade, um estilo de atendimento e o cuidado necessário para entregar um resultado alinhado com a tua presença."
      />

      <section className="section cards">
        {barbers.map((b) => (
          <article className="team-card" key={b.name}>
            <img src={b.image} alt={b.name} />

            <div>
              <h2>{b.name}</h2>

              <span>{b.role}</span>

              <p>{b.bio}</p>

              <a href={BARBER_APP_LINK} target="_blank" rel="noreferrer">
                Agendar com profissional
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}