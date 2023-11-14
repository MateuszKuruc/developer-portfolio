/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AtsChallenges = () => {
  return (
    <>
      <div className="padding-container regular-18">
        <h2 className="bold-32-tight py-4 dark:text-orange-500">Main Challenges</h2>
        <p>
          The ATS project is quite extensive so, as an unexperienced developer,
          I faced plenty of challenges which pushed me in the right direction
          when it comes to further learning. To build the project in the way I
          imagined, I first needed to get solid grasp on React for state
          management, learn enough about backend to implement token-based
          authentication and handle requests, then add non-relational MongoDB
          database to the mix and learn about schemas.
        </p>
        <p className="py-4">
          To sprinkle some extra flavour, I decided to implement AWS cloud for
          file management, which was completely out of scope for me before the
          project. To finish the app, I put my responsive design knowledge to
          test, and it was especially tricky because mobile apps usually aren't
          focused on displaying data, but I found some solutions to this.
        </p>
        {/* Challenge 1 */}
        <h3 className="bold-24 py-4 dark:text-orange-500">1. State management</h3>
        <p>
          Of course, I wanted to make all data in the app easily editable. This
          was a demanding task, as there are a few different app sections where
          separate parts of candidates' profiles can be updated. For example,
          when the candidate profile is initially created it only includes basic
          details, but at a later stage the user can provide additional data
          (e.g. extended feedback) or update the data that already exists.
        </p>
        <p className="py-4">All the fields need to present options to:</p>
        <ul className="list-disc p-4">
          <li>edit existing data and save it</li>
          <li>start editing the data, but cancel and restore previous data</li>
          <li>
            upload or delete file on candidate's profile and refresh the state
          </li>
        </ul>
        To make these actions possible, I needed to set up{" "}
        <strong>Redux store</strong>, which let me take control of the state
        management across the components that my application consists of.
        Additionally, I needed to handle request to the backend server (built in
        NodeJS) which then interacted with non-relational database (MongoDB) to
        retrieve, edit or save data accordingly when the user performed actions
        on client-side.
        {/* Challenge 2 */}
        <div className="flex flex-col md:flex-row md:justify-around py-4">
          <Image
            src="/project1_mobile_3.png"
            alt="mobile screen"
            width={300}
            height={300}
            className="self-center"
          />
          <div className="w-[50%]">
            <h3 className="bold-24 py-4 dark:text-orange-500">
              2. File upload, download and delete
            </h3>
            Possibly the toughest situation for me was introducing options for
            working on files in each candidate's profile. I decided to make use
            of <strong>AWS</strong> for a few reasons:
            <ul className="list-disc p-4">
              <li>
                I wanted to gain practical experience with cloud solutions
              </li>
              <li>Knowledge about AWS is very in-demand in current market</li>
              <li>It is free if you do not exceed storage limits</li>
            </ul>
            <p>
              Ultimately, I went with <strong>AWS S3</strong> and managed to
              integrate functionalities for instant uploading, downloading and
              deleting pdf and doc files for each profile. On backend side I
              used <strong>Multer</strong> library to handle files sent from
              client side and upload them to my <strong>AWS S3 storage</strong>.
            </p>
            <p className="pt-4">
              On the frontend side, I restricted users to only upload pdf or doc
              files, prepared requests for all actions (upload/download/delete)
              and set up state management to instantly reflect changes to
              candidate's profile.
            </p>
            {/* Challenge 3 */}
            <h3 className="bold-24 py-4 dark:text-orange-500">
              3. Project structure and components reusability
            </h3>
            <p>
              Since this is by far the biggest project I worked on, I had to
              learn how to manage project folders, files and components so that
              updates can be made intuitively and the{" "}
              <strong>components are as reusable as possible</strong>. I tried
              to incorporate best practises when it comes to folder structure on
              both backend and frontend side and use universally accepted naming
              conventions for clarity.
            </p>
            <p className="pt-4">
              Moreover, I studied which design patterns I should follow when
              writing my React components, so I can <strong>reuse</strong> them
              throughout my application and{" "}
              <strong>avoid code duplication</strong>. I am especially proud of
              this part, as some of my React components were responsible for
              rendering <strong>multiple different subpages </strong>
              depending on the data passed to them - this really made me
              understand biggest strength of React.
            </p>
          </div>
        </div>
        {/* Challenge 4 */}
        <h3 className="bold-24 py-4 dark:text-orange-500">4. Responsive design and styling</h3>
        My goal was to strike a balance between a <em>
          nice looking app
        </em> and <em>functional, easy to use app</em>. This was especially
        difficult because the ATS app uses tables, forms and text fields
        everywhere, and they are not the easiest to style for mobile phone use.
        I decided to introduce additional switching of display mode in a few
        tabs to make the tables easier to display on the smaller, mobile screen.
        <p className="py-4">
          As my styling tools, I chose the combination of{" "}
          <strong>Material UI and Styled Components</strong>. While Material UI
          gives some guidance in terms of theme, styling and general design,
          Styled components make everything easily adjustable on component by
          component basis. All in all, I am happy with the final result and how
          the app looks and works across all screen sizes. It can be comfortably
          used on huge monitors and mobile phones alike.
        </p>
        <div className="flex justify-around">
          <Image
            src="/project1_desktop_2.png"
            width={1000}
            height={800}
            alt="project screen"
          />
          <Image
            src="/project1_mobile_4.png"
            width={300}
            height={300}
            alt="mobile screen"
          />
        </div>
      </div>
    </>
  );
};

export default AtsChallenges;
