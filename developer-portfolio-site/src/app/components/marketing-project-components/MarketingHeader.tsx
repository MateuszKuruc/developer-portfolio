import Image from "next/image";
import Reveal from "../animation-components/Reveal";

const MarketingHeader = () => {
  return (
    <>
      <>
        <div className="padding-container regular-18 flex flex-col md:flex-row justify-around">
          <div className="md:w-[50%]">
            <h2 className="bold-40 dark:text-orange-500 text-center md:text-left">
              Marketing website
            </h2>
            <p className="regular-18 py-8">
              This is an application for commercial use, written for a social
              media ads specialist. The website serves as a portfolio and
              focuses on displaying details about clients, case studies and
              experience.
            </p>
            <div className="flex flex-col md:flex-row justify-between">
              <Reveal>
                <div>
                  <h3 className="uppercase bold-20 pb-4">Stack</h3>
                  <ul className="gap-4 regular-18 grid grid-cols-2 dark:text-orange-500">
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind</li>
                    <li>Formik</li>
                    <li>Yup</li>
                    <li>Framer Motion</li>
                    <li>Nodemailer</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal>
                <div className="py-6 md:py-0">
                  <h3 className="uppercase bold-20">Live</h3>
                  <a target="_blank" href="https://www.reklamyfacebook.pl/">
                    <p className="bold-20 text-orange-500 hover:text-orange-700">
                      View site
                    </p>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="md:w-[50%] flex justify-center">
            <Image
              src="/project1_mobile_2.png"
              alt="ats app desktop screen"
              width={300}
              height={300}
            />
          </div>
        </div>
      </>
    </>
  );
};

export default MarketingHeader;
