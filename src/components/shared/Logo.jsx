import pawn from "../../assets/images/pawn.svg"
import queen from "../../assets/images/queen.svg"

const Logo = () => {
  return (
    <div className="flex items-center bg-gradient-to-r from-slate-200 to-slate-100 bg-clip-text text-transparent font-lora">
      <img className="w-[35px] md:w-[50px]" src={pawn} alt="pawn.svg" />
      <h1 className="text-2xl md:text-4xl font-bold">Do Zero à Maestria</h1>
      <img className="w-[35px] md:w-[50px]" src={queen} alt="queen.svg" />
    </div>
  )
}

export default Logo
