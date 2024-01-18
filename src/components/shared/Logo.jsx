import pawn from "/assets/images/pawn.svg"
import queen from "/assets/images/queen.svg"

const Logo = () => {
  return (
    <a href="/" className="flex items-center text-[#F2EFDF] font-dmSerif">
      <img className="w-[35px] md:w-[50px]" src={pawn} alt="pawn.svg" />
      <h1 className="text-2xl md:text-4xl font-bold">Do Zero à Maestria</h1>
      <img className="w-[35px] md:w-[50px]" src={queen} alt="queen.svg" />
    </a>
  )
}

export default Logo
