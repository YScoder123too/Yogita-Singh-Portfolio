import '../styles/globals.css';

export const metadata = {
  title: 'Yogita Singh - Portfolio',
  description: 'Portfolio built with Next.js and CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
