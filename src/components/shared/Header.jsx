import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { MdOutlineArrowDropDown } from "react-icons/md"
import { FaChessKing } from "react-icons/fa"
import { GiChessQueen } from "react-icons/gi"
import { RiLiveFill } from "react-icons/ri"
import { IoBookSharp } from "react-icons/io5"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="w-full bg-[#0D0D0D]">
      <nav className="wrapper flex-between font-lora text-[#F2EFDF]">
        <Logo />
        <div className="text-lg font-bold flex-between gap-6">
          <a href="/">Inicio</a>
          <div className="flex-between">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  Cursos
                  <span>
                    <MdOutlineArrowDropDown size={30} color="#F2EFDF" />
                  </span>
                </MenubarTrigger>
                <MenubarContent className="text-[#7B4610] font-bold">
                  <MenubarItem className="flex-center gap-3">
                    <a href="/metodosupi">Método GM Supi</a>
                    <span>
                      <FaChessKing />
                    </span>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="flex-center gap-3">
                    <a href="/metodojulia">Método 2.0 MF Julia</a>
                    <span>
                      <GiChessQueen />
                    </span>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="flex-center gap-3">
                    <a href="/aulas-ao-vivo">Aulas ao Vivo</a>
                    <span>
                      <RiLiveFill />
                    </span>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="flex-center gap-3">
                    <a href="/cursos-mensais">Cursos Mensais</a>
                    <span>
                      <IoBookSharp />
                    </span>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
