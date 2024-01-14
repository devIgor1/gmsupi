import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import MetodoSupi from "./pages/metodosupi"
import MetodoJulia from "./pages/metodojulia"
import AulasAoVivo from "./pages/aulasaovivo"
import CursosMensais from "./pages/cursosmensais"

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
    path: "/aulas-ao-vivo",
    element: <AulasAoVivo />,
  },
  {
    path: "/cursos-mensais",
    element: <CursosMensais />,
  },
])

export { router }
