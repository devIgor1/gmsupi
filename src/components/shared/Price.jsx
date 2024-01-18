import Button from "./Button"
import { GiCheckMark } from "react-icons/gi"

const Price = () => {
  return (
    <section className="wrapper flex-center flex-col items-center gap-12 md:gap-40 md:flex-row mt-10 p-5">
      <div className="flex-center flex-col">
        <div className="mt-10 font-merriweather border border-white p-5 rounded-lg mb-5 text-[#F2EFDF] text-lg">
          <div className="flex-center gap-3 mb-5">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Método de Treinamento GM Luis Paulo Supi</h1>
          </div>
          <div className="flex-center gap-3 mb-5">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Método de Treinamento 2.0 MF Julia Alboredo</h1>
          </div>
          <div className="flex-center gap-3 mb-5">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Cursos novos liberados todo mês </h1>
            <span className="bg-[#A61420] text-white p-1 rounded-md font-bold">
              BÔNUS
            </span>
          </div>
          <div className="flex-center gap-3 mb-5">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Materiais de apoio e exercícios </h1>
            <span className="bg-[#A61420] text-white p-1 rounded-md font-bold">
              BÔNUS
            </span>
          </div>
          <div className="flex-center gap-3 mb-5">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Acesso a mais de 80h de aulas gravadas</h1>
          </div>
          <div className="flex-center gap-3 mb-5">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Grupo exclusivo do WhatssApp para os alunos </h1>
            <span className="bg-[#A61420] text-white p-1 rounded-md font-bold">
              BÔNUS
            </span>
          </div>
          <div className="flex-center gap-3 mb-5 text-start">
            <GiCheckMark size={25} color="#45f248" />
            <h1>Aulas ao vivo toda semana</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl font-lora mb-4 underline text-[#F2EFDF]">
          ASSINATURA ANUAL
        </h1>
        <div className="font-poppins p-7 bg-[#efebd8] rounded-lg">
          <div>
            <p className="text-2xl">De:</p>
            <h1 className="text-[#A61420] line-through text-5xl">R$997,00</h1>
          </div>
          <div>
            <p className="text-2xl">por:</p>
            <h1 className="text-[#10611D] text-5xl">R$497,00 </h1>
          </div>
          <p className="text-xl text-center bg-black text-[#F2EFDF] mt-5 rounded-lg">
            ou 12x de <span className="text-[#10611D]">R$ 49,60*</span>
          </p>
        </div>
        <div className="mt-5 flex-center">
          <Button />
        </div>
      </div>
    </section>
  )
}

export default Price
