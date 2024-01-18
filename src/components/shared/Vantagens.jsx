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
        <IoMdStar size={50} color="#F2EFDF" />
        <h1 className="text-center text-5xl font-dmSerif underline text-[#F2EFDF]">
          CONTEÚDOS EXCLUSIVOS
        </h1>
        <p className="max-w-4xl text-lg text-center font-poppins mt-5 bg-[#efebd8] p-3 rounded-md ">
          OS ASSINANTES TERÃO ACESSO A{" "}
          <span className="text-[#10611D] font-bold  rounded-md">
            CONTEÚDOS EXCLUSIVOS!
          </span>{" "}
          AO TODO SÃO
          <span className="text-[#10611D] font-bold rounded-md ml-1">
            MAIS DE 80 HORAS DE AULAS GRAVADAS{" "}
          </span>{" "}
          COM MATERIAL COMPLEMENTAR,
          <span className="text-[#10611D] font-bold rounded-md ml-1">
            AULAS AO VIVO TODA SEMANA
          </span>{" "}
          COM NOSSO TIME DE PROFESSORES E{" "}
          <span className="text-[#10611D] font-bold rounded-md">
            CURSOS BÔNUS TODOS OS MESES!
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-[1350px]">
          <div className="flex-center flex-col rounded-lg p-5 border-2 border-black bg-[#efebd8]">
            <img
              src="/src/assets/images/metodosupi.jpg"
              alt="metodosupi.jpg"
              className="w-[350px] rounded-lg "
            />
            <div className="mt-5 text-center bg-[#0D0D0D] p-5 rounded-md">
              <h1 className="text-xl text-[#10611D] mb-2 font-bold font-dmSerif">
                MÉTODO DE TREINAMENTO
              </h1>
              <h1 className="text-xl text-white font-medium font-merriweather">
                <span className="bg-[#A61420] text-white p-1 rounded-md font-lora">
                  GM
                </span>{" "}
                LUIS PAULO SUPI
              </h1>
            </div>
            <a
              href="#"
              className="bg-[#0D0D0D] text-[#F2F2F2] border border-white p-2 rounded-lg mt-10 font-poppins font-medium hover:scale-105 duration-300"
            >
              SAIBA MAIS
            </a>
          </div>
          <div className="flex-center flex-col rounded-lg p-5 border-2 border-black bg-[#efebd8]">
            <img
              src="/src/assets/images/metodojulia.jpg"
              alt="metodosupi.jpg"
              className="w-[350px] rounded-lg "
            />
            <div className="mt-5 text-center bg-[#0D0D0D] p-5 rounded-md">
              <h1 className="text-xl text-[#10611D] mb-2 font-bold font-dmSerif">
                MÉTODO DE TREINAMENTO
              </h1>
              <h1 className="text-xl text-white font-medium font-merriweather">
                <span className="bg-[#A61420] text-white p-1 rounded-md mr-2 font-lora">
                  FM
                </span>
                <span className="bg-[#A61420] text-white p-1 rounded-md font-lora">
                  WIM
                </span>{" "}
                JULIA ALBOREDO
              </h1>
            </div>
            <a
              href="#"
              className="bg-[#0D0D0D] text-[#F2F2F2] border border-white p-2 rounded-lg mt-10 font-poppins font-medium hover:scale-105 duration-300"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col min-h-screen">
          <span className="my-16 ">
            <LuPlus size={70} color="#fff" />
          </span>
          <div>
            <div className="flex-center flex-col gap-5">
              <h1 className="text-center text-3xl md:text-5xl font-dmSerif text-[#F2EFDF] underline">
                AULAS COM NOSSA EQUIPE DE PROFESSORES <br />
              </h1>
              <span className=" text-[#10611D] text-center text-5xl font-dmSerif bg-[#F2EFDF] p-2 rounded-lg">
                TODA SEMANA
              </span>
            </div>
            <div className="flex-center">
              <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 bg-[#efebd8] border-2 border-black p-5 rounded-lg">
                <div className="max-w-[300px]">
                  <img
                    src="/src/assets/images/profsupi.jpg"
                    alt="profsupi.jpg"
                    className="rounded-md w-[300px]"
                  />
                  <div className="p-3 rounded-b-lg flex-center gap-4">
                    <span className="bg-[#A61420] text-white p-1 rounded-md text-2xl font-lora">
                      GM
                    </span>
                    <div>
                      {" "}
                      <h1 className="font-bold text-[#A61420] text-2xl font-dmSerif">
                        Luis Paulo Supi
                      </h1>
                      <p className="text-base text-[#0D0D0D] font-merriweather font-bold">
                        Número 1 do Brasil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[300px]">
                  <img
                    src="/src/assets/images/profjulia.jpg"
                    alt="profsupi.jpg"
                    className="rounded-md w-[300px]"
                  />
                  <div className="p-3 rounded-b-lg flex-center gap-4">
                    <span className="bg-[#A61420] text-white p-1 rounded-md text-2xl font-lora">
                      MF
                    </span>
                    <div>
                      {" "}
                      <h1 className="font-bold text-[#A61420] text-2xl font-dmSerif">
                        Julia Alboredo
                      </h1>
                      <p className="text-base text-[#0D0D0D] font-merriweather font-bold">
                        Número 1 do Brasil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[300px]">
                  <img
                    src="/src/assets/images/proffelipe.jpg"
                    alt="profsupi.jpg"
                    className="rounded-md w-[300px]"
                  />
                  <div className="p-3 rounded-b-lg flex-center gap-4">
                    <span className="bg-[#A61420] text-white p-1 rounded-md text-2xl font-lora">
                      GM
                    </span>
                    <div>
                      {" "}
                      <h1 className="font-bold text-[#A61420] text-2xl font-dmSerif">
                        Felipe El Debs
                      </h1>
                      <p className="text-base text-[#0D0D0D] font-merriweather font-bold">
                        Número 4 do Brasil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[300px]">
                  <img
                    src="/src/assets/images/profalvaro.jpg"
                    alt="profsupi.jpg"
                    className="rounded-md w-[300px] h-[339px]"
                  />
                  <div className="p-3 rounded-b-lg flex-center gap-4">
                    <span className="bg-[#A61420] text-white p-1 rounded-md text-2xl font-lora">
                      GM
                    </span>
                    <div>
                      {" "}
                      <h1 className="font-bold text-[#A61420] text-2xl font-dmSerif">
                        Álvaro Aranha
                      </h1>
                      <p className="text-base text-[#0D0D0D] font-merriweather font-bold">
                        Treinador Multicampeão
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[300px]">
                  <img
                    src="/src/assets/images/proffier.jpg"
                    alt="profsupi.jpg"
                    className="rounded-md w-[300px]"
                  />
                  <div className="p-3 rounded-b-lg flex-center gap-4">
                    <span className="bg-[#A61420] text-white p-1 rounded-md text-2xl font-lora">
                      MF
                    </span>
                    <div>
                      {" "}
                      <h1 className="font-bold text-[#A61420] text-2xl font-dmSerif">
                        Alexandr Fier
                      </h1>
                      <p className="text-base text-[#0D0D0D] font-merriweather font-bold">
                        Número 3 do Brasil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[300px]">
                  <img
                    src="/src/assets/images/profvictor.jpg"
                    alt="profsupi.jpg"
                    className="rounded-md w-[300px]"
                  />
                  <div className="p-3 rounded-b-lg flex-center gap-4">
                    <span className="bg-[#A61420] text-white p-1 rounded-md text-2xl font-lora">
                      MI
                    </span>
                    <div>
                      {" "}
                      <h1 className="font-bold text-[#A61420] text-2xl font-dmSerif">
                        Victor Shumyatsky
                      </h1>
                      <p className="text-base text-[#0D0D0D] font-merriweather font-bold">
                        Campeão Sulamericano
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 min-h-screen">
              <div className="flex-center my-10">
                <LuPlus size={70} color="#fff" />
              </div>
              <div className="flex-between flex-col md:flex-row gap-10 mb-10">
                <div className="flex-1 flex-col bg-[#efebd8] w-[350px] md:w-[500px] mx-auto rounded-lg shadow-lg shadow-black p-10 gap-10">
                  <div className="flex-center flex-col gap-5">
                    <div className="flex-center gap-5 text-white p-2">
                      <h1 className="font-merriweather text-xl font-bold text-center text-[#10611D]">
                        ACOMPANHAMENTO EXCLUSIVO EM NOSSO GRUPO DO WHATSAPP
                      </h1>
                      <span className="text-[#10611D]">
                        <IoLogoWhatsapp size={50} />
                      </span>
                    </div>
                    <Separator className="bg-black" />
                    <div className="flex-center flex-col gap-5 w-full">
                      <div className="flex-center gap-5 text-white p-2 w-full">
                        <h1 className="font-merriweather text-xl font-bold text-center text-[#A61420]">
                          AUMENTE SEU RATING
                        </h1>
                        <span className="text-[#A61420]">
                          <BsGraphUpArrow size={50} />
                        </span>
                      </div>
                      <Separator className="bg-black" />
                    </div>
                  </div>
                  <div className=" flex-center flex-col gap-5">
                    <div className="flex-center gap-5 text-white p-2 w-full">
                      <h1 className="font-merriweather text-xl font-bold text-center text-[#B0522A]">
                        CURSOS NOVOS TODOS OS MESES
                      </h1>
                      <span className="text-[#B0522A]">
                        <FaGraduationCap size={50} />
                      </span>
                    </div>
                    <Separator className="bg-black" />
                  </div>
                  <div className="flex-center flex-col gap-5">
                    <div className="flex-center gap-5 text-white p-2 w-full">
                      <h1 className="font-merriweather text-xl font-bold text-center text-[#0A3266]">
                        PROVAS MENSAIS PARA TODOS OS NÍVEIS
                      </h1>
                      <span className="text-[#0A3266]">
                        <GiNotebook size={50} />
                      </span>
                    </div>
                    <Separator className="bg-black" />
                  </div>
                  <div className="flex-center flex-col gap-5 w-full">
                    <div className="flex-center gap-5 text-white p-2 w-full">
                      <h1 className="font-merriweather text-xl font-bold text-center text-[#EDAC14]">
                        PAGAMENTO SEGURO
                      </h1>
                      <span className="text-[#EDAC14]">
                        <FaCoins size={50} />
                      </span>
                    </div>
                    <Separator className="bg-black" />
                  </div>
                  <div className="flex-center flex-col gap-5 w-full">
                    <div className="flex-center gap-5 text-[#613f33] p-2 w-full">
                      <h1 className="font-merriweather text-xl font-bold text-center">
                        TESTE GRÁTIS POR 7 DIAS
                      </h1>
                      <span className="text-[#613f33]">
                        <LiaLaptopSolid size={50} />
                      </span>
                    </div>
                    <Separator className="bg-black" />
                  </div>
                </div>
                <div className="flex-center">
                  <div className="mt-10">
                    <div className="p-2 w-[350px] md:w-full mx-auto">
                      <div className="text-[#EDAC14] flex-center gap-5">
                        <h1 className="text-5xl font-dmSerif">BÔNUS</h1>
                        <span>
                          <AiFillGift size={40} />
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="font-merriweather text-xl text-white mt-2 text-center">
                          Além de todos os cursos e aulas ao vivo, os assinantes
                          terão
                        </p>
                        <span className="ml-1 text-[#10611D] text-2xl font-merriweather">
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
        </div>
      </div>
    </section>
  )
}

export default Vantagens
