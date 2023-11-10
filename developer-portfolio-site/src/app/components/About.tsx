import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";

const About = () => {
  return (
    <section className="content-container">
      {/* <div className="padding-container flex flex-col items-start ml-0"> */}
        <div className="flex flex-col xl:flex-row items-center justify-around py-10 sm:py-20 2xl:py-40 gap-10">
          <div className="3xl:max-w-[800px] sm:max-w-[600px]">
            <h2 className="bold-40 leading-[120%]">Mateusz Kuruc</h2>
            <h2 className="bold-40 leading-[120%] border-b-8 rounded-md border-orange-500 mb-6 pb-2">
              Junior JavaScript Developer
            </h2>
            <p className="regular-18 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pellentesque justo magna, non fermentum quam fermentum sit amet.
              Fusce sit amet scelerisque lorem. Nullam vel euismod mi, vitae
              ultricies turpis. Integer vitae tortor felis. Aliquam nec velit
              vel ante maximus rhoncus. Fusce orci sem, hendrerit nec aliquam
              ac, mattis quis augue.
            </p>
          </div>
          <div>
            <Image
              src="/mateusz_kuruc.jpeg"
              alt="author photo"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* <div>
          <Link href="#skills">
            <div className="flex items-center justify-center gap-2">
              <p>See how I build my stuff</p>
              <AiOutlineArrowDown size={30} />
            </div>
          </Link>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default About;
