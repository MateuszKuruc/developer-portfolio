import React from "react";
import Image from "next/image";
import { SPAGHETTI_PROJECTS } from "@/app/constants/textConstants";

const Playground = () => {
  return (
    <section className="content-container">
      <div className="flex items-center justify-around py-12">
        <h2 className="bold-40 ">Playground</h2>
        <Image
          src="/githubInfo.png"
          width={800}
          height={600}
          alt="github"
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h3 className="bold-32-tight">Spaghetti code section</h3>
        <p className="max-w-[800px] regular-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          congue pharetra ex id accumsan. Curabitur vel magna in nulla tempor
          pharetra. Nam cursus, quam nec volutpat congue, velit tortor pharetra
          quam, eu porttitor orci urna sit amet orci. Fusce auctor neque lectus,
          quis imperdiet erat dictum vel.
        </p>

        <div className="grid grid-cols-3 padding-container">
          {SPAGHETTI_PROJECTS.map((project) => (
            <div
              key={project.name}
              className="p-8 bg-white mx-10 my-4 border-4 rounded-lg"
            >
              <Image
                src={project.src}
                width={500}
                height={500}
                alt={project.alt}
                // className="border-2"
              />
              <div className="flex flex-col items-center justify-center max-w-[500px] border-2 rounded-lg p-4 bg-orange-500">
                <h3 className="bold-24">{project.name}</h3>
                <p className="regular-18">{project.stack}</p>
                <p className="regular-20">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* projects: patientor? phonebook? blog app? weather app? todo-list? restaurant page? calculator? library? tic tac toe? admin-dashboard? rock-paper-scissors?*/}
      </div>
    </section>
  );
};

export default Playground;
