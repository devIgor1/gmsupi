import Button from "@/components/shared/Button"
import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"
import Banner from "@/components/shared/Banner"
import AssinaturaAnual from "@/components/shared/AssinaturaAnual"
import Vantagens from "@/components/shared/Vantagens"
import Depoimentos from "@/components/shared/Depoimentos"
import Price from "@/components/shared/Price"

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
        <Depoimentos />
        <Price />
      </main>
    </>
  )
}
