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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
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
    title: "Fullstack React Developer",
    company_name: "Everypast.com",
    icon: ep,
    iconBg: "#FFF",
    date: "Nov 2020 - Present",
    points: [
      "Created and designed all front-end aspects using React.js, Material UI and a Django RESTful backend with global state managed with Redux",
      "Allows users to sign up, log in, update profile, add sub-users, and answer questions relating to their family history which appear on their public profile",
      "Maintain and add enhancements per clients request – currently adding email verification and messaging system between users with Socket.io",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Lhasa OMS",
    icon: lhasa,
    iconBg: "#FFF",
    date: "Mar 2021 - Present",
    points: [
      "Redesigned and optimized front-end user experience within our Adobe Commerce platoform using HTML CSS and Javascript in collaboration with creative and marketing teams correlating in a 5% increased conversion rate per Google Analytics",
      "Add, update and maintain products, product widgets, banners and marketing materials within Magento and frontend product pages",
      "Provide complete IT technical support, troubleshooting and system operations for all teams and worked closely with Warehouse Manager to install and maintain new kiosks to better aid in item receiving and fulfillment",
      "Helped transition company from a legacy UNIX system to a new NetSuite ERP, including creating 40-page technical help documentation for team members",
      "Participate in code reviews providing constructive feedback with other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jake is the ideal web developer/designer. Outstanding work, outstanding communication.",
    name: "Josiah Schmidt",
    designation: "CEO",
    company: "EveryPast",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I bought from this seller a few times and always fast communication and work",
    name: "t_dong",
    designation: "None",
    company: "Fiverr Buyer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Jake is awesome. He was tentative to my needs and delivered exactly what I was expecting. 10/10",
    name: "generawlinson",
    designation: "None",
    company: "Fiverr Buyer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
