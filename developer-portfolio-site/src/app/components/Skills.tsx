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

      <div className="w-full padding-container">
        <h3 className="bold-32 text-center py-4 text-orange-500">Frontend</h3>
        <ul className="gap-8 grid grid-cols-3 lg:grid-cols-6">
          {FRONTEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-end"
            >
              <Image src={skill.src} alt={skill.label} width={75} height={75} />
              <p className="regular-18">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full padding-container">
        <h3 className="bold-32 text-center py-4 text-orange-500">Backend</h3>
        <ul className="gap-8 grid grid-cols-3 lg:grid-cols-6">
          {BACKEND_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-end"
            >
              <Image src={skill.src} alt={skill.label} width={75} height={75} />
              <p className="regular-18">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full padding-container">
        <h3 className="bold-32 text-center py-4 text-orange-500">More</h3>
        <ul className="gap-8 grid grid-cols-3 lg:grid-cols-6">
          {OTHER_SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-end"
            >
              <Image src={skill.src} alt={skill.label} width={75} height={75} />
              <p className="regular-18">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
