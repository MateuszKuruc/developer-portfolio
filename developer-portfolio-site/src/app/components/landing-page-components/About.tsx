/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Reveal from "../animation-components/Reveal";

const About = () => {
  return (
    <section id="about" className="content-container ">
      <div className="padding-container flex flex-col xl:flex-row items-center justify-around py-10 sm:py-20 2xl:py-40 gap-10">
        <div className="3xl:max-w-[800px] sm:max-w-[600px]">
          <Reveal>
            <div>
              <h2 className="bold-40 leading-[120%] text-center md:text-left">
                Mateusz Kuruc
              </h2>

              <h2 className="bold-40 text-center md:text-left">
                {/* <h2 className="inline-flex flex-col h-[calc(40px*1.2)] overflow-hidden drop-shadow-xl bold-40 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700"> */}
                Junior{" "}
                <span className="inline-flex flex-col h-[calc(40px*1.2)] overflow-hidden bold-40 border-b-2 border-orange-700">
                  {/* <div className="inline-flex flex-col h-[calc(40px*1.2)] overflow-hidden drop-shadow-xl bold-40 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700"> */}
                  <ul className=" animate-text-slide-3 text-center leading-[120%] ">
                    <li>
                      <h2 className="bold-40 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
                        Frontend
                      </h2>
                    </li>
                    <li>
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
                        JavaScript
                      </h2>
                    </li>
                    <li>
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
                        Fullstack
                      </h2>
                    </li>
                    <li aria-hidden="true">
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
                        Frontend
                      </h2>
                    </li>
                  </ul>

                  {/* <div className="absolute inset-0 bg-orange-500 opacity-10 z-10 rounded-lg"></div> */}
                  {/* </div>{" "} */}
                </span>{" "}
                Developer
              </h2>
              {/* <div className="absolute inset-0 bg-orange-400 opacity-10 z-10 rounded-lg"></div> */}

              <div className="regular-18 leading-8">
                <p className="pt-4">
                  I'm Mateusz - a former English teacher passionate about
                  continuous learning. A few years ago, I transitioned into the
                  international corporate world to work in people-oriented
                  roles. Ever since starting as IT recruiter, my aim has been to
                  stay in the industry and grow with it. Now, I am writing my
                  own fullstack apps and{" "}
                  <strong>don't want to stop there!</strong>
                </p>
                <p className="pt-4">
                  I live in Katowice and am currently looking for a company that
                  will let me use JavaScript to contribute to the business
                  growth!
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-left pt-12">
            <a
              target="_blank"
              href={process.env.GITHUB_LINK}
              rel="noopener noreferrer"
              aria-label="Visit my Github profile"
            >
              <button
                className="btn-about"
                // aria-label="Github profile Mateusz Kuruc"
              >
                <p className="bold-18">Github</p>
                <BsGithub size={30} />
              </button>
            </a>

            <a
              target="_blank"
              href={process.env.LINKEDIN_LINK}
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <button
                className="btn-about"
                // aria-label="Linkedin profile Mateusz Kuruc"
              >
                <p className="bold-18">LinkedIn</p>
                <BsLinkedin size={30} />
              </button>
            </a>
          </div>
        </div>
        <div className="shadow-image">
          <Image
            src="/mateusz_kuruc.jpeg"
            alt="author photo"
            width={600}
            height={600}
            priority={true}
            className="rounded-xl shadow-image dark:shadow-imageDark"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
