import {
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  MapPin,
  CalendarCheck,
  Scissors,
  Crown,
  Quote
} from 'lucide-react';

import {
  BARBER_APP_LINK,
  gallery,
  services,
  stats,
  testimonials
} from '../data/siteData.js';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content reveal">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={16} />
              Barbearia premium
            </span>

            <h1>Estilo, presença e acabamento de alto nível.</h1>

            <p>
              Cortes modernos, ambiente marcante e uma experiência pensada para
              quem valoriza imagem, cuidado e atenção aos detalhes.
            </p>

            <div className="hero-actions">
              <a
                href={BARBER_APP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Agendar pelo Barber App
                <ArrowRight size={18} />
              </a>

              <a href="/servicos" className="btn ghost">
                Ver serviços
              </a>
            </div>

            <div className="hero-pills">
              <span>
                <Star size={14} />
                4.9 em avaliações
              </span>

              <span>
                <MapPin size={14} />
                Atendimento local
              </span>

              <span>
                <ShieldCheck size={14} />
                Profissionais especialistas
              </span>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="hero-image">
              <img src={gallery[0]} alt="Ambiente premium da barbearia" />
            </div>

            <div className="floating-card top">
              <span>Agenda</span>
              <strong>Barber App</strong>
              <small>Horários rápidos e organizados</small>
            </div>

            <div className="floating-card bottom">
              <span>Ambiente</span>
              <strong>Premium</strong>
              <small>Presença, conforto e estilo</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="section split">
        <div>
          <span className="section-tag">A experiência</span>

          <h2>Mais do que um corte. Uma barbearia com presença.</h2>

          <p>
            Um espaço pensado para quem busca estilo, bom atendimento e um
            resultado que combina com sua imagem.
          </p>

          <div className="position-list">
            <span>Estilo moderno</span>
            <span>Ambiente premium</span>
            <span>Acabamento preciso</span>
          </div>
        </div>

        <div className="image-card">
          <img src={gallery[0]} alt="Barbearia premium" />
        </div>
      </section>

      <section className="section experience-section">
        <span className="section-tag">Diferenciais</span>

        <h2>Cada detalhe pensado para elevar tua presença.</h2>

        <div className="experience-grid">
          <article className="experience-card">
            <CalendarCheck size={28} />
            <h3>Atendimento com hora marcada</h3>
            <p>
              Mais praticidade para escolher o melhor horário e viver uma
              experiência sem pressa.
            </p>
          </article>

          <article className="experience-card">
            <Scissors size={28} />
            <h3>Cortes com identidade</h3>
            <p>
              Do clássico ao moderno, cada corte é pensado para valorizar teu
              estilo.
            </p>
          </article>

          <article className="experience-card">
            <Crown size={28} />
            <h3>Ambiente premium</h3>
            <p>
              Um espaço com presença, conforto e detalhes que tornam cada visita
              mais marcante.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <span className="section-tag">Serviços</span>

        <h2>Cortes, barba e cuidados para quem valoriza estilo.</h2>

        <div className="cards">
          {services.slice(0, 3).map((item) => (
            <article className="service-card" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div>
                <span className="service-badge">Serviço premium</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a href={BARBER_APP_LINK} target="_blank" rel="noreferrer">
                  Agendar agora
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split gallery-preview">
        <div className="image-card gallery-stack">
          <img src={gallery[1]} alt="Corte premium" />
          <img src={gallery[2]} alt="Detalhes da barbearia" />
        </div>

        <div>
          <span className="section-tag">Galeria</span>

          <h2>Visual, ambiente e resultados que falam por si.</h2>

          <p>
            Cortes, detalhes e momentos que mostram a essência da barbearia:
            estilo, cuidado e presença.
          </p>

          <a href="/galeria" className="btn ghost">
            Ver galeria
          </a>
        </div>
      </section>

      <section className="section dark-band">
        <span className="section-tag">Avaliações</span>

        <h2>Quem conhece, recomenda.</h2>

        <div className="reviews-row">
          {testimonials.map((t) => (
            <div className="review" key={t.name}>
              <Quote size={22} />
              <p>“{t.text}”</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <span className="section-tag">Agendamento</span>

        <h2>Seu próximo horário começa aqui.</h2>

        <p>
          Escolha o melhor horário e viva uma experiência completa em estilo,
          cuidado e presença.
        </p>

        <a
          href={BARBER_APP_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          Agendar pelo Barber App
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}