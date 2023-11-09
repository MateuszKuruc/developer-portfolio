import Image from "next/image";
import React from "react";

import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  OTHER_SKILLS,
} from "../constants/textConstants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="content-container bg-white flex flex-col dark:bg-gray-950"
    >
      <h2 className="bold-40 content-container mb-6">Skills</h2>

      <div className="padding-container border-t-2 border-b-2 text-center flex flex-col lg:flex-row sm:items-center sm:justify-around py-6">
        <h3 className="bold-32 pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-b from-orange-500 via-pink-500 to-orange-700">
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

              <p className="regular-16 text-center">{skill.name}</p>
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

              <p className="regular-16 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding-container border-b-2 text-center flex flex-col lg:flex-row sm:items-center sm:justify-around py-6">
        <h3 className="bold-32 pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-b from-orange-500 via-pink-500 to-orange-700">
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding-container border-b-2 flex flex-col lg:flex-row sm:items-center sm:justify-around py-6 text-center">
        <h3 className="bold-32 pb-6 mr-6 text-transparent bg-clip-text bg-gradient-to-b from-orange-500 via-pink-500 to-orange-700">
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
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

              <p className="regular-18 text-center">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
