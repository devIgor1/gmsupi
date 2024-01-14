import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"

export default function AulasAoVivo() {
  return (
    <>
      <nav>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </nav>
    </>
  )
}
