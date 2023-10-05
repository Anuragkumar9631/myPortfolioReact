import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Anurag',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Singh',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Bengaluru',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+919631521221',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'singhanurag7204@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'anurag.singh',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '04+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '23+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '12+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '06+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Senior Software Developer <span> Anthology Inc </span>',
    desc: ' Successfully converted whole project from AngularJS to ReactJS, and also the part of the support and maintenance team to fix the bugs' ,
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2022',
    title: 'Senior Software Developer <span> Coforge Ltd </span>',
    desc: 'Moved the automation solution into a commercial software of the back office banking application which is developed in ReactJS, JavaScript, C#, MVVM, Asp.Net.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - 2020',
    title: 'Associate Consultant <span> MealFi Pvt Ltd </span>',
    desc: 'Worked on the official web application of its Frontend Development part using ReactJS, Redux, RESTFul APIs. Also designed the UI/UX of the app using HTML, CSS, JavaScript, Adobe, Figma etc...',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Engineering Degree <span> Maulana Abul Kalam Azad University of Technology </span>',
    desc: 'Enrlolled in B.Tech degree from 2016 to 2020 in Electrical & Electronics Engineering from Kolkata, India.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016',
    title: 'Senior Secondary <span> Adwaita Mission High School </span>',
    desc: 'Completed the Internediate in 2016 and the specialisation is Science. was awarded for Studnet Sahayak Award. Alsways believed in Knowledge-Based processs ',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title: 'Higher Secondary <span> Adwaita Mission High School </span>',
    desc: 'Went schooling at my hometwon and succesfully completetd it.  ',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'Next.js',
    percentage: '55',
  },

  {
    id: 5,
    title: 'C#',
    percentage: '65',
  },

  {
    id: 6,
    title: 'DSA',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Asp.Net',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '75',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'GetMyBooks',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.getmybooks.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'GoNiyo',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.goniyo.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'InVideo',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.invideo.io',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Software Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Healthcare',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'SkyPreme',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS, Node.js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.skypreme.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'GymArco',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.gymarco.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'MinorGoals',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Minor Goals',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, ReactJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.minorgoals.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
