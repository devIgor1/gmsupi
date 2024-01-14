import Header from "@/components/shared/Header"
import MobileNav from "@/components/shared/MobileNav"

export default function CursosMensais() {
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
      <main className="min-h-screen w-full bg-gradient-to-b from-orange-100 to-orange-200">
        <h1>Hello Main</h1>
      </main>
    </>
  )
}
