import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  OTHER_SKILLS,
} from "../constants/textConstants";
import Link from "next/link";

const Skills = () => {
  return (
    <section className="content-container bg-white flex flex-col dark:bg-gray-950 my-20 pt-20 rounded-lg border-t-2 border-b-2">
      {/* <h2 className="bold-40 content-container mb-6">Skills</h2> */}
      <Link href="#skills">
        <div className="flex justify-center gap-2 pb-20">
          <p className="bold-20">See how I build my stuff</p>
          <AiOutlineArrowDown size={30} className="animate-bounce" />
        </div>
      </Link>
      <div
        id="skills"
        className="padding-container border-t-2 border-b-2 text-center flex flex-col lg:flex-row sm:items-center sm:justify-around py-6"
      >
        <h3 className="sm:w-[150px] bold-32-tight pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
          Frontend
        </h3>

        {/* Mobile version */}
        <ul className="gap-8 grid grid-cols-4 sm:hidden">
          {FRONTEND_SKILLS.standard.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col lg:flex-row items-center justify-start gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
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
                alt={skill.label}
                width={40}
                height={40}
                className="rounded-lg dark:invert"
              />

              <p className="skills-16 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>

        {/* Desktop version */}

        <ul className="hidden sm:grid sm:grid-cols-6 gap-8 lg:w-[1200px] self-center">
          {FRONTEND_SKILLS.standard.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col justify-end items-center gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
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
                alt={skill.label}
                width={50}
                height={50}
                className="rounded-lg dark:invert"
              />

              <p className="skills-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding-container border-b-2 text-center flex flex-col lg:flex-row sm:items-center sm:justify-around py-6">
        <h3 className="sm:w-[150px] bold-32-tight pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
          Backend
        </h3>

        {/* Mobile version */}
        <ul className="gap-8 grid grid-cols-4 sm:hidden">
          {BACKEND_SKILLS.standard.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col lg:flex-row items-center justify-end gap-2"
            >
              <Image src={skill.src} alt={skill.label} width={40} height={40} />

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
                alt={skill.label}
                width={40}
                height={40}
                className="dark:invert"
              />

              <p className="skills-16 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>

        {/* Desktop version */}

        <ul className="hidden sm:grid sm:grid-cols-6 gap-8 lg:w-[1200px] self-center">
          {BACKEND_SKILLS.standard.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col justify-end items-center gap-2"
            >
              <Image src={skill.src} alt={skill.label} width={50} height={50} />

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
                alt={skill.label}
                width={50}
                height={50}
                className="dark:invert"
              />

              <p className="skills-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding-container flex flex-col lg:flex-row sm:items-center sm:justify-around py-6 text-center">
        <h3 className="sm:w-[150px] bold-32-tight pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
          Other tools
        </h3>

        {/* Mobile version */}
        <ul className="gap-8 grid grid-cols-4 sm:hidden">
          {OTHER_SKILLS.standard.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col lg:flex-row items-center justify-start gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
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
                alt={skill.label}
                width={40}
                height={40}
                className="rounded-lg dark:invert"
              />

              <p className="skills-16 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>

        {/* Desktop version */}

        <ul className="hidden sm:grid sm:grid-cols-6 gap-8 lg:w-[1200px] self-center">
          {OTHER_SKILLS.standard.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col justify-end items-center gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
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
                alt={skill.label}
                width={50}
                height={50}
                className="rounded-lg dark:invert"
              />

              <p className="skills-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
