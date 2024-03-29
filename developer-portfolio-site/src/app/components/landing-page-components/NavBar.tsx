"use client";

import Link from "next/link";
import { NAV_LINKS } from "../../constants/textConstants";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { IoHome } from "react-icons/io5";

const NavBar = () => {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const { theme, setTheme } = useTheme();

  const isHomePage = () => {
    return pathname === "/";
  };

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    let isMobile = null;
    typeof window !== "undefined"
      ? (isMobile = window.innerWidth <= 768)
      : null;

    if (isMobile) {
      if (scrollY < 2200) {
        setActiveLink("about");
      } else if (scrollY < 5600) {
        setActiveLink("projects");
      } else if (scrollY > 5600) {
        setActiveLink("contact");
      }
    }

    if (!isMobile) {
      if (scrollY < 1500) {
        setActiveLink("about");
      } else if (scrollY < 3000) {
        setActiveLink("projects");
      } else if (scrollY > 3000) {
        setActiveLink("contact");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full shadow-xl h-[100px] bg-orange-100 dark:bg-gray-950 rounded-lg sticky top-0 opacity-95 border-b-3 border-orange-700 dark:border-orange-500 z-30">
      {/* Desktop Menu */}
      <div className="flex items-center justify-between h-full px-12 w-full">
        <Link href="/" aria-label="go to home page">
          <IoHome
            size={30}
            className="cursor-pointer hover:text-orange-500 ease-in-out duration-300"
          />
        </Link>

        {isHomePage() && (
          <div>
            <ul className="gap-4 hidden sm:flex">
              {NAV_LINKS.map((link) => (
                <li className="nav-links-desktop" key={link.key}>
                  <ScrollLink
                    to={link.key}
                    href={link.href}
                    spy={true}
                    smooth={true}
                    offset={-103}
                    duration={700}
                    className={`${
                      activeLink === link.key ? "active-link" : ""
                    }`}
                    onClick={() => setActiveLink(link.key)}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
              <li className="nav-links-desktop">
                <Link href="/resume">Resume</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden sm:flex">
          {theme === "dark" ? (
            <MdDarkMode
              size={30}
              onClick={setLightTheme}
              className="hover:text-orange-500 ease-in-out duration-300"
            />
          ) : (
            <MdLightMode
              size={30}
              onClick={setDarkTheme}
              className="hover:text-orange-500 ease-in-out duration-300"
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden cursor-pointer">
          <RiMenu3Fill
            onClick={() => setOpenMenu(!openMenu)}
            size={40}
            className=" text-orange-500 hover:text-orange-700 ease-in-out duration-300"
          />
        </div>
      </div>

      <div
        className={
          openMenu
            ? "z-30 fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-orange-500 dark:bg-orange-700 p-10 ease-in-out duration-1000"
            : "z-30 fixed top-0 w-[75%] left-[-100%] p-10 h-screen ease-in-out duration-1000"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div className="flex justify-between w-full mb-8 ">
            {theme === "dark" ? (
              <MdDarkMode
                size={30}
                onClick={setLightTheme}
                className="cursor-pointer hover:text-black ease-in-out duration-300"
              />
            ) : (
              <MdLightMode
                size={30}
                onClick={setDarkTheme}
                className="text-white cursor-pointer hover:text-black ease-in-out duration-300"
              />
            )}

            <RiCloseFill
              onClick={() => setOpenMenu(false)}
              className="h-8 w-8 text-white hover:text-black ease-in-out duration-300 cursor-pointer"
            />
          </div>
        </div>
        {/* Mobile Menu Links */}
        <div className="flex flex-col">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li
                onClick={() => setOpenMenu(false)}
                className="nav-links-mobile"
                key={link.key}
              >
                {isHomePage() ? (
                  <ScrollLink
                    to={link.key}
                    href={link.href}
                    spy={true}
                    smooth={true}
                    offset={-103}
                    duration={700}
                    className={`${
                      activeLink === link.key && isHomePage()
                        ? "bold-24 text-gray-900"
                        : ""
                    }`}
                    onClick={() => setOpenMenu(false)}
                  >
                    <p className="bold-24">{link.label}</p>
                  </ScrollLink>
                ) : (
                  <Link
                    href={`${isHomePage() ? link.href : `/${link.href}`}`}
                    className={`${
                      activeLink === link.key && isHomePage()
                        ? "bold-24 text-gray-900"
                        : ""
                    }`}
                    onClick={() => setOpenMenu(false)}
                  >
                    <p className="bold-24">{link.label}</p>
                  </Link>
                )}
              </li>
            ))}
            <li className="nav-links-mobile">
              <Link
                href="/resume"
                onClick={() => setOpenMenu(false)}
                rel="noopener noreferrer"
              >
                <p className="bold-24">Resume</p>
              </Link>
            </li>
          </ul>
        </div>
        {/* Social media links */}

        <div className="flex flex-row justify-around items-center mt-10">
          <a
            target="_blank"
            href="https://github.com/MateuszKuruc"
            rel="noopener noreferrer"
            aria-label="Visit my Github profile"
          >
            <BsGithub
              size={30}
              className="text-white hover:text-black cursor-pointer ease-in-out duration-300"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mateuszkuruc/"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <BsLinkedin
              size={30}
              className="text-white hover:text-black cursor-pointer ease-in-out duration-300"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
