import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import { IoCheckmarkSharp } from "react-icons/io5"

export default function MetodoSupi() {
  return (
    <nav>
      <div className="hidden md:block border-b-2 border-[#F2EFDF]">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <main className="min-h-screen w-full bg-[#0D0D0D]">
        <h1 className="text-[#F2EFDF] text-4xl font-dmSerif text-center underline pt-10">
          CURSOS MENSAIS
        </h1>
        <div className="flex-center">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#F2EFDF] mt-10 gap-20 p-10 rounded-md">
            <div className="w-[300px] text-center flex-center flex-col gap-5">
              <h1 className="bg-[#0D0D0D] text-[#F2EFDF] w-full py-2 font-merriweather text-xl rounded-sm font-bold">
                FEVEREIRO
              </h1>
              <img
                src="/src/assets/images/aulas-mensais/cursomensal.jpg"
                alt="aula"
                className="w-[300px] rounded-sm"
              />
              <div className="bg-[#0D0D0D] w-full flex flex-col text-center rounded-md">
                <h1 className="text-[#F2EFDF] font-merriweather p-6 font-bold">
                  <span className="bg-[#A61420] text-[#F2EFDF] p-2 rounded-md font-lora">
                    GM
                  </span>{" "}
                  Luis Paulo Supi
                </h1>
              </div>
            </div>
            <div className="w-[300px] text-center flex-center flex-col gap-5">
              <h1 className="bg-[#0D0D0D] text-[#F2EFDF] w-full py-2 font-merriweather text-xl rounded-sm font-bold">
                MARÇO
              </h1>
              <img
                src="/src/assets/images/aulas-mensais/cursomensal2.jpg"
                alt="aula"
                className="w-[300px] rounded-sm"
              />
              <div className="bg-[#0D0D0D] w-full flex flex-col text-center rounded-md">
                <h1 className="text-[#F2EFDF] font-merriweather p-6 font-bold">
                  <span className="bg-[#A61420] text-[#F2EFDF] p-2 rounded-md font-lora">
                    WIM
                  </span>{" "}
                  Julia Alboredo
                </h1>
              </div>
            </div>
            <div className="w-[300px] text-center flex-center flex-col gap-5">
              <h1 className="bg-[#0D0D0D] text-[#F2EFDF] w-full py-2 font-merriweather text-xl rounded-sm font-bold">
                ABRIL
              </h1>
              <img
                src="/src/assets/images/aulas-mensais/cursomensal3.jpg"
                alt="aula"
                className="w-[300px] rounded-sm"
              />
              <div className="bg-[#0D0D0D] w-full flex flex-col text-center rounded-md">
                <h1 className="text-[#F2EFDF] font-merriweather p-6 font-bold">
                  <span className="bg-[#A61420] text-[#F2EFDF] p-2 rounded-md font-lora">
                    GM
                  </span>{" "}
                  Luis Paulo Supi
                </h1>
              </div>
            </div>
            <div className="w-[300px] text-center flex-center flex-col gap-5">
              <h1 className="bg-[#0D0D0D] text-[#F2EFDF] w-full py-2 font-merriweather text-xl rounded-sm font-bold">
                MAIO
              </h1>
              <img
                src="/src/assets/images/aulas-mensais/cursomensal4.jpg"
                alt="aula"
                className="w-[300px] rounded-sm"
              />
              <div className="bg-[#0D0D0D] w-full flex text-center rounded-md">
                <h1 className="text-[#F2EFDF] font-merriweather p-6 font-bold text-center">
                  <span className="bg-[#A61420]  text-[#F2EFDF] p-2 rounded-md font-lora">
                    GM
                  </span>{" "}
                  José Fernando Cubas
                </h1>
              </div>
            </div>
            <div className="w-[300px] text-center flex-center flex-col gap-5">
              <h1 className="bg-[#0D0D0D] text-[#F2EFDF] w-full py-2 font-merriweather text-xl rounded-sm font-bold">
                JUNHO
              </h1>
              <img
                src="/src/assets/images/aulas-mensais/cursomensal5.jpg"
                alt="aula"
                className="w-[300px] rounded-sm"
              />
              <div className="bg-[#0D0D0D] w-full flex flex-col text-center rounded-md">
                <h1 className="text-[#F2EFDF] font-merriweather p-6 font-bold text-center">
                  <span className="bg-[#A61420]  text-[#F2EFDF] p-2 rounded-md font-lora">
                    GM
                  </span>{" "}
                  Luis Paulo Supi
                </h1>
                <div className="flex-center gap-3 text-[#0A3266]">
                  <span>
                    <IoCheckmarkSharp size={30} />
                  </span>
                  <h1 className="text-xl font-merriweather">ATUALIZADO 2024</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </nav>
  )
}
