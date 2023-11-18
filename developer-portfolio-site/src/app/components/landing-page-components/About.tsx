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
                Junior{" "}
                <span className="text-orange-500 inline-flex flex-col h-[calc(40px*1.2)] overflow-hidden drop-shadow-xl border-b-2 border-orange-500">
                  <ul className=" animate-text-slide-3 text-center leading-[120%]">
                    <li>Frontend</li>
                    <li>JavaScript</li>
                    <li>Fullstack</li>
                    <li aria-hidden="true">Frontend</li>
                  </ul>
                </span>{" "}
                Developer
              </h2>

              {/* <p className="regular-18 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pellentesque justo magna, non fermentum quam fermentum sit amet.
                Fusce sit amet scelerisque lorem. Nullam vel euismod mi, vitae
                ultricies turpis. Integer vitae tortor felis. Aliquam nec velit
                vel ante maximus rhoncus. Fusce orci sem, hendrerit nec aliquam
                ac, mattis quis augue.
              </p> */}
              <div className="regular-18 leading-8">
                {/* Hi there!<br></br> */}
                <p className="pt-4">
                  I'm Mateusz - a former English teacher passionate about
                  continuous learning. A few years ago I transitioned into
                  international corporate world to work in people-oriented
                  roles. Ever since starting as IT recruiter, my aim was to stay
                  in the industry and grow with it. Now I am writing my own
                  fullstack apps and don't want to stop there!
                </p>
                <p className="pt-4">
                  I live in Katowice and am currently looking for a company that
                  will let me use JavaScript to contribute to the business growth!
                </p>
                {/* I have background in English teaching and am passionate about continuous learning  */}
                {/* Self-driven learner with background in English teaching and */}
                {/* Got my head stuck in tech ever since seeing experiencing
                it from the IT recruiter position. A year later, I write
                my own fullstack apps and don't want to stop there! */}
                {/* I got interested in programming when I started as IT recruiter and now I write my own apps */}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-left pt-12">
            <a target="_blank" href={process.env.GITHUB_LINK}>
              <button className="btn-about">
                <p className="bold-18">Github</p>
                <BsGithub size={30} />
              </button>
            </a>

            <a target="_blank" href={process.env.LINKEDIN_LINK}>
              <button className="btn-about">
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
            className="rounded-xl shadow-image dark:shadow-imageDark"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
