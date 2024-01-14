import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-orange-100 to-orange-200">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </main>
  )
}
