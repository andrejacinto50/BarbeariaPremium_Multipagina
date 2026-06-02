export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay"></div>

      <div className="page-hero-content reveal">
        <span className="section-tag">
          {eyebrow}
        </span>

        <h1>{title}</h1>

        <p>{text}</p>
      </div>
    </section>
  );
}