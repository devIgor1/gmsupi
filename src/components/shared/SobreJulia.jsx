import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { IoMdArrowRoundBack } from "react-icons/io"
import Footer from "./Footer"

const SobreJulia = () => {
  return (
    <div>
      <main className="min-h-screen w-full bg-[#0D0D0D]">
        <a
          href="/metodojulia"
          className="flex items-center justify-start flex-col pt-10"
        >
          <IoMdArrowRoundBack color="#F2EFDF" size={30} />
          <h1 className="text-[#F2EFDF] text-3xl font-lora hover:underline">
            Voltar
          </h1>
        </a>
        <div className="w-full flex-center min-h-screen">
          <div className="w-full flex-center mx-auto pt-10 flex-center flex-col p-10">
            <div className="flex-center flex-col gap-10 w-full">
              <div className="flex-col md:flex-row flex-around gap-10">
                <img
                  src="/assets/images/sobre/juliasobre.jpg"
                  alt="supi-sobre"
                  className="w-[500px] rounded-md"
                />
                <div className="flex-center text-start gap-5">
                  <div className="flex-center flex-col gap-5">
                    <p className="text-xl text-[#F2EFDF] font-merriweather font-bold">
                      Número 1 do Brasil - Feminino
                    </p>
                    <div className="flex-center gap-3">
                      <span className="bg-[#A61420] text-[#F2EFDF] p-1 rounded-md text-2xl font-lora">
                        MF/WIM
                      </span>
                      <h1 className="font-bold text-[#F2EFDF] text-3xl font-dmSerif">
                        MF/WIM Julia Alboredo
                      </h1>
                    </div>
                    <p className="text-[#F2EFDF] text-center font-merriweather">
                      Representou o Brasil em 3 Olimpíadas. Campeã Brasileira.
                    </p>
                    <p className="text-[#F2EFDF] font-merriweather text-2xl">
                      RATING FIDE: <span className="text-[#A61420]">2253</span>
                    </p>
                    <div className="flex-center gap-5">
                      <a
                        href="https://www.youtube.com/channel/UCvJstUz_kPRKZwug_SZzQ3A"
                        target="_blank"
                        className="hover:scale-110 duration-300"
                      >
                        <FaYoutube size={30} color="#F2EFDF" />
                      </a>
                      <a
                        href="https://www.instagram.com/alboredojulia/"
                        target="_blank"
                        className="hover:scale-110 duration-300"
                      >
                        <FaInstagram size={30} color="#F2EFDF" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col md:flex-row flex-center">
                <img
                  src="/assets/images/noticias-julia/noticiajulia5.jpg"
                  alt=""
                  className="w-[300px] md:w-full h-[200px] rounded-tl-md md:rounded-bl-md rounded-tr-md md:rounded-tr-none"
                />
                <img
                  src="/assets/images/noticias-julia/noticiajulia6.jpg"
                  alt=""
                  className="w-[300px] md:w-full h-[200px]"
                />
                <img
                  src="/assets/images/noticias-julia/noticiajulia3.jpg"
                  alt=""
                  className="w-[300px] md:w-full h-[200px]"
                />
                <img
                  src="/assets/images/noticias-julia/noticiajulia4.png"
                  alt=""
                  className="w-[300px] md:w-full h-[200px]"
                />
                <img
                  src="/assets/images/noticias-julia/noticiajulia.jpg"
                  alt=""
                  className="w-[300px] md:w-full h-[200px]"
                />
                <img
                  src="/assets/images/noticias-julia/noticiajulia2.png"
                  alt=""
                  className="w-[300px] md:w-full h-[200px] md:rounded-tr-md rounded-br-md rounded-bl-md md:rounded-bl-none"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SobreJulia
