export default function NotreHistoire() {
  return (
    <section className="py-16 px-4"
      style={{ backgroundColor: "var(--color-cream-dark, #F5E6C8)" }}>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Photo à gauche */}
        <div
          className="w-full md:w-1/2 h-72 rounded-sm bg-cover bg-center shadow-md"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600)`,
          }}
        />

        {/* Texte à droite */}
        <div className="w-full md:w-1/2">
          <p className="text-sm tracking-widest uppercase mb-2"
            style={{ color: "var(--color-gold)" }}>
            ✦ Notre Histoire ✦
          </p>
          <h2 className="text-3xl font-bold mb-4"
            style={{ color: "var(--color-chocolate)" }}>
            Fait avec amour, <br /> inspiré du Cameroun
          </h2>
          <p className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--color-caramel)" }}>
            Hurie's Delights est née d'une passion pour la pâtisserie 
            et d'un désir de partager les saveurs authentiques du Cameroun. 
            Chaque gâteau, chaque donut, chaque beignet est préparé 
            à la main avec des ingrédients soigneusement choisis.
          </p>
          <p className="text-sm leading-relaxed"
            style={{ color: "var(--color-caramel)" }}>
            Notre mission est simple — apporter un peu de douceur 
            et de chaleur africaine dans chaque bouchée.
          </p>
        </div>

      </div>
    </section>
  );
}