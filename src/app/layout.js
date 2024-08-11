import './globals.css';
import Topo from '@/components/Topo';

export const metadata = {
  title: "Barber Shop",
  description: "Landing Page da Barber Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
