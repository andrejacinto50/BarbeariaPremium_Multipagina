import PageHero from '../components/PageHero.jsx';
import { posts, BARBER_APP_LINK } from '../data/siteData.js';

export default function Blog() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main>
      <PageHero
        eyebrow="Conteúdo"
        title="Dicas de estilo para manter o visual sempre alinhado."
        text="Conteúdos rápidos sobre corte, barba e cuidados para quem valoriza presença no dia a dia."
      />

      <section className="section blog-featured">
        <article className="post-featured">
          <div>
            <span>{featuredPost.tag}</span>

            <h2>{featuredPost.title}</h2>

            <p>{featuredPost.excerpt}</p>

            <a href="#">Ler conteúdo</a>
          </div>

          <div className="post-featured-side">
            <strong>Guia rápido</strong>
            <p>
              Ideias simples para escolher melhor teu corte, cuidar do visual e
              chegar na barbearia com mais clareza do que combina com você.
            </p>
          </div>
        </article>
      </section>

      <section className="section blog-grid-section">
        <span className="section-tag">Mais conteúdos</span>

        <h2>Cuidados simples que fazem diferença no visual.</h2>

        <div className="cards blog-cards">
          {otherPosts.map((p) => (
            <article className="post-card" key={p.title}>
              <span>{p.tag}</span>

              <h2>{p.title}</h2>

              <p>{p.excerpt}</p>

              <a href="#">Ler conteúdo</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta blog-cta">
        <span className="section-tag">Estilo</span>

        <h2>Quer sair com o visual no ponto?</h2>

        <p>
          Escolha o melhor horário e venha viver uma experiência completa em
          corte, barba e acabamento.
        </p>

        <a
          href={BARBER_APP_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          Agendar pelo Barber App
        </a>
      </section>
    </main>
  );
}