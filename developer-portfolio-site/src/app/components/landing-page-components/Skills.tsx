import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Reveal from "../animation-components/Reveal";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  OTHER_SKILLS,
} from "../../constants/textConstants";
import Link from "next/link";

const Skills = () => {
  return (
    <section className="content-container bg-white flex flex-col dark:bg-gray-950 my-20 pt-20 rounded-lg border-t-2 border-b-2">
      <div className="self-center">
        <Reveal>
          <Link href="#skills">
            <div
              id="skills"
              className="p-4 flex justify-center items-center gap-4 pb-20"
            >
              <p className="hover:scale-105 ease-out duration-300 bold-24 text-orange-600 hover:text-orange-700">
                See how I build my stuff
              </p>
              <AiOutlineArrowDown size={30} className="animate-bounce" />
            </div>
          </Link>
        </Reveal>
      </div>
      <div className="padding-container border-t-2 border-b-2 text-center flex flex-col 2xl:flex-row sm:items-center sm:justify-around py-2 2xl:py-6">
        <h3 className="sm:w-[150px] bold-32-tight pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
          Frontend
        </h3>

        {/* Mobile version */}
        <Reveal>
          <ul className="gap-8 grid grid-cols-4 sm:hidden">
            {FRONTEND_SKILLS.standard.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col lg:flex-row items-center justify-start gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />

                <p className="skills-16 text-center">{skill.name}</p>
              </li>
            ))}
            {FRONTEND_SKILLS.invert.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col lg:flex-row items-center justify-start gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="rounded-lg dark:invert"
                />

                <p className="skills-16 text-center">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Desktop version */}
        <Reveal>
          <ul className="hidden sm:grid sm:grid-cols-6 gap-2 2xl:gap-8 sm:w-[700px] md:w-[800px] lg:w-[1200px] self-center">
            {FRONTEND_SKILLS.standard.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-end items-center gap-1 2xl:gap-2"
              >
                <Image
                  src={skill.src}
                  // alt={skill.label}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />

                <p className="skills-18 text-center">{skill.name}</p>
              </li>
            ))}
            {FRONTEND_SKILLS.invert.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-end items-center gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="rounded-lg dark:invert"
                />

                <p className="skills-18 text-center">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="padding-container border-b-2 text-center flex flex-col 2xl:flex-row sm:items-center sm:justify-around py-2 2xl:py-6">
        <h3 className="sm:w-[150px] bold-32-tight pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
          Backend
        </h3>

        {/* Mobile version */}
        <Reveal>
          <ul className="gap-8 grid grid-cols-4 sm:hidden">
            {BACKEND_SKILLS.standard.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col lg:flex-row items-center justify-end gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                />

                <p className="skills-16 text-center">{skill.name}</p>
              </li>
            ))}
            {BACKEND_SKILLS.invert.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col lg:flex-row items-center justify-end gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="dark:invert"
                />

                <p className="skills-16 text-center">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Desktop version */}
        <Reveal>
          <ul className="hidden sm:grid sm:grid-cols-6 gap-2 2xl:gap-8 sm:w-[700px] md:w-[800px] lg:w-[1200px] self-center">
            {BACKEND_SKILLS.standard.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-end items-center gap-1 2xl:gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                />

                <p className="skills-18 text-center">{skill.name}</p>
              </li>
            ))}
            {BACKEND_SKILLS.invert.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-end items-center gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="dark:invert"
                />

                <p className="skills-18 text-center">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="padding-container text-center flex flex-col 2xl:flex-row sm:items-center sm:justify-around py-2 2xl:py-6">
        <h3 className="sm:w-[150px] bold-32-tight pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
          Other tools
        </h3>

        {/* Mobile version */}
        <Reveal>
          <ul className="gap-8 grid grid-cols-4 sm:hidden">
            {OTHER_SKILLS.standard.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col lg:flex-row items-center justify-start gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />

                <p className="skills-16 text-center">{skill.name}</p>
              </li>
            ))}
            {OTHER_SKILLS.invert.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col lg:flex-row items-center justify-start gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="rounded-lg dark:invert"
                />

                <p className="skills-16 text-center">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Desktop version */}
        <Reveal>
          <ul className="hidden sm:grid sm:grid-cols-6 gap-2 2xl:gap-8 sm:w-[700px] md:w-[800px] lg:w-[1200px] self-center">
            {OTHER_SKILLS.standard.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-end items-center gap-1 2xl:gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="rounded-lg "
                />

                <p className="skills-18 text-center">{skill.name}</p>
              </li>
            ))}
            {OTHER_SKILLS.invert.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-end items-center gap-2"
              >
                <Image
                  src={skill.src}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="rounded-lg dark:invert"
                />

                <p className="skills-18 text-center">{skill.name}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
