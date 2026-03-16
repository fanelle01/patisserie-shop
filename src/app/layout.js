import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


export const metadata = {
  title: "Hurie's Delights",
  description: "Gâteaux, donuts et beignets soufflés faits comme à la maison.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
