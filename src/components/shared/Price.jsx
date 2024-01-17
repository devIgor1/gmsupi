import Button from "./Button"
import { GiCheckMark } from "react-icons/gi"

const Price = () => {
  return (
    <section className="wrapper flex-center flex-col items-center gap-12 md:gap-40 md:flex-row mt-10 p-5 border-t-2 border-black">
      <div className="flex-center flex-col">
        <div className="mt-10 font-poppins bg-white p-5 rounded-lg shadow-md shadow-black mb-5">
          <div className="flex-center gap-3 mb-5">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Método de Treinamento GM Luis Paulo Supi</h1>
          </div>
          <div className="flex-center gap-3 mb-5">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Método de Treinamento 2.0 MF Julia Alboredo</h1>
          </div>
          <div className="flex-center gap-3 mb-5">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Cursos novos liberados todo mês </h1>
            <span className="bg-red-600 text-white p-1">BÔNUS</span>
          </div>
          <div className="flex-center gap-3 mb-5">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Materiais de apoio e exercícios </h1>
            <span className="bg-red-600 text-white p-1">BÔNUS</span>
          </div>
          <div className="flex-center gap-3 mb-5">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Acesso a mais de 80h de aulas gravadas</h1>
          </div>
          <div className="flex-center gap-3 mb-5">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Grupo exclusivo do WhatssApp para os alunos </h1>
            <span className="bg-red-600 text-white p-1">BÔNUS</span>
          </div>
          <div className="flex-center gap-3 mb-5 text-start">
            <span className="bg-black rounded-full">
              <GiCheckMark size={25} color="#45f248" />
            </span>
            <h1>Aulas ao vivo toda semana</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-lora mb-4 underline">
          ASSINATURA ANUAL
        </h1>
        <div className="border-2 border-black font-poppins p-7 bg-white shadow-md shadow-black">
          <div>
            <p className="text-2xl">De:</p>
            <h1 className="text-red-600 line-through text-5xl">R$997,00</h1>
          </div>
          <div>
            <p className="text-2xl">por:</p>
            <h1 className="text-green-500 text-5xl">R$497,00 </h1>
          </div>
          <p className="text-xl text-center bg-black text-white mt-5 rounded-lg">
            ou 12x de <span className="text-green-500">R$ 49,60*</span>
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
