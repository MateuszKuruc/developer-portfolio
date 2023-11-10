import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="content-container">
      <div className="flex items-center justify-around py-40">
        <div className="max-w-[600px]">
          <h2 className="bold-40 leading-[150%]">Mateusz Kuruc</h2>
          <h2 className="bold-40 leading-[150%]">Junior JavaScript Developer</h2>
          <p className="regular-18 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque justo magna, non fermentum quam fermentum sit amet.
            Fusce sit amet scelerisque lorem. Nullam vel euismod mi, vitae
            ultricies turpis. Integer vitae tortor felis. Aliquam nec velit vel
            ante maximus rhoncus. Fusce orci sem, hendrerit nec aliquam ac,
            mattis quis augue.
          </p>
        </div>
        <div>
          <Image
            src="/mateusz_kuruc.jpeg"
            alt="author photo"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
