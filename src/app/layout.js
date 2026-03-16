import "./globals.css";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";


export const metadata = {
  title: "Hurie's Delights",
  description: "Gâteaux, donuts et beignets soufflés faits comme à la maison.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <header>
            <Navbar />
          </header>

          {children}
          <Footer />
          </CartProvider>
        
      </body>
    </html>
  );
}
