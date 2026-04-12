import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Momance — Dein Wahrnehmungstraining',
  description:
    'Halte fest, was dich bewegt. Entdecke Muster in deiner Wahrnehmung. Wachse — bis du die App nicht mehr brauchst.',
  openGraph: {
    title: 'Momance — Dein Wahrnehmungstraining',
    description:
      'Halte fest, was dich bewegt. Entdecke Muster in deiner Wahrnehmung.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://momance.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@300;400&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
