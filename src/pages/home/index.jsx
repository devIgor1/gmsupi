import Button from "@/components/shared/Button"
import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import { Separator } from "@/components/ui/separator"
import { FaSignature } from "react-icons/fa"
import { IoMdStar } from "react-icons/io"
import { LuPlus } from "react-icons/lu"
import { AiOutlineArrowDown } from "react-icons/ai"
import { FaGraduationCap } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { GiNotebook } from "react-icons/gi"
import Banner from "@/components/shared/Banner"
import AssinaturaAnual from "@/components/shared/AssinaturaAnual"
import Vantagens from "@/components/shared/Vantagens"

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <main className="w-full min-h-screen bg-gradient-to-t from-orange-300 to-orange-200">
        <Banner />
        <AssinaturaAnual />
        <Vantagens />
      </main>
    </>
  )
}
