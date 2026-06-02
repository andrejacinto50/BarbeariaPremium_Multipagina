import PageHero from '../components/PageHero.jsx';
import { testimonials } from '../data/siteData.js';

export default function Reviews() {
  return (
    <main>
      <PageHero
        eyebrow="Avaliações"
        title="Quem conhece, recomenda."
        text="Feedbacks reais de clientes que valorizam atendimento, ambiente e acabamento de alto nível."
      />

      <section className="section reviews-grid">
        {testimonials.concat(testimonials).map((t, i) => (
          <article className="review large" key={i}>
            <p>“{t.text}”</p>

            <strong>{t.name}</strong>

            <span>★★★★★</span>
          </article>
        ))}
      </section>
    </main>
  );
}