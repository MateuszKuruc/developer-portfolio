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
        <div className="">
          <ul className="gap-4 hidden sm:flex">
            {NAV_LINKS.map((link) => (
              <li className="nav-links-desktop" key={link.key}>
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
      <div className="fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-orange-500 p-10 ease-in-out duration-500">
        <div className="flex w-full items-center justify-end">
          <div className="cursor-pointer">
            <RiCloseFill className="h-8 w-8 text-white" />
          </div>
        </div>
        {/* Mobile Menu Links */}
        <div className="flex flex-col">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li className="nav-links-mobile" key={link.key}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social media links */}
    </nav>
  );
};

export default NavBar;
