import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <main className="w-full min-h-screen bg-gradient-to-b from-orange-100 to-orange-200">
        <section className="flex-center">
          <div className="bg-zinc-900/75 md:bg-zinc-900/65 absolute w-full h-[250px] md:h-[578px]">
            <div className="text-2xl md:text-6xl lg:text-7xl text-white md:max-w-[800px] mx-auto mt-5 font-medium font-lora">
              <h1 className="text-center">
                Do <span className="text-[#B81919]">Zero</span> à{" "}
                <span className="text-green-500">Maestria</span> com os Melhores
                Enxadristas do Brasil
              </h1>
            </div>
            <div className="w-full flex-center mt-20 md:mt-28">
              <button className="bg-[#B81919] text-white text-xl md:text-2xl p-2 px-7 md:p-4 md:px-10 border-double border-8 border-black shadow-2xl shadow-[#B81919] hover:scale-105 duration-300 font-semibold">
                PRÓXIMA TURMA 05/02
              </button>
            </div>
          </div>
          <img
            src="/src/assets/images/hero.png"
            alt="hero.png"
            className="w-full h-[250px] md:h-[578px]"
          />
        </section>
      </main>
    </>
  )
}
