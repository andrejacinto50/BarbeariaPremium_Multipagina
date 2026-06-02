import PageHero from '../components/PageHero.jsx';

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre"
        title="Uma barbearia feita para quem valoriza presença, estilo e cuidado."
        text="Mais do que um lugar para cortar cabelo, a Prime Club entrega uma experiência pensada em cada detalhe: do atendimento ao acabamento final."
      />

      <section className="section split">
        <div>
          <span className="section-tag">Nossa essência</span>

          <h2>Tradição, técnica e uma visão moderna de barbearia.</h2>

          <p>
            A Prime Club nasceu com uma proposta clara: unir estilo, conforto e
            atendimento de qualidade em um ambiente que valoriza a presença de
            cada cliente.
          </p>

          <p>
            Aqui, cada corte é tratado com atenção. Da recepção ao acabamento, o
            objetivo é entregar uma experiência completa, com cuidado, precisão
            e identidade.
          </p>

          <div className="position-list">
            <span>Atendimento premium</span>
            <span>Acabamento preciso</span>
            <span>Ambiente marcante</span>
          </div>
        </div>

        <div className="quote-card">
          “Cada detalhe importa quando o objetivo é sair com mais presença.”
        </div>
      </section>

      <section className="section about-values">
        <span className="section-tag">O que nos move</span>

        <h2>Um ambiente pensado para elevar tua experiência.</h2>

        <div className="experience-grid">
          <article className="experience-card">
            <h3>Estilo</h3>
            <p>
              Cortes modernos, alinhados ao perfil de cada cliente e ao visual
              que ele quer transmitir.
            </p>
          </article>

          <article className="experience-card">
            <h3>Precisão</h3>
            <p>
              Acabamento bem feito, atenção aos detalhes e cuidado em cada etapa
              do atendimento.
            </p>
          </article>

          <article className="experience-card">
            <h3>Experiência</h3>
            <p>
              Um espaço confortável, organizado e com atmosfera premium para
              tornar cada visita mais marcante.
            </p>
          </article>
        </div>
      </section>

      <section className="section dark-band about-band">
        <span className="section-tag">Prime Club</span>

        <h2>Presença se constrói nos detalhes.</h2>

        <p>
          Do ambiente ao atendimento, tudo foi pensado para entregar mais do que
          um serviço: uma experiência de estilo, confiança e cuidado.
        </p>
      </section>
    </main>
  );
}