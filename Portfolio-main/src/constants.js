// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import Amity from "../src/assets/education_logo/Amity.png";
import Adarsh from "../src/assets/education_logo/Adarsh.png";
import MDU from "../src/assets/education_logo/MDU.png";

// Project Section Logo's
import CarRental  from './assets/work_logo/car-rental.png';
import chatgpt from './assets/work_logo/chatgpt.png';
import hotelBooking from './assets/work_logo/hotelBooking.png';
import Athflex from './assets/work_logo/Athflex.png';
import Swiggy from './assets/work_logo/Swiggy.png';


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
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
    ],
  },
];

  // export const experiences = [
  //   {
  //     id: 0,
  //     img: webverseLogo,
  //     role: "Fullstack Developer",
  //     company: "Webverse Digital",
  //     date: "April 2024 - Present",
  //     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React JS",
  //       "TypeScript",
  //       "Node JS",
  //       "Tailwind CSS",
  //       "MongoDb",
  //       "Redux",
  //       " Next Js",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  // ];
  
  export const education = [
  {
    id: 0,
    img: Amity,
    school: "Amity University, Noida",
    date: "Apr 2024 - Present",
    grade: "Currently Pursuing",
    desc: "Pursuing a Master of Computer Applications (MCA) with a focus on advanced software development, full-stack technologies, and modern computer science concepts.",
    degree: "Master of Computer Applications (MCA)",
  },

  {
    id: 1,
    img: MDU,
    school: "Maharshi Dayanand University - Rohtak",
    date: "Apr 2018 - 2021",
    grade: "70.1%",
    desc: "Completed a Bachelor of Computer Applications (B.C.A.) with practical experience in Data Structures, Web Development, and Database Systems through academic projects.",
    degree: "Bachelor of Computer Applications (BCA)",
  },

  {
    id: 2,
    img: Adarsh,
    school: "ADRASH SR SEC SCHOOL SHADIPUR JULANA",
    date: "Apr 2017 - March 2018",
    grade: "80.3%",
    desc: "Completed Class 10 (CBSE) with Art's+Math.",
    degree: "hBSE X – Art's+Math",
  },
];

 export const projects = [
  {
    id: 0,
    title: "CarRental",
    description:
      "A responsive car rental web app featuring easy booking, secure payments, and vehicle filtering for a smooth user experience.",
    image: CarRental,
    tags: [
      "Tailwind CSS",
      "React JS",
      "API",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    // github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    // webapp: "https://githubprofiledetective.netlify.app/",
  },

  {
    id: 1,
    title: "ChatGPT",
    description:
      "A conversational AI platform that integrates real-time responses and a clean UI for an engaging user experience.",
    image: chatgpt,
    tags: [
      "Tailwind CSS",
      "React JS",
      "API",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    // github: "https://github.com/codingmastr/Movie-Recommendation-App",
    // webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },

  {
    id: 2,
    title: "Athflex",
    description:
      "A stylish e-commerce fashion store that lets users browse products, add items to cart, and checkout securely.",
    image: Athflex,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    // github: "https://github.com/codingmastr/cmtk-email-validator",
    // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },

  {
    id: 3,
    title: "HotelBooking",
    description:
      "A travel-friendly hotel reservation system featuring real-time availability, secure payments, and responsive design.",
    image: hotelBooking,
    tags: ["JavaScript", "HTML", "CSS"],
    // github: "https://github.com/codingmastr/Task-Reminder-Tool",
    // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },

  {
    id: 4,
    title: "Swiggy",
    description:
      "An online food ordering platform with dynamic menus, cart management, and smooth checkout functionality.",
    image: Swiggy,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
];
    
  