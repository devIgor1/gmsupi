import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import pawn from "../../assets/images/pawn.svg"
import queen from "../../assets/images/queen.svg"

import { HiMenu } from "react-icons/hi"
import NavItems from "./NavItems"
import Logo from "./Logo"

const MobileNav = () => {
  return (
    <header className="w-full bg-gradient-to-br from-yellow-900 to-yellow-700">
      <nav className="wrapper flex-between font-lora text-white">
        <div className="flex items-center">
          <img className="w-[35px]" src={pawn} alt="pawn.svg" />
          <h1 className="text-2xl font-bold ">Do Zero a Maestria</h1>
          <img className="w-[35px]" src={queen} alt="queen.svg" />
        </div>
        <Sheet>
          <SheetTrigger>
            <HiMenu size={30} />
          </SheetTrigger>
          <SheetContent>
            <div className="bg-[#EED6B5] h-screen p-6 pt-16">
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
