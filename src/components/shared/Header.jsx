import { MdOutlineArrowDropDown } from "react-icons/md"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-br from-yellow-900 to-yellow-700">
      <nav className="wrapper flex-between font-lora text-white">
        <Logo />
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
