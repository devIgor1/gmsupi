import { FaSignature } from "react-icons/fa"
import { Separator } from "../ui/separator"
import Button from "./Button"

const AssinaturaAnual = () => {
  return (
    <section className="w-full flex-col md:flex-row md:flex-center md:flex-around mt-10">
      <div className="flex-1 p-5 flex-center flex-col">
        <div className="flex-center flex-col">
          <h1 className="text-center text-5xl font-dmSerif underline text-[#F2EFDF]">
            ASSINATURA ANUAL
          </h1>
          <span className="text-[#F2EFDF]">
            <FaSignature size={50} />
          </span>
        </div>
        <div className="max-w-[500px] p-5 font-semibold rounded-md bg-[#efebd8]">
          <p className="text-center font-merriweather text-xl md:text-2xl text-black">
            NOSSA ASSINATURA ANUAL OFERECE{" "}
            <span className="text-black rounded-lg p-1 mr-2">
              ACESSO COMPLETO
            </span>
            AO NOSSO SITE, INCLUINDO:
          </p>
          <ul className="list-disc mt-5 text-black p-2 px-6 text-center text-base md:text-lg rounded-md font-merriweather tracking-wide">
            <li>
              AULAS AO VIVO <span className="text-[#10611D]">TODA SEMANA</span>{" "}
              COM UM TIME DE PROFESSORES CONTANDO COM OS MELHORES JOGADORES E
              TREINADORES DO BRASIL.
            </li>
            <Separator className="my-2 bg-black" />
            <li>
              CURSOS NOVOS E EXCLUSIVOS{" "}
              <span className="text-[#10611D]">TODO MÊS</span> SEM CUSTO
              ADICIONAL
            </li>
            <Separator className="my-2 bg-black" />
            <li>
              <span className="text-[#10611D]">DEZENAS DE HORAS DE AULAS</span>{" "}
              JÁ DISPONIBILIZADAS EM NOSSA PLATAFORMA ESTRUTURADAS PARA{" "}
              <span className="text-[#10611D]">CADA FAIXA DE RATING</span>
            </li>
            <Separator className="my-2 bg-black" />
            <li>
              FAZER PARTE DA MELHOR COMUNIDADE DE XADREZ DO BRASIL, O NOSSO
              GRUPO EXCLUSIVO DO WHATSAPP QUE HOJE JÁ CONTA COM MAIS DE{" "}
              <span className="text-[#10611D] mr-1">1000</span>
              COMPROMETIDOS ESTUDANTES QUE SÃO{" "}
              <span className="text-[#10611D]">DIARIAMENTE</span> MONITORADOS
              PELO{" "}
              <span className="text-[#A61420]">
                <span className="bg-[#A61420] text-white p-1 rounded-md">
                  GM
                </span>{" "}
                LUIS PAULO SUPI
              </span>{" "}
              E PELA{" "}
              <span className="text-[#A61420]">
                {" "}
                <span className="bg-[#A61420] text-white p-1 rounded-md">
                  WIM
                </span>{" "}
                JULIA ALBOREDO
              </span>
              .
            </li>
            <Separator className="my-2 bg-black" />
          </ul>
          <div className="w-full my-4 flex-center">
            <Button />
          </div>
        </div>
      </div>
      <div className="flex-1 flex-center flex-col gap-2">
        <img
          src="/assets/images/supi.jpg"
          alt="supi.jpg"
          className="rounded-lg shadow-md shadow-black w-[400px] md:w-[600px]"
        />
        <img
          src="/assets/images/julia.jpg"
          alt="julia.jpg"
          className="rounded-lg shadow-md shadow-black w-[400px] md:w-[600px]"
        />
      </div>
    </section>
  )
}

export default AssinaturaAnual
