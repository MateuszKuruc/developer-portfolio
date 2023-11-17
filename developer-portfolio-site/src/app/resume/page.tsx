import React from "react";
import Link from "next/link";

const Resume = () => {
  return (
    <section className="content-container">
      <div>
        <a href="Kino.pdf" download="Kino.pdf">
          <button className="btn-submit my-10">Download resume</button>
        </a>
        <iframe src="/Kino.pdf" width="1000px" height="1000px"></iframe>
      </div>
    </section>
  );
};

export default Resume;
