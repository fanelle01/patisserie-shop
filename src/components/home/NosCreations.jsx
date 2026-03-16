import Link from "next/link";

const PRODUITS = [
  {
    nom: "Gâteaux",
    description: "Nature, noix de coco, chocolat ou marbré. Personnalisables selon vos envies.",
    prix: "À partir de 20$",
    photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    lien: "/produits/gateaux",
  },
  {
    nom: "Donuts",
    description: "Box de 6. Simples ou fourrés à la vanille et au chocolat.",
    prix: "À partir de 15$",
    photo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
    lien: "/produits/donuts",
  },
  {
    nom: "Beignets Soufflés",
    description: "Légers et dorés. Disponibles en format 45 pièces ou 100 pièces.",
    prix: "À partir de 10$",
    photo: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
    lien: "/produits/beignets",
  },
];

export default function NosCreations() {
  return (
    <section className="py-16 px-4">

      {/* Titre de la section */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest uppercase mb-2"
          style={{ color: "var(--color-gold)" }}>
          ✦ Fait maison ✦
        </p>
        <h2 className="text-4xl font-bold"
          style={{ color: "var(--color-chocolate)" }}>
          Nos Créations
        </h2>
      </div>

      {/* Les 3 cartes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUITS.map((produit) => (
          <div
            key={produit.nom}
            className="flex flex-col overflow-hidden rounded-sm shadow-md"
            style={{ backgroundColor: "var(--color-white)" }}
          >
            {/* Photo */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${produit.photo})` }}
            />

            {/* Contenu */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-xl font-bold mb-2"
                style={{ color: "var(--color-chocolate)" }}>
                {produit.nom}
              </h3>
              <p className="text-sm flex-1 mb-3"
                style={{ color: "var(--color-caramel)" }}>
                {produit.description}
              </p>
              <p className="text-sm font-bold mb-4"
                style={{ color: "var(--color-gold)" }}>
                {produit.prix}
              </p>

              {/* Bouton */}
              <Link
                href={produit.lien}
                className="text-center py-2 px-4 text-sm font-bold tracking-wider uppercase transition-colors duration-200"
                style={{
                  backgroundColor: "var(--color-chocolate)",
                  color: "var(--color-white)",
                }}
              >
                Voir →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}