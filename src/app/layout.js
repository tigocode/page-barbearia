import './globals.css';

export const metadata = {
  title: "Barber Shop",
  description: "Landing Page da Barber Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
