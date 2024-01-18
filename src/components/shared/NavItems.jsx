import Logo from "./Logo"
import { Separator } from "../ui/separator"
import { navLinks } from "@/constants"

const NavItems = () => {
  return (
    <>
      <Logo />
      <Separator className="w-full my-2 bg-[#F2EFDF] p-[1px]" />
      <ul className="flex w-full flex-col items-center gap-9 font-dmSerif font-bold text-[#F2EFDF] text-lg mt-10">
        {navLinks.map((link) => (
          <li key={link.route} className=" flex-center whitespace-nowrap">
            <a
              href={link.route}
              className="flex-center gap-2 hover:underline duration-300"
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
