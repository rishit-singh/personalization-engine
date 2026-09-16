import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personalization Engine',
  description: 'Research-backed personalization for DTC brands — behavioral science layer for conversion lift and LTV growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
