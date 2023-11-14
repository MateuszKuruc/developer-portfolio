import Image from "next/image";

const MarketingKeyFeatures = () => {
  return (
    <>
      <div className="padding-container regular-18 py-12">
        <h2 className="bold-32-tight py-4 dark:text-orange-500 text-center md:text-left">
          Project goals
        </h2>
        <p>
          {/* My aim was to build a robust recruitment system, similar to the ones I
          encountered in my work as IT recruiter. I wanted the tool to simplify
          the recruitment process on the recruiter side, conveniently divide
          candidates into categories and ensure that each recruiter only has
          only got access to their own candidates and statistics. */}
          My job was to create graphic design for the website, prepare color
          palette, build the whole application and deploy it.
        </p>
        <p className="bold-20 py-4">Main requirements:</p>
        <ul className="list-disc p-4">
          <li>Website should be stable and fast</li>
          <li>Navigation should be effortless and intuitive</li>
          <li>Focus on mobile design</li>
          <li>
            Smooth animations included after each action, on page change and
            scrolling
          </li>
          <li>Accessibility should be taken into consideration</li>
          <li>Carousel and accordion items used to display key data</li>
          <li>
            Design should be stylish enough for the clients, but not
            overwhelming
          </li>
        </ul>
        <Image
          src="/project1_desktop_3.png"
          width={1200}
          height={800}
          alt="project desktop screen"
          className="py-4 md:p-0"
        />
      </div>
    </>
  );
};

export default MarketingKeyFeatures;
