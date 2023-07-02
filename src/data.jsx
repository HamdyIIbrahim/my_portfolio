import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";
import es6 from "./assets/es6_1.svg";
import Ajax from "./assets/ajax.png"

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Hamdy",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Ibrahim",
  },

  {
    id: 3,
    title: "Age : ",
    description: "22 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Egyption",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Alexandria,Egypt",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "01279953124",
  },

  {
    id: 8,
    title: "Email : ",
    description: "hamdyfarouk444@gmail.com",
  },

  {
    id: 9,
    title: "Military status: ",
    description: "Exempted",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Arabic, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "22+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "30+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "3.5",
    title: "<br/> CGPA",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "Full Stack Web Developer <span> GeekyAir </span>",
    // eslint-disable-next-line no-multi-str
    desc: "Front-end development: Helped in developing the front-end using React.js and the back-end using Node.js also created a \
    dashboard for the admins to control all the cases and creating new companies, leading to a 76% increase in usage\
    Back-end development: Built an email server project for a client using Node.js in Upwork and I got excellent feedback.\
    Sea Table Scripting: Developed and implemented the version 3.0.0 of Seatle Zapier CLI",
  },
  // {
  //   Frontend_development:
  //     "Helped in developing the front-end using React.js and the back-end using Node.js also created a dashboard for the admins to control all the cases and creating new companies, leading to a 76% increase in usage",
  //   Backend_development:
  //     " Built an email server project for a client using Node.js in Upwork and I got excellent feedback.",
  //   SeaTable_Scripting:
  //     "Developed and implemented the version 3.0.0 of Seatle Zapier CLI",
  // }
  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2023",
    title: "Bachelor Degree <span> Faculty of Science </span>",
    desc: "Bachelor Degree of Computer Science department special degree at Faculty of Science Alexandria University with CGPA : 3.5",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title:
      "JavaScript Algorithms and Data Structures Certificate <span>  free code camp </span>",
    desc: " JavaScript Algorithms and Data Structures Certificate free code camp Developer Certification, representing approximately 300 hours of coursework",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "JavaScript Mahara-tech Certificate",
    desc: " iti-platform certification of 7 hours course Developer Certification, representing approximately 7 hours of coursework",
  },
  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: " React Development Cross-Skilling <span>  Udacity </span>",
    desc: "  React.js Certification from Udacity",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html5",
    icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="" />
  ,
  },

  {
    id: 2,
    title: "Javascript",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
  ,
  },


  {
    id: 4,
    title: "CSS3",
    icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
  ,
  },

  {
    id: 5,
    title: "ES6",
    icon: <img src={es6} alt="" />,
  },

  {
    id: 6,
    title: "Ajax",
    icon: <img src={Ajax} alt="ajax icons" />,
  },

  {
    id: 7,
    title: "Tailwind",
    icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="" />
  ,
  },

  {
    id: 8,
    title: "React",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
  ,
  },
  {
    id: 9,
    title: "Node",
    icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
  ,
  },
  {
    id: 10,
    title: "Express",
    icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" />
  ,
  },
  {
    id: 11,
    title: "MongoDB",
    icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
  ,
  },
  {
    id: 12,
    title: "Git",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
    ,
  },
  {
    id: 13,
    title: "Githup",
    icon:
    <svg viewBox="0 0 128 128">
    <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
    </svg>
  
    ,
  },
];

export const portfolio = [
  // {
  //   id: 1,
  //   img: Work1,
  //   title: "Photo Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Photo",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Photoshop",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 2,
  //   img: Work2,
  //   title: "Website Design",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Website",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "React JS",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   img: Work3,
  //   title: "Video Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Video",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Premium",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: "Video Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Video",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Premium",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: "Landing Page",
  //   details: [
  //     {
  //       title: "Project : ",
  //       desc: "Website",
  //     },
  //     {
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       title: "Language : ",
  //       desc: "React JS, Node JS",
  //     },
  //     {
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: "Photo Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Photo",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Photoshop",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dibble.com",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
