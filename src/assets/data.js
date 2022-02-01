import React from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiGraphql, SiApollographql, SiRedux, SiMongodb, SiCss3, SiGithub,SiJavascript } from "react-icons/si";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
    name: "Atharva Joshi",
    title: "React JS | Full-Stack Developer",
    social: {
        GitHub: "https://github.com/ARJ2160",
        LinkedIn: "https://www.linkedin.com/in/arj2160/",
        Twitter: "https://twitter.com/Atharvaj2160",
        Email: "atharvaj2160@gmail.com",
        Spotify: "https://open.spotify.com/playlist/52gtDapY50kKkLEnnnvYgz?si=89f44d4ce2944b91"
    },
    about: {
        title: "My Background",
        description:``,
    },
    skills: [
        {
            id: 1,
            skillName: "React JS",
            skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 2,
            skillName: "Tailwind CSS",
            skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 3,
            skillName: "Redux",
            skillIcon: <SiRedux className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 4,
            skillName: "JavaScript",
            skillIcon: <SiJavascript className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 5,
            skillName: "GraphQL",
            skillIcon: <SiGraphql className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 6,
            skillName: "Apollo GraphQL",
            skillIcon: <SiApollographql className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 7,
            skillName: "MongoDB",
            skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 8,
            skillName: "HTML 5",
            skillIcon: <FaHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 9,
            skillName: "CSS 3",
            skillIcon: <SiCss3 className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            id: 10,
            skillName: "GitHub",
            skillIcon: <SiGithub className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
    ],
    projects: [
        {
            id: 1, 
            title: "Lusion React + Tailwind Clone",
            description: `An emulation of the "Lusion" website using React and Tailwind CSS`,
            tags: [
                "React JS",
                "Tailwind CSS",
                "Stripe API"
            ],
            projectlink: "https://tailwind-lusion.vercel.app/",
            link: "https://github.com/ARJ2160/Tailwind-Lusion"
        },
        {
            id: 2,
            title: "Redux Authentication System",
            description: "A System that authenticates the user's details and stores the sign-up information in a local redux store. When the user is signing-in, the app cross-checks the details with the sign-up data and logins in the user if it exists. The passwords are hashed using a library called MD5.",
            tags: [
                "React JS",
                "Redux",
                "Redux Toolkit",
                "MD5 Hashing"
            ],
            projectlink: "https://redux-form-one.vercel.app/",
            link: "https://github.com/ARJ2160/Redux-Authentication"
        },
        {
            id: 3,
            title: "React Blog",
            description: "A blog website built using React and Tailwind CSS which allows the user to view blogs written by the users with admin access. Admin access is given to the developers only to limit the number of posts being uploaded on the MongoDB server. MD5 hashes the passwords.",
            tags: [
                "React JS",
                "Redux",
                "Redux Toolkit",
                "MD5 Hashing",
                "Express JS",
                "MongoDB",
                "Mongoose"
            ],
            projectlink: "",
            link: "https://github.com/ARJ2160/React-Blog"
        },
        {
            id: 3,
            title: "Tailwind Spotify Clone",
            description: "Clone the Spotify website with Tailwind.",
            tags: [
                "React JS",
                "Tailwind CSS",
            ],
            projectlink: "https://tailwind-spotify-clone.vercel.app/",
            link: "https://github.com/ARJ2160/Tailwind-Spotify-Clone"
        },
        {
            id: 4,
            title: "Samtej Industries LLP",
            description: "Converted low fidelity designs to front-ends. Developed a static React JS website that helped bring the business online so users could browse through the various products the company offers.",
            tags: [
                "React JS",
                "Bootsrtap 5",
            ],
            projectlink: "https://samtejllp.com/",
            link: "https://github.com/ARJ2160/Samtej-React"
        }
    ]
};
export default data;
