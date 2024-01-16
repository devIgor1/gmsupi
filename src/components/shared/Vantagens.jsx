import { FaGraduationCap } from "react-icons/fa"
import { GiNotebook } from "react-icons/gi"
import { IoMdStar } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io5"
import { Separator } from "../ui/separator"
import { LuPlus } from "react-icons/lu"
import Button from "./Button"
import { AiFillGift } from "react-icons/ai"
import { FaCoins } from "react-icons/fa"
import { LiaLaptopSolid } from "react-icons/lia"
import { BsGraphUpArrow } from "react-icons/bs"

const Vantagens = () => {
  return (
    <section className="min-h-screen w-full mt-20">
      <div className="flex-center flex-col">
        <div className="flex-center">
          <IoMdStar size={50} />
          <h1 className="text-center text-5xl text-shadow font-lora underline text-black">
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
          <div className="flex-center flex-col rounded-lg p-5 border-2 border-black shadow-2xl shadow-black bg-gradient-to-b from-amber-900 to-neutral-900">
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
                <span className="bg-red-500 text-white p-1 rounded-md">GM</span>{" "}
                LUIS PAULO SUPI
              </h1>
            </div>
            <a
              href="#"
              className="border-2 border-black bg-gradient-to-t from-slate-50 to-slate-200 text-black p-2 rounded-lg mt-10 font-poppins font-medium hover:scale-105 duration-300"
            >
              SAIBA MAIS
            </a>
          </div>
          <div className="flex-center flex-col rounded-lg p-5 border-2 border-black shadow-2xl shadow-black bg-gradient-to-b from-amber-900 to-neutral-900">
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
              className="border-2 border-black  bg-gradient-to-t from-slate-50 to-slate-200 text-black p-2 rounded-lg mt-10 font-poppins font-medium hover:scale-105 duration-300"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col min-h-screen">
          <span className="my-16 ">
            <LuPlus size={70} />
          </span>
          <div>
            <div className="flex-center flex-col gap-5">
              <h1 className="text-center text-3xl md:text-5xl text-shadow font-lora text-black  ">
                AULAS COM NOSSA EQUIPE DE PROFESSORES <br />
              </h1>
              <span className=" text-green-500 text-center text-5xl text-shadow font-lora bg-white p-2 rounded-lg">
                TODA SEMANA
              </span>
            </div>
            <div className="flex-center">
              <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 bg-gradient-to-b from-orange-100 to-orange-100 border-2 border-black p-5 rounded-lg">
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
                    <p className="text-lg text-white">Treinador multicampeão</p>
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
                      <span className="bg-red-500 text-white p-1 rounded-md">
                        MI
                      </span>{" "}
                      Victor Shumyatsky
                    </h1>
                    <p className="text-lg text-white">Campeão Sulamericano </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 min-h-screen">
              <div className="flex-center my-10">
                <LuPlus size={70} />
              </div>
              <div className="flex-1 flex-center flex-col bg-gradient-to-b from-slate-100 to-gray-300 w-[400px] md:w-[500px] mx-auto rounded-lg shadow-lg shadow-black p-10 gap-10">
                <div className="flex-center flex-col gap-5">
                  <div className="flex-center gap-5 bg-black text-white p-2">
                    <h1 className="font-poppins text-xl font-bold text-center text-green-500">
                      ACOMPANHAMENTO EXCLUSIVO EM NOSSO GRUPO DO WHATSAPP
                    </h1>
                    <span className="text-green-500">
                      <IoLogoWhatsapp size={50} />
                    </span>
                  </div>
                  <Separator className="bg-black" />
                  <div className="flex-center flex-col gap-5 w-full">
                    <div className="flex-center gap-5 bg-black text-white p-2 w-full">
                      <h1 className="font-poppins text-xl font-bold text-center text-red-500">
                        AUMENTE SEU RATING
                      </h1>
                      <span className="text-red-500">
                        <BsGraphUpArrow size={50} />
                      </span>
                    </div>
                    <Separator className="bg-black" />
                  </div>
                </div>
                <div className=" flex-center flex-col gap-5">
                  <div className="flex-center gap-5 bg-black text-white p-2 w-full">
                    <h1 className="font-poppins text-xl font-bold text-center text-orange-500">
                      CURSOS NOVOS TODOS OS MESES
                    </h1>
                    <span className="text-orange-500">
                      <FaGraduationCap size={50} />
                    </span>
                  </div>
                  <Separator className="bg-black" />
                </div>
                <div className="flex-center flex-col gap-5">
                  <div className="flex-center gap-5 bg-black text-white p-2 w-full">
                    <h1 className="font-poppins text-xl font-bold text-center text-blue-500">
                      PROVAS MENSAIS PARA TODOS OS NÍVEIS
                    </h1>
                    <span className="text-blue-500">
                      <GiNotebook size={50} />
                    </span>
                  </div>
                  <Separator className="bg-black" />
                </div>
                <div className="flex-center flex-col gap-5 w-full">
                  <div className="flex-center gap-5 bg-black text-white p-2 w-full">
                    <h1 className="font-poppins text-xl font-bold text-center text-yellow-300">
                      PAGAMENTO SEGURO
                    </h1>
                    <span className="text-yellow-300">
                      <FaCoins size={50} />
                    </span>
                  </div>
                  <Separator className="bg-black" />
                </div>
                <div className="flex-center flex-col gap-5 w-full">
                  <div className="flex-center gap-5 bg-black text-white p-2 w-full">
                    <h1 className="font-poppins text-xl font-bold text-center">
                      TESTE GRÁTIS POR 7 DIAS
                    </h1>
                    <span className="text-white">
                      <LiaLaptopSolid size={50} />
                    </span>
                  </div>
                  <Separator className="bg-black" />
                </div>
              </div>
              <div className="flex-center my-10">
                <LuPlus size={70} />
              </div>
              <div className="mt-10">
                <div className="bg-black p-2 max-w-3xl mx-auto shadow-md shadow-black border-2 border-black rounded-sm font-poppins">
                  <div className="text-yellow-300 flex-center gap-5">
                    <h1 className="text-6xl">BÔNUS</h1>
                    <span>
                      <AiFillGift size={50} />
                    </span>
                  </div>
                  <Separator className="bg-white" />
                  <div className="text-center">
                    <p className="font-poppins text-2xl text-white mt-2 text-center">
                      Além de todos os cursos e aulas ao vivo, os assinantes
                      terão
                    </p>
                    <span className="ml-1 text-green-500 text-2xl font-poppins">
                      acesso a novos cursos todo o mês sem custo adicional!
                    </span>
                  </div>
                  <div className="flex-center mt-5">
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vantagens
