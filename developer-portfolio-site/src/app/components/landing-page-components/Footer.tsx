import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="border-t-3 bg-orange-100 dark:bg-gray-950 border-orange-700 dark:border-orange-500">
      <div className="gap-4 md:gap-0 p-8 flex flex-col md:flex-row items-center justify-around">
        <div>
          <p className="bold-24 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 drop-shadow-lg">
            Mateusz Kuruc © 2023
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="bold-18">Contact</p>
          <div className="flex md:block flex-col items-center">
            <p className="regular-18">
              Email:{" "}
              <span className="contact-details contact-email">
                <a
                  href={`mailto:${process.env.CONTACT_EMAIL}`}
                  // aria-label="Contact via email"
                >
                  {process.env.CONTACT_EMAIL}
                </a>
              </span>
            </p>
            <p className="regular-18">
              Phone:{" "}
              <span className="contact-details">
                {process.env.CONTACT_NUMBER}
              </span>
            </p>
          </div>
        </div>
        <div>
          <h4 className="bold-18 pb-2">My profiles</h4>

          <div className="flex gap-4 justify-center">
            <a
              target="_blank"
              href={process.env.LINKEDIN_LINK}
              rel="noopener noreferrer"
              aria-label="Linkedin profile Mateusz Kuruc"
            >
              <BsLinkedin
                size={30}
                className="hover:text-orange-500 ease-in-out duration-300"
              />
            </a>
            <a
              target="_blank"
              href={process.env.GITHUB_LINK}
              rel="noopener noreferrer"
              aria-label="Github profile Mateusz Kuruc"
            >
              <BsGithub
                size={30}
                className="hover:text-orange-500 ease-in-out duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
