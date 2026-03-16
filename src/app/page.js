import HeroCarousel from "@/components/home/HeroCarousel";
import NosCreations from "@/components/home/NosCreations";
import NotreHistoire from "@/components/home/NotreHistoire";
import Temoignages from "@/components/home/Temoignages";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <section>
        <NosCreations />
      </section>
      <section>
        <NotreHistoire />
      </section>
      <section>
        <Temoignages />
      </section>
    </main>
  )
}
