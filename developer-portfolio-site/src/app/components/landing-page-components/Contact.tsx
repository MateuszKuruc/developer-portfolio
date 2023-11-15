import React from "react";
import Form from "./Form";
import Reveal from "../animation-components/Reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="content-container dark:bg-gray-950 rounded-lg mb-20 py-8 border-t-2 border-b-2"
    >
      <div className="flex flex-col padding-container md:flex-row items-center justify-around">
        <div className="pt-6 md:pt-0 max-w-[400px]">
          <Reveal>
            <h2 className="bold-32 text-orange-500">
              Want to get in touch? Awesome! Write an e-mail, use the contact
              form or give me a call.
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div>
            <Form />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
