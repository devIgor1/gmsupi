import { FaHome } from "react-icons/fa"
import { FaChessKing } from "react-icons/fa"
import { GiChessQueen } from "react-icons/gi"
import { RiLiveFill } from "react-icons/ri"
import { IoBookSharp } from "react-icons/io5"

export const navLinks = [
  {
    label: "Inicio",
    icon: FaHome,
    route: "/",
  },
  {
    label: "Método GM Supi",
    icon: FaChessKing,
    route: "/metodosupi",
  },
  {
    label: "Método MF Julia 2.0",
    icon: GiChessQueen,
    route: "/metodojulia",
  },
  {
    label: "Cursos Mensais",
    icon: IoBookSharp,
    route: "/cursos-mensais",
  },
]
