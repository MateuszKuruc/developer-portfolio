export const NAV_LINKS = [
  //   { href: "/", key: "home", label: "Home" },
  { href: "#about", key: "about", label: "About" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#contact", key: "contact", label: "Contact" },
  // { href: "/resume", key: "resume", label: "Resume" },
];

export const FRONTEND_SKILLS = {
  standard: [
    { src: "/html.svg", name: "HTML", label: "HTML icon" },
    { src: "/css.svg", name: "CSS", label: "CSS icon" },
    { src: "/javascript.svg", name: "JavaScript", label: "JavaScript icon" },
    { src: "/react.svg", name: "React", label: "React icon" },
    { src: "/mui.svg", name: "Material UI", label: "Material UI icon" },
    { src: "/sass.svg", name: "SASS", label: "SASS icon" },
    { src: "/tailwind.svg", name: "Tailwind CSS", label: "Tailwind icon" },
    { src: "/typescript.svg", name: "TypeScript", label: "Typescript icon" },
    { src: "/redux.svg", name: "Redux", label: "Redux icon" },
  ],
  invert: [
    { src: "/nextjs.svg", name: "Next.js", label: "NextJS icon" },
    { src: "/responsive.svg", name: "Responsive design", label: "Mobile icon" },
    {
      src: "/styled-components.svg",
      name: "Styled components",
      label: "styled components icon",
    },
  ],
};

export const BACKEND_SKILLS = {
  standard: [
    { src: "/nodejs.svg", name: "Node.js", label: "NodeJS icon" },
    { src: "/mongodb.svg", name: "MongoDB", label: "MongoDB icon" },
  ],
  invert: [
    { src: "/express.svg", name: "Express", label: "Express icon" },
    { src: "/aws-icon.svg", name: "AWS S3", label: "AWS icon" },
    { src: "/restapi.svg", name: "REST API", label: "REST API icon" },
    { src: "/sql.svg", name: "SQL", label: "SQL icon" },
  ],
};

export const OTHER_SKILLS = {
  standard: [
    { src: "/graphql.svg", name: "GraphQL", label: "Graphql icon" },
    { src: "/jira.svg", name: "Jira", label: "Jira icon" },
    { src: "/git.svg", name: "Git", label: "Git icon" },
    { src: "/jest.svg", name: "jest", label: "jest icon" },
    { src: "/cypress.svg", name: "Cypress", label: "Cypress icon" },
    { src: "/formik.svg", name: "Formik", label: "Formik icon" },
    { src: "/postman.svg", name: "Postman", label: "Postman icon" },
    { src: "/mongoose.svg", name: "Mongoose", label: "Mongoose icon" },
    {
      src: "/framer-motion.svg",
      name: "Framer Motion",
      label: "Framer Motion icon",
    },
    {
      src: "/devtools.svg",
      name: "Chrome DevTools",
      label: "Framer Motion icon",
    },
  ],
  invert: [
    { src: "/github.svg", name: "Github", label: "Github icon" },
    { src: "/apollo.svg", name: "Apollo", label: "Mongoose icon" },
  ],
};

export const SPAGHETTI_PROJECTS = [
  {
    src: "/project1_desktop_1.png",
    name: "Bloglist",
    stack: "React ◆ Redux ◆ Node.js ◆ Express ◆ MongoDB ◆ Material UI ◆ Jest",
    description:
      "Fullstack application with token authorization, where users add info on blogs (author, title and link) and can vote for blogs they like. The app also allows users to leave a comment or see how many blogs were added by other users.",
    alt: "test",
    live: "https://bloglist-frontend-d1wc.onrender.com",
    code: "https://github.com/MateuszKuruc/fullStackOpen-nodeJS",
  },
  {
    src: "/project1_desktop_1.png",
    name: "Phonebook",
    stack: "React ◆ Node.js ◆ Express ◆ MongoDB",
    description:
      "Very simple fullstack app allowing us to add and delete contacts (name and phone number). In this project I was playing around with responsive filtering and basic validation for contact form. I also learned how to deploy such apps to the internet so they are widely available.",
    alt: "test",
    live: "https://github.com/MateuszKuruc/fullStackOpen-nodeJS/tree/main/backend-phonebook",
    code: "https://fullstack-phonebook-7wl2.onrender.com",
  },
  {
    src: "/project1_desktop_2.png",
    name: "To-do list",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "Your classic to-do list app that each new developer writes at some point. At the time it has taken me long hours to figure out how to handle logic for adding and editing single task, incorporate date-fns library and dynamic sorting of tasks. It has been a kind of breakthrough for me in the programming journey. ",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-todo-list/",
    code: "https://github.com/MateuszKuruc/odin-todo-list",
  },
  {
    src: "/project1_desktop_3.png",
    name: "Weather app",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "Another classic - weather app which was a great opportunity for me to use external API for the first time. It taught me a lot about data handling and the ways of formatting and using it to display it to the user in the way I want. Additionally, I learned some basics about designing toggling for websites.",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-weather-app/",
    code: "https://github.com/MateuszKuruc/odin-weather-app",
  },
  {
    src: "/project1_desktop_1.png",
    name: "Admin dashboard",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "This is a project that was amazing training for building a bit more complex website layout. I went for a sidebar menu and a simple display of my other projects in the main app's container. The focus was on UI, so most of the buttons and texts are just mock or placeholders with little logic.",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-admin-dashboard/",
    code: "https://github.com/MateuszKuruc/odin-admin-dashboard",
  },
  {
    src: "/project1_desktop_1.png",
    name: "Restaurant page",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "This simplified landing page for a lovely confectionery is not only my tribute to sweets (which I love with all my heart), but my first attempt at responsive design. I learned how to provide good experience to user on all screen sizes, which was a real milestone for me.",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-restaurant-page/",
    code: "https://github.com/MateuszKuruc/odin-restaurant-page",
  },
  {
    src: "/project1_desktop_1.png",
    name: "Calculator",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "example project, simple sentences, a bit about functionalities and difficulties. Not overly important. Add one more sentence and it really should be enough for this kind of work.",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-calculator/",
    code: "https://github.com/MateuszKuruc/odin-calculator",
  },
  {
    src: "/project1_desktop_1.png",
    name: "Library",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "example project, simple sentences, a bit about functionalities and difficulties. Not overly important. Add one more sentence and it really should be enough for this kind of work.",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-library/",
    code: "https://github.com/MateuszKuruc/odin-library",
  },
  {
    src: "/project1_desktop_1.png",
    name: "Etch a sketch",
    stack: "HTML ◆ CSS ◆ JavaScript",
    description:
      "example project, simple sentences, a bit about functionalities and difficulties. Not overly important. Add one more sentence and it really should be enough for this kind of work.",
    alt: "test",
    live: "https://mateuszkuruc.github.io/odin-etch-a-sketch/",
    code: "https://github.com/MateuszKuruc/odin-etch-a-sketch",
  },
];
