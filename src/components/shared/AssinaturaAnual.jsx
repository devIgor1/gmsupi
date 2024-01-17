import { FaSignature } from "react-icons/fa"
import { Separator } from "../ui/separator"
import Button from "./Button"

const AssinaturaAnual = () => {
  return (
    <section className="w-full flex-col md:flex-row md:flex-center md:flex-around">
      <div className="flex-1 p-5 flex-center flex-col">
        <div className="flex-center flex-col">
          <h1 className="text-center text-5xl font-lora underline">
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
              AULAS AO VIVO <span className="text-green-500">TODA SEMANA</span>{" "}
              COM UM TIME DE PROFESSORES CONTANDO COM OS MELHORES JOGADORES E
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
              <span className="text-green-500">DEZENAS DE HORAS DE AULAS</span>{" "}
              JÁ DISPONIBILIZADAS EM NOSSA PLATAFORMA ESTRUTURADAS PARA{" "}
              <span className="text-green-500">CADA FAIXA DE RATING</span>
            </li>
            <Separator className="my-2" />
            <li>
              FAZER PARTE DA MELHOR COMUNIDADE DE XADREZ DO BRASIL, O NOSSO
              GRUPO EXCLUSIVO DO WHATSAPP QUE HOJE JÁ CONTA COM MAIS DE{" "}
              <span className="text-green-500 mr-1">1000</span>
              COMPROMETIDOS ESTUDANTES QUE SÃO{" "}
              <span className="text-green-500">DIARIAMENTE</span> MONITORADOS
              PELO{" "}
              <span className="text-red-500">
                <span className="bg-red-500 text-white p-1 rounded-md">GM</span>{" "}
                LUIS PAULO SUPI
              </span>{" "}
              E PELA{" "}
              <span className="text-red-500">
                {" "}
                <span className="bg-red-500 text-white p-1 rounded-md">
                  WIM
                </span>{" "}
                JULIA ALBOREDO
              </span>
              .
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
  )
}

export default AssinaturaAnual
