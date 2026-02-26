import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vibrant Portfolio Canvas',
  description: 'A premium, technical, and clean portfolio designed by an expert.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background overflow-hidden">{children}</body>
    </html>
  );
}
