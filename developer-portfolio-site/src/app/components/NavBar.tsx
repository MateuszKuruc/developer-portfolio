import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants/textConstants";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="w-full h024 shadow-xl bg-white">
      {/* Desktop Menu */}
      <div className="flex items-center justify-between h-full px-12 w-full">
        <Link href="/">
          <Image
            src="/logo-placeholder.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="gap-4 hidden sm:flex">
            {NAV_LINKS.map((link) => (
              <li className="nav-links" key={link.key}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="sm:hidden cursor-pointer">
          <RiMenu3Fill className="h-8 w-8 text-orange-500" />
        </div>
      </div>
    

      {/* Social media links */}
    </nav>
  );
};

export default NavBar;
