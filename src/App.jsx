import Header from "./components/shared/Header"
import MobileNav from "./components/shared/MobileNav"

function App() {
  return (
    <main className="w-full min-h-screen bg-[#EED6B5]">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </main>
  )
}

export default App
