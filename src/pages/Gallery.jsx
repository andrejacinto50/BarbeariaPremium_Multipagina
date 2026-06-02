import PageHero from '../components/PageHero.jsx';
import { gallery } from '../data/siteData.js';

export default function Gallery() {
  return (
    <main>
      <PageHero
        eyebrow="Galeria"
        title="Ambiente, estilo e detalhes que fazem a diferença."
        text="Uma seleção de cortes, acabamento, ambiente e momentos que representam a essência da barbearia."
      />

      <section className="gallery-grid">
        {gallery.map((img, i) => (
          <div
            className={i === 0 || i === 3 ? 'gallery-item big' : 'gallery-item'}
            key={img}
          >
            <img src={img} alt="Galeria da barbearia" />
          </div>
        ))}
      </section>
    </main>
  );
}