import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="content-container border-t-2 border-b-2 bg-white dark:bg-gray-950 my-20">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="max-w-[400px] md:max-w-[600px] relative">
          <Image
            src="/project1_desktop_1.png"
            alt="ATS project desktop screen"
            width={600}
            height={600}
          />
          <Image
            src="/project1_mobile_1.png"
            alt="ATS project mobile screen"
            width={150}
            height={150}
            className="absolute top-1/3 md:left-3/4 left-3/4 w-[100px] md:w-[150px]"
          />
        </div>
        <div className="padding-container flex flex-col justify-center items-center">
          <h2 className="bold-40 text-center">Applicant Tracking System</h2>
          <p className="regular-16 border-t-2 border-b-2 py-4 max-w-[700px]">
            React ◆ Redux ◆ NodeJS ◆ Express ◆ AWS ◆ MongoDB ◆ Material UI ◆
            Styled components
          </p>

          <div className="max-w-[700px]">
            <p className="regular-18 py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              efficitur ex sit amet sollicitudin porta.
            </p>
            <ul className="list-disc">
              <li>
                Nulla quis ex sed dolor iaculis gravida. Curabitur quis turpis
                diam. Etiam euismod, tellus ut pretium pharetra, sem odio
                rhoncus ante, sit amet condimentum nunc elit id metus.
              </li>
              <li>
                Donec non felis mi. Donec nec nulla vitae lacus efficitur
                lobortis. Cras malesuada vehicula neque, in dictum nulla
                porttitor scelerisque.
              </li>
              <li>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Maecenas vitae lectus quis
                risus ultrices malesuada.
              </li>
              <li>
                Quisque sollicitudin sit amet est et pellentesque. Etiam
                lobortis massa vitae velit commodo, sit amet convallis massa
                commodo.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around">
        <div className="max-w-[400px] md:max-w-[600px] relative">
          <Image
            src="/project2_desktop_1.png"
            alt="marketing portfolio desktop screen"
            width={600}
            height={600}
          />
          <Image
            src="/project2_mobile_1.png"
            alt="marketing portfolio mobile screen"
            width={150}
            height={150}
            className="absolute top-1/3 md:left-3/4 left-3/4 w-[100px] md:w-[150px]"
          />
        </div>
        {/* <div className="padding-container">
          <h2 className="bold-40 text-center">Marketing portfolio website</h2>
          <p className="regular-16 border-t-2 border-b-2 py-4">
            Next.js ◆ TypeScript ◆ Tailwind ◆ Formik ◆ Yup
          </p>
        </div> */}
        <div className="padding-container flex flex-col justify-center items-center">
          <h2 className="bold-40 text-center">Marketing Portfolio website</h2>
          <p className="regular-16 border-t-2 border-b-2 py-4 max-w-[700px]">
            Next.js ◆ TypeScript ◆ Tailwind ◆ Formik ◆ Yup
          </p>

          <div className="max-w-[700px]">
            <p className="regular-18 py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              efficitur ex sit amet sollicitudin porta.
            </p>
            <ul className="list-disc">
              <li>
                Nulla quis ex sed dolor iaculis gravida. Curabitur quis turpis
                diam. Etiam euismod, tellus ut pretium pharetra, sem odio
                rhoncus ante, sit amet condimentum nunc elit id metus.
              </li>
              <li>
                Donec non felis mi. Donec nec nulla vitae lacus efficitur
                lobortis. Cras malesuada vehicula neque, in dictum nulla
                porttitor scelerisque.
              </li>
              <li>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Maecenas vitae lectus quis
                risus ultrices malesuada.
              </li>
              <li>
                Quisque sollicitudin sit amet est et pellentesque. Etiam
                lobortis massa vitae velit commodo, sit amet convallis massa
                commodo.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
