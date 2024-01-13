import pawn from "../assets/images/pawn.svg"
import queen from "../assets/images/queen.svg"
import { MdOutlineArrowDropDown } from "react-icons/md"

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-br from-yellow-900 to-yellow-700">
      <nav className="wrapper flex-between font-lora text-white">
        <div className="flex items-center">
          <img className="w-[35px] md:w-[50px]" src={pawn} alt="pawn.svg" />
          <h1 className="text-lg md:text-4xl font-bold ">Do Zero a Maestria</h1>
          <img className="w-[35px] md:w-[50px]" src={queen} alt="queen.svg" />
        </div>
        <div className="text-lg md:text-xl font-bold flex-between gap-6">
          <a href="#">Inicio</a>
          <div className="flex-between">
            <a href="#">Cursos</a>
            <span>
              <MdOutlineArrowDropDown size={30} color="#fff" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
