import Button from "@/components/shared/Button"
import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import { FaSignature } from "react-icons/fa"
import { IoMdStar } from "react-icons/io"
import { LuPlus } from "react-icons/lu"
import { AiOutlineArrowDown } from "react-icons/ai"
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
              <div className="bg-black/80 rounded-lg p-1">
                <h1 className="text-center">
                  Do <span className="text-[#B81919]">Zero</span> à{" "}
                  <span className="text-green-500">Maestria</span> com os
                  Melhores Enxadristas do Brasil
                </h1>
              </div>
              <div className="w-full flex-center mt-20 md:mt-28">
                <Button />
              </div>
            </div>
          </div>
          <img
            src="/src/assets/images/hero.png"
            alt="hero.png"
            className="w-full h-[250px] md:h-[578px]"
          />
        </section>

        <section className="w-full flex-col md:flex-row md:flex-center md:flex-around">
          <div className="flex-1 p-5 flex-center flex-col">
            <div className="flex-center flex-col">
              <h1 className="text-center text-5xl font-lora text-shadow">
                ASSINATURA ANUAL
              </h1>
              <span>
                <FaSignature size={50} />
              </span>
            </div>
            <div className="max-w-[500px] bg-black/35 p-5 font-semibold rounded-md shadow-lg shadow-zinc-700">
              <p className="text-center font-poppins text-xl md:text-2xl text-white">
                NOSSA ASSINATURA ANUAL OFERECE{" "}
                <span className="text-green-500 bg-white rounded-lg p-1 mr-2">
                  ACESSO COMPLETO
                </span>
                AO NOSSO SITE, INCLUINDO:
              </p>
              <ul className="list-disc mt-5 text-[#EE9F16] bg-black p-2 px-6 text-center text-base md:text-lg rounded-md">
                <li>
                  AULAS AO VIVO{" "}
                  <span className="text-green-500">TODA SEMANA</span> COM UM
                  TIME DE PROFESSORES CONTANDO COM OS MELHORES JOGADORES E
                  TREINADORES DO BRASIL.
                </li>
                <Separator className="my-2" />
                <li>
                  CURSOS NOVOS E EXCLUSIVOS{" "}
                  <span className="text-green-500">TODO MÊS</span> SEM CUSTO
                  ADICIONAL
                </li>
                <Separator className="my-2" />
                <li>
                  <span className="text-green-500">
                    DEZENAS DE HORAS DE AULAS
                  </span>{" "}
                  JÁ DISPONIBILIZADAS EM NOSSA PLATAFORMA ESTRUTURADAS PARA{" "}
                  <span className="text-green-500">CADA FAIXA DE RATING</span>
                </li>
                <Separator className="my-2" />
                <li>
                  FAZER PARTE DA MELHOR COMUNIDADE DE XADREZ DO BRASIL, O NOSSO
                  GRUPO EXCLUSIVO DO WHATSAPP QUE HOJE JÁ CONTA COM MAIS DE{" "}
                  <span className="text-green-500 mr-1">1000</span>
                  COMPROMETIDOS ESTUDANTES QUE SÃO{" "}
                  <span className="text-green-500">DIARIAMENTE</span>{" "}
                  MONITORADOS PELO{" "}
                  <span className="text-red-500">
                    <span className="bg-red-500 text-white p-1 rounded-md">
                      GM
                    </span>{" "}
                    LUIS PAULO SUPI
                  </span>{" "}
                  E PELA{" "}
                  <span className="text-red-500">WMI JULIA ALBOREDO</span>.
                </li>
                <Separator className="my-2" />
              </ul>
              <div className="w-full my-4 flex-center">
                <Button />
              </div>
            </div>
          </div>
          <div className="flex-1 flex-center flex-col gap-2">
            <img
              src="/src/assets/images/supi.jpg"
              alt="supi.jpg"
              className="rounded-lg shadow-md shadow-black w-[400px] md:w-[600px]"
            />
            <img
              src="/src/assets/images/julia.jpg"
              alt="julia.jpg"
              className="rounded-lg shadow-md shadow-black w-[400px] md:w-[600px]"
            />
          </div>
        </section>

        <section className="min-h-screen w-full mt-20">
          <div className="flex-center flex-col">
            <div className="flex-center">
              <IoMdStar size={50} />
              <h1 className="text-center text-5xl text-shadow font-lora underline">
                CONTEÚDOS EXCLUSIVOS
              </h1>
              <IoMdStar size={50} />
            </div>
            <p className="max-w-4xl text-lg text-center font-poppins mt-5 bg-white/60 p-3 rounded-lg shadow-md shadow-black ">
              OS ASSINANTES TERÃO ACESSO A{" "}
              <span className="text-orange-500 bg-zinc-950/90  rounded-md">
                CONTEÚDOS EXCLUSIVOS!
              </span>{" "}
              AO TODO SÃO
              <span className="text-orange-500 bg-zinc-950/90 rounded-md ml-1">
                MAIS DE 80 HORAS DE AULAS GRAVADAS{" "}
              </span>{" "}
              COM MATERIAL COMPLEMENTAR,
              <span className="text-orange-500 bg-zinc-950/90 rounded-md ml-1">
                AULAS AO VIVO TODA SEMANA
              </span>{" "}
              COM NOSSO TIME DE PROFESSORES E{" "}
              <span className="text-orange-500 bg-zinc-950/90 rounded-md">
                CURSOS BÔNUS TODOS OS MESES!
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-[1350px]">
              <div className="flex-center flex-col rounded-lg p-5 border-2 border-black shadow-2xl shadow-black bg-gradient-to-t from-orange-300 to-orange-200">
                <img
                  src="/src/assets/images/metodosupi.jpg"
                  alt="metodosupi.jpg"
                  className="w-[350px] rounded-lg "
                />
                <div className="mt-5 font-lora text-center bg-black p-5 rounded-lg shadow-lg shadow-orange-500">
                  <h1 className="text-xl text-white mb-2 font-bold">
                    MÉTODO DE TREINAMENTO
                  </h1>
                  <h1 className="text-xl text-orange-500 font-medium ">
                    <span className="bg-red-500 text-white p-1 rounded-md">
                      GM
                    </span>{" "}
                    LUIS PAULO SUPI
                  </h1>
                </div>
                <a
                  href="#"
                  className="border border-black bg-gradient-to-t from-slate-50 to-slate-200 text-black p-2 rounded-lg mt-10 font-poppins font-medium hover:scale-105 duration-300"
                >
                  SAIBA MAIS
                </a>
              </div>
              <div className="flex-center flex-col rounded-lg p-5 border-2 border-black shadow-2xl shadow-black bg-gradient-to-t from-orange-300 to-orange-200">
                <img
                  src="/src/assets/images/metodojulia.jpg"
                  alt="metodosupi.jpg"
                  className="w-[350px] rounded-lg "
                />
                <div className="mt-5 font-lora text-center bg-black p-5 rounded-lg shadow-lg shadow-orange-500">
                  <h1 className="text-xl text-white mb-2 font-bold">
                    MÉTODO DE TREINAMENTO
                  </h1>
                  <h1 className="text-xl text-orange-500 font-medium">
                    <span className="bg-red-500 text-white p-1 rounded-md mr-2">
                      FM
                    </span>
                    <span className="bg-red-500 text-white p-1 rounded-md">
                      WIM
                    </span>{" "}
                    JULIA ALBOREDO
                  </h1>
                </div>
                <a
                  href="#"
                  className="border border-black  bg-gradient-to-t from-slate-50 to-slate-200 text-black p-2 rounded-lg mt-10 font-poppins font-medium hover:scale-105 duration-300"
                >
                  SAIBA MAIS
                </a>
              </div>
            </div>
            <div className="flex items-center flex-col min-h-screen">
              <span className="my-16 md:my-20">
                <LuPlus size={70} />
              </span>
              <div>
                <div className="flex-center flex-col gap-5">
                  <h1 className="text-center text-5xl text-shadow font-lora">
                    AULAS COM OS MELHORES <br /> DO BRASIL <br />
                  </h1>
                  <span className=" text-green-500 text-center text-5xl text-shadow font-lora bg-white p-2 rounded-lg">
                    TODA SEMANA
                  </span>
                  <AiOutlineArrowDown size={50} />
                </div>
                <div className="flex-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 bg-gradient-to-b from-orange-300 to-orange-300 border-2 border-black p-5 rounded-lg">
                    <div className="max-w-[300px]">
                      <img
                        src="/src/assets/images/profsupi.jpg"
                        alt="profsupi.jpg"
                        className="rounded-t-lg w-[300px]"
                      />
                      <div className="bg-black p-3 font-lora rounded-b-lg">
                        <h1 className="font-bold text-orange-500 text-2xl">
                          <span className="bg-red-500 text-white p-1 rounded-md">
                            GM
                          </span>{" "}
                          Luis Paulo Supi
                        </h1>
                        <p className="text-lg text-white">Número 1 do Brasil</p>
                      </div>
                    </div>
                    <div className="max-w-[300px]">
                      <img
                        src="/src/assets/images/profjulia.jpg"
                        alt="profsupi.jpg"
                        className="rounded-t-lg w-[300px]"
                      />
                      <div className="bg-black p-3 font-lora rounded-b-lg">
                        <h1 className="font-bold text-orange-500 text-2xl">
                          <span className="bg-red-500 text-white p-1 rounded-md">
                            MF
                          </span>{" "}
                          Julia Alboredo
                        </h1>
                        <p className="text-lg text-white">Número 1 do Brasil</p>
                      </div>
                    </div>
                    <div className="max-w-[300px]">
                      <img
                        src="/src/assets/images/proffelipe.jpg"
                        alt="profsupi.jpg"
                        className="rounded-t-lg w-[300px]"
                      />
                      <div className="bg-black p-3 font-lora rounded-b-lg">
                        <h1 className="font-bold text-orange-500 text-2xl">
                          <span className="bg-red-500 text-white p-1 rounded-md">
                            GM
                          </span>{" "}
                          Felipe El Debs
                        </h1>
                        <p className="text-lg text-white">Número 4 do Brasil</p>
                      </div>
                    </div>
                    <div className="max-w-[300px]">
                      <img
                        src="/src/assets/images/profalvaro.jpg"
                        alt="profsupi.jpg"
                        className="rounded-t-lg w-[300px] h-[339px]"
                      />
                      <div className="bg-black p-3 font-lora rounded-b-lg">
                        <h1 className="font-bold text-orange-500 text-2xl">
                          <span className="bg-red-500 text-white p-1 rounded-md">
                            MF
                          </span>{" "}
                          Álvaro Aranha
                        </h1>
                        <p className="text-lg text-white">
                          Treinador multicampeão
                        </p>
                      </div>
                    </div>
                    <div className="max-w-[300px]">
                      <img
                        src="/src/assets/images/proffier.jpg"
                        alt="profsupi.jpg"
                        className="rounded-t-lg w-[300px]"
                      />
                      <div className="bg-black p-3 font-lora rounded-b-lg">
                        <h1 className="font-bold text-orange-500 text-2xl">
                          <span className="bg-red-500 text-white p-1 rounded-md">
                            GM
                          </span>{" "}
                          Alexandr Fier
                        </h1>
                        <p className="text-lg text-white">Número 3 do Brasil</p>
                      </div>
                    </div>
                    <div className="max-w-[300px]">
                      <img
                        src="/src/assets/images/profvictor.jpg"
                        alt="profsupi.jpg"
                        className="rounded-t-lg w-[300px]"
                      />
                      <div className="bg-black p-3 font-lora rounded-b-lg">
                        <h1 className="font-bold text-orange-500 text-2xl">
                          MI Victor Shumyatsky
                        </h1>
                        <p className="text-lg text-white">
                          Campeão Sulamericano{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>HELLO</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
