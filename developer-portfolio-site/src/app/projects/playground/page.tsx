import React from "react";
import Image from "next/image";
import { SPAGHETTI_PROJECTS } from "@/app/constants/textConstants";

const Playground = () => {
  return (
    <section>
      <h2 className="bold-40">Playground</h2>
      <div className="flex flex-col items-center">
        <h3 className="bold-32-tight">Spaghetti code section</h3>
        <p>
          These are some smaller projects that I worked on when getting to know
          JavaScript. I did not update them, so they represent my level of
          knowledge at the beginning of the coding journey.
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
