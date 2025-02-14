import Project from "./Project";
import SectionTitles from "./SectionTitles";

const data = [
  {
    id: 1,
    title: "cordemy- E-learning app",
    img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1727717234/pp-test/Beige_Brown_Aesthetic_Save_The_Date_Editable_Mockup_Instagram_Post_cckepc.png",
    img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1727718345/pp-test/Cordemy-test_jj9tml.png",
    description:
      "Discover and explore a wide range of courses with seamless payment processing powered by Stripe integration. Benefit from secure user authentication and authorization using Next-Auth for a smooth and protected experience.",
    tools: ["next.js", "Prisma", "Next-auth", "tailwind-css", "framer-motion"],
    liveLink: "https://cordemy-seven.vercel.app",
    fullstackLink: "https://github.com/muntasir-fahii/cordemy",
  },
  {
    id: 2,
    title: "Escape Getaway",
    img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1727719811/pp-test/escsssa_qe1lie.png",
    img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853285/pp-test/to-do-1_ift3qd.jpg",
    description:
      "A to-do web application built with React.js, JavaScript, and Tailwind CSS is a task management tool that allows users to create, edit, and track their to-do items in an interactive, dynamic user interface. React.js is a JavaScript library for building user interfaces, which provides a way to manage and update the application's state. JavaScript provides the logic for the application's functionality, while Tailwind CSS provides a highly customizable, modern design system for styling the application's layout and visual appearance. With this stack of technologies, developers can create a fast, responsive, and visually appealing to-do web application that can be used on any device.",
    tools: ["react.js", "javascript", "tailwind-css", "css"],
    liveLink: "https://escape-getaway.vercel.app",
    fullstackLink: "https://github.com/muntasir-fahii/escape-getaway",
  },
  {
    id: 3,
    title: "Tech Alpha-An e-commerce webiste",
    img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853303/pp-test/alpha-1_pnv2ih.jpg",
    img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853306/pp-test/alpha-2_c5lg0x.jpg",
    description:
      "An e-commerce web application built with React.js, Redux, Redux Toolkit, JavaScript, and Tailwind CSS offers a powerful solution for online sales. React.js provides a fast and dynamic user interface, while Redux and Redux Toolkit offer centralized state management. JavaScript offers necessary logic for features such as shopping carts and payment systems. Tailwind CSS provides a customizable design system. This technology stack enables businesses to create an e-commerce website that offers customers a smooth and intuitive shopping experience, driving sales and growth.",
    tools: ["react.js", "redux", "redux-toolkit", "javascript", "gsap", "css"],
    liveLink: "https://tech-alpha-fs.netlify.app",
    frontEndLink: "https://github.com/muntasir-fahii/tech-alpha-fs",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40 " id="projects">
      <SectionTitles title={"Projects"} />
      <div className="projects-wrapper mt-12 md:mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
