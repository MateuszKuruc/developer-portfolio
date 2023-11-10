import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="content-container dark:bg-gray-950">
      <div className="flex flex-col padding-container md:flex-row items-center justify-around">
        <div className="pt-6 md:pt-0 max-w-[400px]">
          <h2 className="bold-32 text-orange-500">
            Want to get in touch? Awesome! Write an e-mail, use the contact form
            or give me a call.
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
