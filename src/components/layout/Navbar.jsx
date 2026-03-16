import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "var(--color-chocolate)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Nom de la boutique */}
        <Link href="/" style={{ color: "var(--color-gold)" }}>
          <span className="text-xl font-bold">Hurie's Delights</span>
        </Link>

        <div className="flex gap-6">
          <Link href="/produits" style={{ color: "var(--color-white)" }}>
            Nos Créations
          </Link>
          <Link href="/contact" style={{ color: "var(--color-white)" }}>
            Contact
          </Link>
          <Link href="/panier" style={{ color: "var(--color-gold)" }}>
            <ShoppingBag size={22} />
          </Link>
        </div>

      </div>
    </nav>
  );
}