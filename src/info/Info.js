import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(111, 107, 160)", "rgb(193, 118, 50)"];
export let singlePage = false;

export const info = {
    firstName: " Tom Christer ",
    lastName: "Schöön",
    initials: "tcs",
    position: <>
        a Front-End Developer,<br />
        and UX-designer
    </>,
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Based in Oslo, Norway'
        },
        {
            emoji: "💼",
            text: "Web editor at Crayon"
        },
        {
            emoji: '🖥️',
            text: <>My own business at <a href="https://webloftet.no" target="_blank" rel="noopener noreferrer">Webloftet.no</a></>
        },
        {
            emoji: "📧",
            text: "tomchrister.dev@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/TomChrister",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/tom-christer-sch%C3%B6%C3%B6n-bb8ab1226/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://webloftet.no",
            icon: "fa fa-code",
            label: 'webloftet'
        },
        {
            link: "https://instagram.com/tommen0",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },

    ],
    bio: "Hello! I'm Tom Christer. I'm a front-end developer." +
        " I studied a two year program in front-end development at Noroff, and are currently " +
        "doing a one year program in UX-design. I enjoy making websites, content and functions that works. " +
        "You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'react','html', 'css', 'tailwind', 'cypress', 'jest', 'MySQL', 'firebase', 'github', 'git', 'npm', 'vite', 'vercel', 'figma'],
            exposedTo: ['firebase', 'google analytics', 'google ads']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Gym',
            emoji: '🏋🏼‍♂️'
        },
        {
            label: 'Coding',
            emoji: '👨‍💻'
        },
        {
            label: 'Hiking',
            emoji: '🥾'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }
    ],
    portfolio: [
        {
            title: "Webloftet",
            live: "https://webloftet.no",
            source: "https://webloftet.no",
            tech: 'React, TypeScript, Tailwind CSS, React-router-dom, Figma',
            image: mock1
        },
        {
            title: "Holidaze",
            live: "https://holidaze-eta.vercel.app/",
            source: "https://github.com/TomChrister/holidaze",
            tech: 'React, TypeScript, Tailwind CSS, React-router-dom, Figma',
            image: mock2
        },
        {
            title: "miniStore",
            live: "https://minishop-react.vercel.app/",
            source: "https://github.com/TomChrister/react-eCom",
            tech: 'React, JavaScript, Tailwind CSS, Zuztand, React-router-dom',
            image: mock3
        },
        {
            title: "Techpulse",
            live: "https://techpulse-blogproject.vercel.app/",
            source: "https://github.com/TomChrister/blog-project",
            tech: 'HTML, CSS, JavaScript, Figma',
            image: mock4
        },
        {
            title: "BidWise",
            live: "https://auction-bidwise.vercel.app/",
            source: "https://github.com/TomChrister/auction-website",
            tech: 'HTML, Tailwind CSS, JavaScript, Figma',
            image: mock5
        }
    ]
}