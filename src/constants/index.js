import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  lhasa,
  ep,
  amazonclone,
  islandmanor,
  memories,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "https://www.linkedin.com/in/jakewest91/",
    title: "Linkedin",
  },
  {
    id: "https://github.com/jeiku",
    title: "Github",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Lhasa OMS",
    icon: lhasa,
    iconBg: "#FFF",
    date: "Mar 2021 - Present",
    points: [
      "Redesigned and optimized front-end user experience using HTML CSS and JavaScript in collaboration with creative and marketing teams correlating in a 5% increased conversion rate",
      "Demonstrate leadership capabilities in overseeing various e-commerce projects, creating system requirements, and assigning tasks within Jira and Confluence",
      "Add, update and maintain products, widgets, emails and marketing materials within Magento 2 and frontend product pages",
      "Assist in the development, maintenance, and enhancement of saved searches, workflows, and scripts in our NetSuite ERP, alongside managing account administration duties",
      "Create and manage new flows within our Celigo integration tool, linking our various platforms and establishing connections with APIs like UPS and FedEx for enhanced data management",
    ],
  },
  {
    title: "Fullstack React Developer",
    company_name: "Everypast",
    icon: ep,
    iconBg: "#FFF",
    date: "June 2021 - Dec 2023",
    points: [
      "Collaborated with a client as a freelance developer to launch an autographical ancestry tool using Python and Django Restful Framework combined with React, Material UI and Redux, enabling users to create profiles and document the stories of their family heritage",
      "Designed and implemented an interactive and filterable questionnaire feature that allows users to answer thought-provoking questions related to their family that become saved and manageable on their profile",
      "Allows users to sign up, log in, update profile, add sub-users and manage all questions and answers directly from their profile page",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jake is the ideal web developer/designer. Outstanding work, outstanding communication.",
    name: "Josiah Schmidt",
    company: "CEO of EveryPast",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I bought from this seller a few times and always fast communication and work",
    name: "t_dong",
    company: "Fiverr Buyer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Jake is awesome. He was tentative to my needs and delivered exactly what I was expecting. 10/10",
    name: "generawlinson",
    company: "Fiverr Buyer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "An Amazon clone that allows users to register an account, login, make purchases and view order history. Authentication is done in Firebase and payments are processed using Sripe API. Orders stored Firestore Database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: amazonclone,
    live_link: "https://clone-9ecc3.firebaseapp.com/",
    source_code_link: "https://github.com/jeiku/react-amazon-clone",
  },
  {
    name: "The Island Manor",
    description:
      "A vacation rental website that I made for a client. Built using HTML, Sass, JavaScript and scrollRevealJS. This site is mostly informational. Client requested not to maintain SSL certification.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: islandmanor,
    live_link: "https://theislandmanor.com/",
    source_code_link: "https://github.com/jeiku/beach-house-website",
  },
  {
    name: "Memories",
    description:
      "Fullstack Social Media Memories app using the MERN stack and built in React & Material UI with Redux state management. Full CRUD app; users can create, read, update and delete posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    live_link: "#",
    source_code_link: "https://github.com/jeiku/react-memories",
  },
];

export { services, technologies, experiences, testimonials, projects };
