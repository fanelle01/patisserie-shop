export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-chocolate)" }}>
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">

        {/* Nom de la boutique */}
        <p className="text-lg font-bold" style={{ color: "var(--color-gold)" }}>
          Hurie's Delights
        </p>

        {/* Slogan */}
        <p className="mt-2 text-sm" style={{ color: "var(--color-white)" }}>
          Gâteaux, donuts et beignets soufflés faits comme à la maison.
        </p>

        {/* Copyright */}
        <p className="mt-4 text-xs" style={{ color: "var(--color-caramel)" }}>
          © {new Date().getFullYear()} Hurie's Delights. Tous droits réservés.
        </p>

      </div>
    </footer>
  )
}