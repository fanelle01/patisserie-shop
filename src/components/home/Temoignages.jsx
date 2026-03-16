const TEMOIGNAGES = [
  {
    nom: "Sophie M.",
    texte: "Les gâteaux sont absolument délicieux ! J'en ai commandé un pour l'anniversaire de ma fille et tout le monde était impressionné.",
    note: 5,
  },
  {
    nom: "Jean-Paul K.",
    texte: "Les beignets soufflés me rappellent ceux de ma maman au Cameroun. Authentique et savoureux !",
    note: 5,
  },
  {
    nom: "Marie L.",
    texte: "Les donuts fourrés au chocolat sont incroyables. Je recommande à 100% !",
    note: 5,
  },
];

export default function Temoignages() {
  return (
    <section className="py-16 px-4">

      {/* Titre */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest uppercase mb-2"
          style={{ color: "var(--color-gold)" }}>
          ✦ Ils nous font confiance ✦
        </p>
        <h2 className="text-4xl font-bold"
          style={{ color: "var(--color-chocolate)" }}>
          Témoignages
        </h2>
      </div>

      {/* Les 3 cartes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEMOIGNAGES.map((temoignage) => (
          <div
            key={temoignage.nom}
            className="p-6 rounded-sm shadow-md"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {/* Étoiles */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: temoignage.note }).map((_, i) => (
                <span key={i} style={{ color: "var(--color-gold)" }}>★</span>
              ))}
            </div>

            {/* Texte */}
            <p className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-caramel)" }}>
              `{ temoignage.texte}`
            </p>

            {/* Nom */}
            <p className="text-sm font-bold"
              style={{ color: "var(--color-chocolate)" }}>
              — {temoignage.nom}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}