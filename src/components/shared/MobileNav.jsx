import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import pawn from "/assets/images/pawn.svg"
import queen from "/assets/images/queen.svg"

import { HiMenu } from "react-icons/hi"
import NavItems from "./NavItems"
import Logo from "./Logo"

const MobileNav = () => {
  return (
    <header className="w-full bg-[#0D0D0D] border-b-2 border-[#F2EFDF]">
      <nav className="wrapper flex-between font-dmSerif text-[#F2EFDF]">
        <a href="/" className="flex-center">
          <img className="w-[35px]" src={pawn} alt="pawn.svg" />
          <h1 className="text-2xl font-bold ">Do Zero a Maestria</h1>
          <img className="w-[35px]" src={queen} alt="queen.svg" />
        </a>
        <Sheet>
          <SheetTrigger>
            <HiMenu size={30} color="#F2EFDF" />
          </SheetTrigger>
          <SheetContent>
            <div className="bg-[#0D0D0D] h-screen p-6 pt-16">
              <div>
                <NavItems />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default MobileNav
