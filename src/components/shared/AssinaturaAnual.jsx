import Button from "./Button"

const AssinaturaAnual = () => {
  return (
    <>
      <section className="flex-center">
        <div className="bg-zinc-900/75 md:bg-zinc-900/65 absolute w-full h-[250px] md:h-[578px]">
          <div className="text-2xl md:text-6xl lg:text-7xl text-white md:max-w-[800px] mx-auto mt-5 font-medium font-lora">
            <div className="bg-black/80 rounded-lg p-1">
              <h1 className="text-center">
                Do <span className="text-[#B81919]">Zero</span> à{" "}
                <span className="text-green-500">Maestria</span> com os Melhores
                Enxadristas do Brasil
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
    </>
  )
}

export default AssinaturaAnual
