import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-white flex flex-col items-center dark:bg-blue-950">
      <h2 className="bold-40 content-container">Skills</h2>

      <h3 className="bold-20">Frontend</h3>
      <div className="w-full padding-container border-2 border-blue-400">
        <ul className="gap-8 grid grid-cols-5">
          <li>
            <Image
              src="/javascript-original.svg"
              width={70}
              height={70}
              alt="javascript icon"
              className="rounded-2xl text-white bg-white"
              color="black"
            />
            JavaScript
          </li>
          <li>
            <Image
              src="/react-original.svg"
              width={70}
              height={70}
              alt="react icon"
              className="rounded-2xl"
            />
            React
          </li>
          <li>
            <Image
              src="/nextjs-original.svg"
              width={70}
              height={70}
              alt="nextjs icon"
              className="rounded-2xl"
            />
            NextJs
          </li>
          <li> <Image
                src="/html5-original.svg"
                width={70}
                height={70}
                alt="react icon"
                className="rounded-2xl"
              />HTML</li>
          <li>
          <Image
                src="/css3-original.svg"
                width={70}
                height={70}
                alt="react icon"
                className="rounded-2xl"
              />
              CSS
          </li>
          <li></li>
        </ul>
      </div>




      <h3 className="bold-20">Backend</h3>
      <div className="w-full padding-container">
        <ul className="flex gap-8">
          <li>
            <Image
              src="/nodejs-original.svg"
              width={70}
              height={70}
              alt="javascript icon"
              className="rounded-2xl"
            />
            NodeJS
          </li>
          <li>
            <Image
              src="/react-original.svg"
              width={70}
              height={70}
              alt="react icon"
              className="rounded-2xl"
            />
            React
          </li>
          <li>
            <Image
              src="/nextjs-original.svg"
              width={70}
              height={70}
              alt="nextjs icon"
              className="rounded-2xl"
            />
            NextJs
          </li>
          <li> <Image
                src="/html5-original.svg"
                width={70}
                height={70}
                alt="react icon"
                className="rounded-2xl"
              />HTML</li>
          <li>
          <Image
                src="/css3-original.svg"
                width={70}
                height={70}
                alt="react icon"
                className="rounded-2xl"
              />
              CSS
          </li>
          <li></li>
        </ul>
      </div>
      
    </section>
  );
};

export default Skills;
