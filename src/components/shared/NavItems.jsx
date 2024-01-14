import { navLinks } from "@/constants"
import Logo from "./Logo"

const NavItems = () => {
  return (
    <>
      <Logo />
      <ul className="flex w-full flex-col items-start gap-5 font-lora text-2xl text-zinc-800">
        {navLinks.map((link) => (
          <li key={link.route} className=" flex-center whitespace-nowrap">
            <a href={link.route} l>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavItems
