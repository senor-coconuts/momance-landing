import '../globals.css';

export default function Impressum() {
  return (
    <main>
      <section className="section" style={{ paddingTop: 120 }}>
        <p className="section-eyebrow">Rechtliches</p>
        <h1 className="section-title">Impressum</h1>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>Angaben gemaess &sect; 5 TMG</strong>
        </p>

        <p className="section-body">
          ANTIPOL GbR<br />
          Stefan Bodeit &amp; Catrin Schroeder-Jaross
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>Kontakt</strong>
          <br />
          E-Mail: hello@antipol.ai
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>
            Verantwortlich fuer den Inhalt nach &sect; 55 Abs. 2 RStV
          </strong>
          <br />
          Stefan Bodeit &amp; Catrin Schroeder-Jaross
        </p>

        <p className="section-body">
          <em>
            Hinweis: Die Postanschrift wird nach Abschluss der
            Gewerbeanmeldung ergaenzt.
          </em>
        </p>

        <p className="section-body" style={{ marginTop: 48 }}>
          <a href="/">&larr; Zurueck zur Startseite</a>
        </p>
      </section>
    </main>
  );
}
