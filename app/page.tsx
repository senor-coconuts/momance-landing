import './globals.css';

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <p className="hero-eyebrow">Wahrnehmungstraining</p>
        <h1 className="hero-title">Momance</h1>
        <p className="hero-subtitle">
          Halte fest, was dich bewegt.
        </p>
        <p className="hero-body">
          Nicht um festzuhalten — sondern um bewusster wahrzunehmen.
          Momance begleitet dich auf dem Weg zu einer tieferen,
          reicheren Wahrnehmung deines Alltags.
        </p>
        <a href="#wie-es-funktioniert" className="hero-cta">
          Entdecken
        </a>
        <span className="scroll-hint">scroll</span>
      </section>

      {/* ── Was ist Momance ── */}
      <section className="section">
        <p className="section-eyebrow">Die Idee</p>
        <h2 className="section-title">
          Eine App, die sich selbst ueberfluessig macht
        </h2>
        <p className="section-body">
          Momance ist kein weiteres Achtsamkeits-Tool, das dich an den
          Bildschirm fesselt. Es ist ein Wahrnehmungstraining: Du haeltst
          fest, was dich beruehrt — und entdeckst dabei Muster, die dir
          sonst entgehen wuerden.
        </p>
        <p className="section-body">
          Das Ziel? Dass du irgendwann nicht mehr brauchst, was Momance dir
          zeigt. Weil du es selbst siehst.
        </p>
      </section>

      <div className="divider" />

      {/* ── So funktioniert's ── */}
      <section className="section" id="wie-es-funktioniert">
        <p className="section-eyebrow">So funktioniert es</p>
        <h2 className="section-title">Drei einfache Schritte</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Moment festhalten</h3>
              <p>
                Etwas hat dich beruehrt? Halte es mit ein paar Worten fest.
                Kein Tagebuch, keine Pflicht — nur das, was gerade zaehlt.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Muster entdecken</h3>
              <p>
                Momance erkennt, welche Bereiche deines Lebens dich bewegen —
                und welche du vielleicht uebersehen hast. Stille, Verbindung,
                Koerper, Natur, Schaffen, Genuss.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Wachsen</h3>
              <p>
                Beobachte, wie sich deine Wahrnehmung veraendert. Vom Entdecken
                zum Wahrnehmen, vom Verankern zum Integrieren — bis es Teil
                deines Lebens ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Dimensionen ── */}
      <section className="section">
        <p className="section-eyebrow">Dein Profil</p>
        <h2 className="section-title">Vier Dimensionen der Wahrnehmung</h2>
        <p className="section-body">
          Momance misst nicht, wie gut du bist. Es zeigt dir, wo du stehst —
          auf vier unabhaengigen Achsen, die zusammen dein
          Wahrnehmungsprofil ergeben.
        </p>
        <div className="dimensions-grid">
          <div className="dim-card">
            <h3>Tiefe</h3>
            <p>Wie intensiv nimmst du einzelne Momente wahr?</p>
          </div>
          <div className="dim-card">
            <h3>Breite</h3>
            <p>Wie vielfaeltig sind die Bereiche, die dich beruehren?</p>
          </div>
          <div className="dim-card">
            <h3>Spontanitaet</h3>
            <p>Wie schnell erkennst du, wenn etwas Besonderes passiert?</p>
          </div>
          <div className="dim-card">
            <h3>Autonomie</h3>
            <p>Wie eigenstaendig gestaltest du bewusste Momente?</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA ── */}
      <section className="cta-section">
        <p className="section-eyebrow">Bald verfuegbar</p>
        <h2 className="section-title">
          Bereit, bewusster wahrzunehmen?
        </h2>
        <p className="section-body">
          Momance erscheint bald im App Store und bei Google Play.
        </p>
        <span className="cta-coming-soon">Coming Soon</span>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <span className="footer-brand">Momance</span>
        <div className="footer-links">
          <a href="/datenschutz">Datenschutz</a>
          <a href="/impressum">Impressum</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} ANTIPOL GbR. Alle Rechte vorbehalten.
        </p>
      </footer>
    </main>
  );
}
