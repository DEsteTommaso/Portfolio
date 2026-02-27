export default function Landing() {
  return (
    <section className="landing-shell content-wrap">
      <div className="landing-copy">
        <p className="landing-role">Software Engineer</p>
        <h1 className="landing-title">TOMMASO D&apos;ESTE</h1>
        <p className="landing-subtitle">Based in Italy</p>
        <div className="landing-actions">
          <button className="btn-primary" type="button">
            View Projects
          </button>
          <button className="btn-link" type="button">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="landing-visual" aria-hidden="true" />
    </section>
  );
}
