// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Education Section Logo's
import Nitp from "./assets/education_logo/Nitp.jpeg";

// Project Section Logo's
import all from "./assets/work_logo/all.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Nitp,
    school: "NIT, Patna",
    date: "2022 - 2026",
    desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) at the National Institute of Technology (NIT) Patna. Alongside my core engineering curriculum, I have developed a strong interest in web development, which I have nurtured through self-learning, online courses, and hands-on projects. I have also explored other areas of software development, including artificial intelligence and machine learning. On campus, I am an active member of the NSS Club and serve as a volunteer teacher at Sankalp, contributing to community welfare and student mentorship. My educational experience at NIT Patna is shaping me into a well-rounded engineer with both technical expertise and social responsibility.",
    degree: "B.Tech.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Employee Management Project",
    description:
      "React SPA for employee data management using localStorage. Implements add/edit/delete functionality, search filters, and responsive UI. Showcases React hooks (useState, useEffect), context API, and browser storage. Clean component architecture with form validation. Perfect for demonstrating frontend skills without backend dependencies.",
    image: all,
    tags: ["TailwindCSS", "React JS", "API"],
    github: " https://github.com/Manish-022/Employee-Management-project",
    webapp: " https://manish-022.github.io/Employee-Management-project/",
  },
  {
    id: 1,
    title: "Tindog Project",
    description:
      "A playful Tinder-inspired landing page for dogs, built with Bootstrap 5. Features responsive design, animated buttons, pricing cards, and testimonial carousels. Demonstrates Bootstrap grid, components, and CSS customization. ",
    image: all,
    tags: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Manish-022/Tindog_project",
    webapp: "https://manish-022.github.io/Tindog_project/",
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    description:
      "A responsive web implementation of the classic game using vanilla JavaScript. Features player turn tracking, win detection, and score persistence. Built with DOM manipulation, event listeners, and CSS grid. Demonstrates core JS logic without frameworks.",
    image: all,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Manish-022/Tic-tac-toe-game",
    webapp: "https://manish-022.github.io/Tic-tac-toe-game/",
  },
];
