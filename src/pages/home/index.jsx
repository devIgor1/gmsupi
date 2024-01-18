import Button from "@/components/shared/Button"
import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import Banner from "@/components/shared/Banner"
import AssinaturaAnual from "@/components/shared/AssinaturaAnual"
import Vantagens from "@/components/shared/Vantagens"
import Depoimentos from "@/components/shared/Depoimentos"
import Price from "@/components/shared/Price"
import Perguntas from "@/components/shared/Perguntas"
import Footer from "@/components/shared/Footer"

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <main className="w-full min-h-screen bg-[#0D0D0D]">
        <Banner />
        <AssinaturaAnual />
        <Vantagens />
        <Depoimentos />
        <Price />
        <Perguntas />
      </main>
      <Footer />
    </>
  )
}
