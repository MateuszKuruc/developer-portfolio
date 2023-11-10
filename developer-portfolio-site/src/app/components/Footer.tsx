import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="content-container">
      <div className="p-8 flex items-center justify-around bg-green-500">
        <div>
          <p className="bold-18">Mateusz Kuruc © 2023</p>
        </div>

        <div>
          <h4 className="bold-18">Contact</h4>
          <p className="regular-18">
            Email:{" "}
            <span className="contact-details contact-email">
              <a href={`mailto:${process.env.CONTACT_EMAIL}`}>
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
        <div>
          <h4 className="bold-18 pb-2">My profiles</h4>
         
<div className="flex gap-4 justify-center">

          <a target="_blank" href={process.env.LINKEDIN_LINK}>
            <BsLinkedin size={30} />
          </a>
          <a target="_blank" href={process.env.GITHUB_LINK}>
            <BsGithub size={30} />
          </a>
          
</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
