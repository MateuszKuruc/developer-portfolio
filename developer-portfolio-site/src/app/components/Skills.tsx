import Image from "next/image";
import React from "react";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  OTHER_SKILLS,
} from "../constants/textConstants";

const Skills = () => {
  return (
    <section id="skills" className="bg-white flex flex-col">
      <h2 className="bold-40 content-container mb-6">Skills</h2>

      <div className="padding-container border-t-2 border-b-2 text-center flex flex-row items-center justify-center py-6">
        <h3 className="bold-32 pb-6 text-orange-700">Frontend</h3>

        {/* Mobile version */}
        <ul className="gap-8 grid grid-cols-4 sm:hidden">
          {FRONTEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col lg:flex-row items-center justify-start lg:gap-2 "
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={40}
                height={40}
                className="rounded-xl "
              />

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>

        {/* Desktop version */}

        <ul className="hidden sm:grid sm:grid-cols-6 gap-8 w-[1200px] self-center">
          {FRONTEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col justify-end items-center gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={50}
                height={40}
                className="rounded-xl "
              />

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding-container border-b-2 text-center flex flex-row items-center justify-center py-6">
        <h3 className="bold-32 pb-6 text-orange-700">Backend</h3>

        {/* Mobile version */}
        <ul className="gap-8 grid grid-cols-4 sm:hidden">
          {BACKEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col lg:flex-row items-center justify-start lg:gap-2 "
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={40}
                height={40}
                className="rounded-xl "
              />

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>

        {/* Desktop version */}

        <ul className="hidden sm:grid sm:grid-cols-6 gap-8 w-[1200px] self-center">
          {BACKEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col justify-end items-center gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={50}
                height={50}
                className="rounded-xl "
              />

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding-container border-b-2 text-center flex flex-row items-center justify-center py-6">
        <h3 className="bold-32 text-orange-700">Other tools</h3>

        {/* Mobile version */}
        <ul className="gap-8 grid grid-cols-4 sm:hidden">
          {OTHER_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col lg:flex-row items-center justify-start lg:gap-2 "
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={40}
                height={40}
                className="rounded-xl "
              />

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>

        {/* Desktop version */}

        <ul className="hidden sm:grid sm:grid-cols-6 gap-8 w-[1200px] self-center">
          {OTHER_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col justify-end items-center gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={50}
                height={50}
                className="rounded-xl "
              />

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
