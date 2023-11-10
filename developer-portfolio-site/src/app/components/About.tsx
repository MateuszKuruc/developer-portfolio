import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="content-container">
      <div className="flex flex-col xl:flex-row items-center justify-around py-10 sm:py-40 gap-10">
        <div className="max-w-[800px] padding-container">
          <h2 className="bold-40 leading-[120%]">Mateusz Kuruc</h2>
          <h2 className="bold-40 leading-[120%] border-b-8 rounded-md border-orange-500 mb-6 pb-2">Junior JavaScript Developer</h2>
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
