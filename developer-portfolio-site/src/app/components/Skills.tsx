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
      className="bg-white flex flex-col items-center dark:bg-blue-950"
    >
      <h2 className="bold-40 content-container">Skills</h2>

      <div className="w-auto padding-container border-2 text-center flex flex-col items-center py-6">
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

        <ul className="hidden gap-8 sm:grid sm:grid-cols-6 ">
          {FRONTEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-start gap-2"
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

      <div className="w-full padding-container">
        <h3 className="bold-32 py-12 text-orange-700">Backend</h3>
        <ul className="gap-8 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {BACKEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-end gap-2"
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={50}
                height={50}
                className="rounded-xl"
              />
              <p className="regular-18">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full padding-container">
        <h3 className="bold-32  py-12 text-orange-700">More tools</h3>
        <ul className="gap-8 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {OTHER_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-end gap-2 "
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={75}
                height={75}
                className="rounded-xl"
              />
              <p className="regular-18">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
