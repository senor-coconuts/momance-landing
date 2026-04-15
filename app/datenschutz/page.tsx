import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz - Momance',
  description: 'Datenschutzerklärung der Momance App und Website. ANTIPOL GbR.',
};

export default function Datenschutz() {
  return (
    <main>
      <section className="section" style={{ paddingTop: 120 }}>
        <p className="section-eyebrow">Rechtliches</p>
        <h1 className="section-title">Datenschutzerkl&auml;rung</h1>

        <p className="section-body" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
          Momance App &amp; Website &middot; ANTIPOL GbR &middot; Stand: April 2026
        </p>

        {/* 1. Verantwortlicher */}
        <p className="section-body" style={{ marginTop: 40 }}>
          <strong style={{ color: 'var(--cream)' }}>1. Verantwortlicher</strong>
          <br />
          Verantwortlicher im Sinne der DSGVO ist die ANTIPOL GbR, vertreten durch
          Stefan Bodeit und Catrin Schr&ouml;der-Jaross.
          <br />
          Datenschutz-Kontakt:{' '}
          <a href="mailto:datenschutz@antipol.ai">datenschutz@antipol.ai</a>
        </p>

        {/* 2. App-Daten */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>2. Deine Daten in der App</strong>
          <br />
          Momance speichert alle deine Inhalte - deine Momente, dein Wahrnehmungsprofil
          und deine Onboarding-Antworten - ausschlie&szlig;lich lokal auf deinem Ger&auml;t
          in einer gesch&uuml;tzten SQLite-Datenbank. Diese Daten verlassen dein Ger&auml;t
          nicht und sind f&uuml;r uns zu keinem Zeitpunkt einsehbar.
          <br />
          <span style={{ color: 'var(--gold-muted)', fontSize: 14 }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserf&uuml;llung)
          </span>
        </p>

        {/* 3. Backup */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>3. Datensicherung (optional)</strong>
          <br />
          Wenn du die optionale Sicherungsfunktion aktivierst, wird deine verschl&uuml;sselte
          Datenbank in deinem pers&ouml;nlichen iCloud-Speicher (iOS) bzw. Google Drive
          (Android) gesichert. ANTIPOL hat keinen Zugriff auf dieses Backup - die
          Verschl&uuml;sselung erfolgt auf deinem Ger&auml;t, der Schl&uuml;ssel liegt
          ausschlie&szlig;lich bei dir.
          <br />
          <span style={{ color: 'var(--gold-muted)', fontSize: 14 }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (deine Einwilligung durch
            Aktivierung der Funktion)
          </span>
        </p>

        {/* 4. Crash-Reporting */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>4. Crash-Reporting (Sentry)</strong>
          <br />
          Zur technischen Stabilit&auml;t der App nutzen wir Sentry (EU-Region) f&uuml;r
          automatische Fehlerberichte. Diese enthalten technische Informationen wie
          Ger&auml;tetyp, App-Version und Stack Traces - keine Inhalte deiner Momente
          oder pers&ouml;nliche Texte. Ein Auftragsverarbeitungsvertrag mit Sentry besteht.
          Speicherdauer: 90 Tage.
          <br />
          <span style={{ color: 'var(--gold-muted)', fontSize: 14 }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Stabilit&auml;t der App)
          </span>
        </p>

        {/* 5. Feedback */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>5. Feedback (optional)</strong>
          <br />
          Wenn du uns &uuml;ber das Feedback-Formular in der App schreibst, wird dein
          Nachrichtentext sowie - sofern angegeben - deine E-Mail-Adresse zusammen mit
          technischen App-Informationen (App-Version, Betriebssystem, Ger&auml;temodell)
          an unseren Dienstleister Supabase (EU Frankfurt) &uuml;bertragen. Bitte teile
          in deinem Feedback keine sensiblen pers&ouml;nlichen Gesundheitsdaten. Ein
          Auftragsverarbeitungsvertrag mit Supabase besteht. Speicherdauer: maximal 2 Jahre.
          <br />
          <span style={{ color: 'var(--gold-muted)', fontSize: 14 }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Absenden)
          </span>
        </p>

        {/* 6. Analytics */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>6. Nutzungsanalyse (optional)</strong>
          <br />
          Nur wenn du der Nutzungsanalyse in den App-Einstellungen ausdr&uuml;cklich
          zustimmst, senden wir anonymisierte Nutzungsstatistiken an PostHog (EU Frankfurt).
          Es werden ausschlie&szlig;lich aggregierte Z&auml;hler &uuml;bermittelt - niemals
          deine Momenten-Texte, kein Nutzerprofil, keine pers&ouml;nliche ID. Du kannst
          diese Einwilligung jederzeit in den Einstellungen widerrufen. Speicherdauer:
          12 Monate rollierend.
          <br />
          <span style={{ color: 'var(--gold-muted)', fontSize: 14 }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (explizite Einwilligung)
          </span>
        </p>

        {/* 7. Vercel */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>7. Website-Hosting (Vercel)</strong>
          <br />
          Diese Website wird &uuml;ber Vercel Inc. (San Francisco, USA) gehostet. Beim
          Abruf der Seite werden technische Zugriffsdaten (IP-Adresse, Zeitstempel,
          Browser-Typ) in Server-Logs gespeichert. F&uuml;r die &Uuml;bermittlung in die
          USA st&uuml;tzen wir uns auf das EU-US Data Privacy Framework bzw.
          EU-Standardvertragsklauseln. Ein Auftragsverarbeitungsvertrag mit Vercel besteht.
          Speicherdauer: 7-30 Tage.
          <br />
          <span style={{ color: 'var(--gold-muted)', fontSize: 14 }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
          </span>
        </p>

        {/* 8. Rechte */}
        <p className="section-body">
          <strong style={{ color: 'var(--cream)' }}>8. Deine Rechte</strong>
          <br />
          Du hast gegen&uuml;ber ANTIPOL folgende Rechte: Auskunft (Art. 15), Berichtigung
          (Art. 16), L&ouml;schung (Art. 17), Einschr&auml;nkung der Verarbeitung (Art. 18),
          Daten&uuml;bertragbarkeit (Art. 20) sowie Widerspruch gegen Verarbeitungen auf
          Basis berechtigter Interessen (Art. 21). Eine erteilte Einwilligung kannst du
          jederzeit widerrufen - das &auml;ndert nichts an der Rechtm&auml;&szlig;igkeit
          der Verarbeitung bis zum Widerruf.
          <br /><br />
          Du hast au&szlig;erdem das Recht, dich bei einer Datenschutz-Aufsichtsbeh&ouml;rde
          zu beschweren (Art. 77 DSGVO), etwa beim{' '}
          <a
            href="https://www.uld.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unabh&auml;ngigen Landeszentrum f&uuml;r Datenschutz Schleswig-Holstein (ULD)
          </a>{' '}
          oder dem{' '}
          <a
            href="https://datenschutz.hamburg.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hamburgischen Beauftragten f&uuml;r Datenschutz
          </a>.
          <br /><br />
          F&uuml;r alle Anfragen: <a href="mailto:datenschutz@antipol.ai">datenschutz@antipol.ai</a>
        </p>

        {/* Hinweis Anwalt 
        <p
          className="section-body"
          style={{
            marginTop: 48,
            padding: '20px 24px',
            background: 'var(--surface)',
            borderLeft: '2px solid var(--gold-muted)',
            borderRadius: '0 8px 8px 0',
            fontSize: 14,
          }}
        >
          <strong style={{ color: 'var(--cream)' }}>Hinweis</strong>
          <br />
          Diese Erkl&auml;rung befindet sich noch in Pr&uuml;fung durch einen
          Datenschutzanwalt und wird vor dem App-Launch finalisiert.
        </p>
        */}
        <p className="section-body" style={{ marginTop: 48 }}>
          <a href="/">&larr; Zur&uuml;ck zur Startseite</a>
        </p>
      </section>
    </main>
  );
}
