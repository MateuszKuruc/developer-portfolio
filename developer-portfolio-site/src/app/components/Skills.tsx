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

      <h3 className="bold-20">Frontend</h3>
      <div className="w-full padding-container border-2 border-blue-400">
     
        </ul>
      </div>
    </section>
  );
};

export default Skills;
