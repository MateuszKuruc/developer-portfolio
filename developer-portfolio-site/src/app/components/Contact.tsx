import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="content-container">
      <div className="flex padding-container items-center justify-around">
        <div className="max-w-[400px]">
          <h2 className="regular-24 text-orange-500">
            Want to get in touch? Awesome! Write an e-mail, use the contact form
            or give me a call
          </h2>
        </div>

        <div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
