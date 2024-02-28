import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Github
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'FTE - Conference Software',
    techStack: 'HTML5, CSS3, Bootstrap, NodeJs, Express',
    imageUrl: 'ICTA-2024.png',
    href: 'https://github.com/Parmesh119/ICTA-Second',
  },
  {
    id: 2,
    title: 'Medical Chatbot',
    techStack:
      'Google Cloud Platform, DialogFlow, Telegram',
    imageUrl: 'Medical Chatbot.png',
    href: 'https://github.com/Parmesh119/Medical-Chatbot-using-Dialogue-of-Google-cloud',
  },
  {
    id: 3,
    title: 'The City Track',
    techStack:
      'PHP, HTML5, CSS3, Bootstrap',
    imageUrl: 'CityTrack.png',
    href: 'https://github.com/Parmesh119/CityTrack',
  },
  {
    id: 4,
    title: ' Bug Tracking System',
    techStack: 'HTML5, CSS3, Middleware, NodeJs, ExpressJs, ejs in ExpressJs, Bootstrap, MongoDB',
    imageUrl: 'BugTracking.png',
    href: 'https://github.com/Parmesh119/Bug-Tracker',
  },
  {
    id: 5,
    title: 'DeCodeCafe Community Website',
    techStack: 'HTML5, CSS3, Middleware, NodeJs, ExpressJs, Bootstrap',
    imageUrl: 'Decodecafe1.png',
    href: 'https://github.com/DeCodeCafe/Official-website---DeCodeCafe-Community',
  },
  {
    id: 6,
    title: 'CharusatV5',
    techStack: 'NextJs, ExpressJs, Bootstrap, Tailwind CSS, MongoDB, NPM, Git, GitHub, JavaScript, Jest, Manual testing',
    imageUrl: 'Charusat.png',
    href: 'https://github.com/Nirmalchaudhary/KDPIT',
  },
  {
    id: 7,
    title: 'CharusatV4',
    techStack: 'React, Express, Bootstrap, Tailwind CSS, MongoDB, Git, GitHub, Jest, Manual testing',
    imageUrl: 'Charusat.png',
    href: 'https://github.com/Nirmalchaudhary/KDPIT',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'GitHub Explorer',
    techStack: 'React, GitHub, Open Source',
    icon: 'Github',
    href: 'https://github.com/Parmesh119/CodeClause_GitHub_Explorer',
  },
  {
    id: 2,
    title: 'The Gita Initiative',
    techStack: 'Open Source',
    icon: '',
    href: 'https://github.com/gita',
  },
  {
    id: 3,
    title: 'iChat.app',
    techStack: 'Node js, Express, Socket.io, React, Tailwind CSS',
    icon: '',
    href: 'https://github.com/Parmesh119/Chat_App',
  },

  {
    id: 4,
    title: 'TextUtils',
    techStack: 'ReactJs, Bootstrap',
    icon: '',
    href: 'https://github.com/Parmesh119/TextUtils',
  },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Tailwind, Bootstrap',
    src: '/tech/frontend/tailwindBootstrap.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Nextjs 13',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'DenoJs',
    src: '/tech/backend/denojs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: 'Next Auth',
    src: '/tech/backend/nextauth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: 'PHP',
    src: '/tech/backend/php.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Redis',
    src: '/tech/database/redis.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: '/tech/database/postgres.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Elastic Search',
    src: '/tech/database/elasticSearch.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Jenkins',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Student, Charusat University',
    src: '/tech/experience/Charusat.png',
    exp: '2 years ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Developer Program Member, GitHub',
    src: `/tech/experience/Github.png`,
    exp: '1 year ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Cloud Team, AWS Cloud Club - Charusat',
    src: `/tech/experience/ASC.jpeg`,
    exp: '1 month ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Cloud Developer, CLDC - Charusat',
    src: '/tech/experience/CLDC.png',
    exp: '8 months ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 10,
    title: 'Lead WebDev Team, DeCodeCafe Community',
    src: '/tech/experience/Decodecafe1.png',
    exp: '2 months ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'WebDev Intern, Krtya Software Pvt Lmd.',
    src: '/tech/experience/krtya.png',
    exp: '6 months ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 6,
    title: 'GSSoC`23 student developer',
    src: '/tech/experience/GSSoC.png',
    exp: '4 months ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 7,
    title: 'WoC`23 Student Developer',
    src: '/tech/experience/WoC.png',
    exp: '11 months ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 8,
    title: 'Tech Team, DeCodeCafe Community',
    src: '/tech/experience/decodecafe.png',
    exp: '7 months ago',
    snippetCount: 1128,
    progress: 70,
  }, 
  {
    id: 9,
    title: 'Student Ambassador MLSA',
    src: '/tech/experience/MLSA.png',
    exp: '3 months ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'SOAP API',
    src: '/tech/others/soap.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];
