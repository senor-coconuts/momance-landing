import '../globals.css';

export default function Datenschutz() {
  return (
    <main>
      <section className="section" style={{ paddingTop: 120 }}>
        <p className="section-eyebrow">Rechtliches</p>
        <h1 className="section-title">Datenschutzerkl&auml;rung</h1>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>1. Verantwortlicher</strong>
          <br />
          ANTIPOL GbR<br />
          Stefan Bodeit &amp; Catrin Schr&ouml;der-Jaross<br />
          E-Mail: datenschutz@antipol.ai
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>2. Datenverarbeitung in der App</strong>
          <br />
          Momance speichert deine Momente ausschlie&szlig;lich lokal auf deinem Ger&auml;t
          (SQLite-Datenbank). Es werden keine Texte, Notizen oder pers&ouml;nlichen
          Inhalte an unsere Server &uuml;bertragen. Die App funktioniert vollst&auml;ndig
          offline.
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>3. Analytics (optional)</strong>
          <br />
          Nur mit deiner ausdr&uuml;cklichen Einwilligung (Opt-in in den Einstellungen)
          werden anonymisierte Nutzungsstatistiken &uuml;ber PostHog (EU-Region)
          erfasst. Du kannst dies jederzeit deaktivieren.
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>4. Crash-Reporting</strong>
          <br />
          Wir nutzen Sentry (EU-Region) f&uuml;r technische Fehlerberichte. Diese
          enthalten keine pers&ouml;nlichen Inhalte, nur technische Informationen
          (Ger&auml;tetyp, App-Version, Stack Traces).
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>5. Hosting dieser Website</strong>
          <br />
          Diese Website wird &uuml;ber Vercel Inc. (San Francisco, USA) gehostet.
          Beim Aufruf werden Server-Logdaten (IP-Adresse, Zeitpunkt, Seite)
          verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>6. Deine Rechte</strong>
          <br />
          Du hast das Recht auf Auskunft, Berichtigung, L&ouml;schung und
          Einschr&auml;nkung der Verarbeitung deiner Daten. Kontaktiere uns
          unter datenschutz@antipol.ai.
        </p>

        <p className="section-body" style={{ marginTop: 48 }}>
          <a href="/">&larr; Zur&uuml;ck zur Startseite</a>
        </p>
      </section>
    </main>
  );
}
