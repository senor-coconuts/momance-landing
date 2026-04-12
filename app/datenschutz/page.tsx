import '../globals.css';

export default function Datenschutz() {
  return (
    <main>
      <section className="section" style={{ paddingTop: 120 }}>
        <p className="section-eyebrow">Rechtliches</p>
        <h1 className="section-title">Datenschutzerklaerung</h1>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>1. Verantwortlicher</strong>
          <br />
          ANTIPOL GbR<br />
          Stefan Bodeit &amp; Catrin Schroeder-Jaross<br />
          E-Mail: datenschutz@antipol.ai
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>2. Datenverarbeitung in der App</strong>
          <br />
          Momance speichert deine Momente ausschliesslich lokal auf deinem Geraet
          (SQLite-Datenbank). Es werden keine Texte, Notizen oder persoenlichen
          Inhalte an unsere Server uebertragen. Die App funktioniert vollstaendig
          offline.
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>3. Analytics (optional)</strong>
          <br />
          Nur mit deiner ausdruecklichen Einwilligung (Opt-in in den Einstellungen)
          werden anonymisierte Nutzungsstatistiken ueber PostHog (EU-Region)
          erfasst. Du kannst dies jederzeit deaktivieren.
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>4. Crash-Reporting</strong>
          <br />
          Wir nutzen Sentry (EU-Region) fuer technische Fehlerberichte. Diese
          enthalten keine persoenlichen Inhalte, nur technische Informationen
          (Geraetetyp, App-Version, Stack Traces).
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>5. Hosting dieser Website</strong>
          <br />
          Diese Website wird ueber Vercel Inc. (San Francisco, USA) gehostet.
          Beim Aufruf werden Server-Logdaten (IP-Adresse, Zeitpunkt, Seite)
          verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>6. Deine Rechte</strong>
          <br />
          Du hast das Recht auf Auskunft, Berichtigung, Loeschung und
          Einschraenkung der Verarbeitung deiner Daten. Kontaktiere uns
          unter datenschutz@antipol.ai.
        </p>

        <p className="section-body" style={{ marginTop: 48 }}>
          <a href="/">&larr; Zurueck zur Startseite</a>
        </p>
      </section>
    </main>
  );
}
