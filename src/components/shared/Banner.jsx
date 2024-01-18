import Button from "./Button"

const Banner = () => {
  return (
    <>
      <section className="flex-center">
        <div className="bg-zinc-900/75 md:bg-zinc-900/50 absolute w-full h-[250px] md:h-[578px]">
          <div className="text-2xl md:text-6xl lg:text-7xl text-[#F2EFDF] md:max-w-[800px] mx-auto mt-5 font-medium font-dmSerif">
            <div className="bg-black/80 rounded-lg p-1">
              <h1 className="text-center">
                Do <span className="text-[#A61420]">Zero</span> à{" "}
                <span className="text-[#10611D]">Maestria</span> com os Melhores
                Enxadristas do Brasil
              </h1>
            </div>
            <div className="w-full flex-center mt-20 md:mt-28">
              <Button />
            </div>
          </div>
        </div>
        <img
          src="/assets/images/hero.png"
          alt="hero.png"
          className="w-full h-[250px] md:h-[578px]"
        />
      </section>
    </>
  )
}

export default Banner
