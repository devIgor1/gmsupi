import { navLinks } from "@/constants"
import Logo from "./Logo"
import { Separator } from "../ui/separator"

const NavItems = () => {
  return (
    <>
      <Logo />
      <Separator className="w-full my-2 bg-zinc-700 p-[1px]" />
      <ul className="flex w-full flex-col items-center gap-9 font-lora font-bold text-xl text-[#7B4610] mt-5">
        {navLinks.map((link) => (
          <li key={link.route} className=" flex-center whitespace-nowrap">
            <a
              href={link.route}
              className="flex-center gap-2 hover:text-white duration-300"
            >
              {link.label} {link.icon()}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavItems
