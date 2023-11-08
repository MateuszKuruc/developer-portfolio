"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants/textConstants";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

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

        <div>
          <ul className="gap-4 hidden sm:flex">
            {NAV_LINKS.map((link) => (
              <li className="nav-links-desktop" key={link.key}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex">
          {darkMode ? <MdDarkMode size={30} /> : <MdLightMode size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          //   onClick={() => setOpenMenu(false)}
          className="sm:hidden cursor-pointer"
        >
          <RiMenu3Fill
            onClick={() => setOpenMenu(!openMenu)}
            size={40}
            className=" text-orange-500"
          />
        </div>
      </div>

      <div
        className={
          openMenu
            ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-orange-500 p-10 ease-in-out duration-1000"
            : "fixed top-0 w-[75%] left-[-100%] p-10 h-screen ease-in-out duration-1000"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div className="flex justify-between w-full cursor-pointer mb-8">
            {darkMode ? (
              <MdDarkMode size={30} className="text-white" />
            ) : (
              <div>
                <MdLightMode size={30} className="text-white" />
              </div>
            )}
            <RiCloseFill
              onClick={() => setOpenMenu(false)}
              className="h-8 w-8 text-white"
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
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social media links */}

        <div className="flex flex-row justify-around items-center mt-10">
          <a target="_blank" href={process.env.GITHUB_LINK}>
            <BsGithub
              size={30}
              className="text-white hover:text-black cursor-pointer ease-in-out duration-300"
            />
          </a>
          <a target="_blank" href={process.env.LINKEDIN_LINK}>
            <BsLinkedin
              size={30}
              className="text-white hover:text-black cursor-pointer ease-in-out duration-300"
            />
          </a>
        </div>
        {/* <Image
          src="/logo-placeholder.png"
          alt="logo"
          width={200}
          height={100}
          className="mx-auto"
        /> */}
      </div>
    </nav>
  );
};

export default NavBar;
