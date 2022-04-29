import { FaHtml5, FaReact } from 'react-icons/fa';
import {
  SiApollographql,
  SiCss3,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

import Form from '../images/Project Images/Redux_Form.webp';
import Lusion from '../images/Project Images/Lusion_React.webp';
import Movies from '../images/Project Images/Redux_Movies.webp';
import React from 'react';
import Samtej from '../images/Project Images/SamTej.webp';
import Spotify from '../images/Project Images/Spotify_Clone.webp';

const BOOTSTRAP_FOR_SKILL_ICON = 'text-4xl mx-auto inline-block';
const data = {
  name: 'Atharva Joshi',
  title: 'React JS | Full-Stack Developer',
  social: {
    GitHub: 'https://github.com/ARJ2160',
    LinkedIn: 'https://www.linkedin.com/in/arj2160/',
    Twitter: 'https://twitter.com/Atharvaj2160',
    Email: 'atharvaj2160@gmail.com',
    Spotify:
      'https://open.spotify.com/playlist/52gtDapY50kKkLEnnnvYgz?si=89f44d4ce2944b91',
  },
  skills: [
    {
      id: 1,
      skillName: 'React JS',
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 2,
      skillName: 'Tailwind CSS',
      skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 3,
      skillName: 'Redux',
      skillIcon: <SiRedux className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 4,
      skillName: 'JavaScript',
      skillIcon: <SiJavascript className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 5,
      skillName: 'GraphQL',
      skillIcon: <SiGraphql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 6,
      skillName: 'Apollo GraphQL',
      skillIcon: <SiApollographql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 7,
      skillName: 'MongoDB',
      skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 8,
      skillName: 'HTML 5',
      skillIcon: <FaHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 9,
      skillName: 'CSS 3',
      skillIcon: <SiCss3 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      id: 10,
      skillName: 'GitHub',
      skillIcon: <SiGithub className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Lusion React + Tailwind Clone',
      image: Lusion,
      description: `An emulation of the "Lusion" website using React and Tailwind`,
      tags: ['React JS', 'Tailwind CSS', 'Stripe API'],
      projectlink: 'https://tailwind-lusion.vercel.app/',
      link: 'https://github.com/ARJ2160/Tailwind-Lusion',
    },
    {
      id: 2,
      title: 'Tailwind Spotify Clone',
      image: Spotify,
      description: 'Created a clone of the Spotify website with Tailwind.',
      tags: ['React JS', 'Tailwind CSS'],
      projectlink: 'https://tailwind-spotify-clone.vercel.app/',
      link: 'https://github.com/ARJ2160/Tailwind-Spotify-Clone',
    },
    {
      id: 3,
      title: 'IMDb Clone',
      image: Movies,
      description:
        'Built an IMDb website clone using the IMDb API with React JS for the front-end and Redux Toolkit for managing state.',
      tags: ['React JS', 'Redux Toolkit', 'Redux Thunk', 'Sass'],
      projectlink: 'https://redux-movies-lemon.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Movies',
    },
    {
      id: 4,
      title: 'Redux Authentication System',
      image: Form,
      description:
        'Created an Authentication Flow System using React JS and used Redux Toolkit for managing state.',
      tags: [
        'React JS',
        'Redux',
        'Redux Toolkit',
        'Redux Persist',
        'MD5 Hashing',
      ],
      projectlink: 'https://redux-form-one.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Authentication',
    },
    {
      id: 5,
      title: 'Samtej Industries LLP',
      image: Samtej,
      description:
        'Converted low fidelity designs to front-ends. Developed a static React JS website that helped bring the business online so users could browse through the various products the company offers.',
      tags: ['React JS', 'Bootstrap 5'],
      projectlink: 'https://samtejllp.com/',
      link: 'https://github.com/ARJ2160/Samtej-React',
    },
    {
      id: 6,
      title: 'React Blog',
      image: null,
      description:
        'A blog website built using React and Tailwind CSS which allows the user to view blogs written by the users with admin access.',
      tags: [
        'React JS',
        'Redux',
        'Redux Toolkit',
        'MD5 Hashing',
        'Express JS',
        'MongoDB',
        'Mongoose',
      ],
      projectlink: 'https://github.com/ARJ2160/React-Blog',
      link: 'https://github.com/ARJ2160/React-Blog',
    },
  ],
};
export default data;
