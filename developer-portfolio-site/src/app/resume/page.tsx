import { AiOutlineArrowLeft } from "react-icons/ai";

const Resume = () => {
  return (
    <section className="content-container">
      <div className="padding-container flex flex-col gap-12">
        <h2 className="bold-40 pt-12 text-center md:text-left">Resume</h2>

        <p className="regular-18">
          Please take a look at my resume and feel free to download it, if
          needed!
        </p>
        <a href="/cv.pdf" download="cv.pdf">
          <div className="flex items-end gap-4 justify-center">
            <h3 className="bold-24 hover:scale-105 ease-in-out duration-300 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700">
              Download resume
            </h3>
            <AiOutlineArrowLeft size={30} className="animate-bounce" />
          </div>
        </a>
      </div>
      <div className="flex flex-col items-center py-12">
        <iframe
          className="rounded-lg shadow-image"
          
          src="/cv.pdf"
          width="85%"
          height="1000px"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
