import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import MetodoSupi from "./pages/metodosupi"
import MetodoJulia from "./pages/metodojulia"
import CursosMensais from "./pages/cursosmensais"
import SobreSupi from "./components/shared/SobreSupi"
import SobreJulia from "./components/shared/SobreJulia"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/metodosupi",
    element: <MetodoSupi />,
  },
  {
    path: "/metodojulia",
    element: <MetodoJulia />,
  },
  {
    path: "/cursos-mensais",
    element: <CursosMensais />,
  },
  {
    path: "/sobre-supi",
    element: <SobreSupi />,
  },
  {
    path: "/sobre-julia",
    element: <SobreJulia />,
  },
])

export { router }
