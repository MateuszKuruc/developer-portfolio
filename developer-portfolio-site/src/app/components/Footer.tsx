const Footer = () => {
  return (
    <section className="content-container">
      <div>
        <h4 className="bold-18">Contact</h4>
        <p className="reguar-18">
          Email:{" "}
          <span className="contact-details contact-email">
            <a href={`mailto:${process.env.CONTACT_EMAIL}`}>
              {process.env.CONTACT_EMAIL}
            </a>
          </span>
        </p>
        <p className="regular-18">
          Phone:{" "}
          <span className="contact-details">{process.env.CONTACT_NUMBER}</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
