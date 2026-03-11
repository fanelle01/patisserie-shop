import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-600">
         Hurie's delights
        </h1>
        <p className="text-gray-500 mt-2">
          pâtisseries faits avec amour
        </p>
      </div>
    </main>
  )
}
