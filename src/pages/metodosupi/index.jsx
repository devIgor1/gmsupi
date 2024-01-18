import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

export default function MetodoSupi() {
  return (
    <div>
      <div className="hidden md:block border-b-2 border-[#F2EFDF]">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <main className="min-h-screen w-full bg-[#0D0D0D]">
        <section className="wrapper pt-5 w-full flex-around">
          <div className="bg-[#F2EFDF] w-full h-full md:h-96 flex flex-col md:flex-row md:flex-between rounded-md gap-5 p-5 md:p-0">
            <div className="text-start flex-1 md:ml-20 flex-col">
              <h1 className="font-dmSerif text-4xl md:text-5xl mb-5 underline">
                MÉTODO GM SUPI
              </h1>
              <p className="font-merriweather font-bold text-xl text-[#A61420]">
                GM Luis Paulo Supi
              </p>
              <p className="font-merriweather mt-5 w-[300px] md:w-full">
                Método de Treinamento de um dos principais nomes do Xadrez
                Brasileiro na atualidade. São mais de 40 aulas contando a
                trajetória de quando o{" "}
                <span className="text-[#A61420] font-bold">GM</span> Supi
                iniciou no Xadrez, até ultrapassar a barreira dos 2600.
              </p>
              <div className="flex items-center justify-start mt-5">
                <div className="flex-center gap-10">
                  <a
                    href="/sobre-supi"
                    className="bg-black text-[#F2EFDF] font-dmSerif text-xl py-1 px-5 rounded-md hover:scale-105 duration-300"
                  >
                    Sobre
                  </a>
                  <div className="flex-center gap-5">
                    <a
                      href="https://www.youtube.com/@GMLuisPauloSupi"
                      target="_blank"
                      className="hover:scale-110 duration-300"
                    >
                      <FaYoutube size={30} />
                    </a>
                    <a
                      href="https://www.instagram.com/gmsupi/"
                      target="_blank"
                      className="hover:scale-110 duration-300"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="https://www.facebook.com/luispaulo.supi/"
                      target="_blank"
                      className="hover:scale-110 duration-300"
                    >
                      <FaFacebook size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="/assets/images/metodos/supimetodo.jpg"
                alt="supi"
                className=" md:h-[384px] rounded-md md:rounded-tl-none md:rounded-bl-none md:rounded-tr-md md:rounded-br-md"
              />
            </div>
          </div>
        </section>
        <section className="min-h-screen mt-10 flex-center">
          <div className="bg-[#F2EFDF] grid grid-cols-1 md:grid-cols-3 p-5 gap-5 rounded-md">
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5 font-bold">
                MÓDULO 1
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                INSTRUÇÕES GERAIS
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5 font-bold">
                MÓDULO 2
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                RATING 0 - 1900
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5 font-bold">
                MÓDULO 3
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                RATING 1900 A 2000
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5">
                MÓDULO 4
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                RATING 2200 A 2300
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5">
                MÓDULO 5
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                MESTRE INTERNACIONAL
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5">
                MÓDULO 6
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                GRANDE MESTRE
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
            <div className="bg-[#0D0D0D] flex-center flex-col rounded-md max-w-[500px]">
              <h1 className="text-[#F2EFDF] text-center text-3xl font-dmSerif p-5">
                MÓDULO 7 BÔNUS
              </h1>
              <Separator className="bg-[#F2EFDF]" />
              <img
                src="/assets/images/chess.png"
                alt="chess"
                className="relative"
              />
              <span className="relative bg-[#F2EFDF] text-[#0D0D0D] font-merriweather -top-36 p-5 text-2xl rounded-lg">
                2500 A NÚMERO 1 BR
              </span>
              <button className="border border-[#F2EFDF] mb-5 text-[#F2EFDF] text-2xl p-3 font-merriweather rounded-md hover:scale-105 duration-300">
                ACESSO AO CONTEÚDO
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
