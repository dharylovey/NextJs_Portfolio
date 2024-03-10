

import React from "react"
import { FaHtml5 } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";

export const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#myskills', label: 'Skills' },
    { href: '#project', label: 'Project' },
    { href: '#contact', label: 'Contact' },
]


export const hero = [
    {
        title: "I'm a",
        greet: `Hello, I'm `,
        name: 'DharyL',
        description: `, As a junior full stack developer, I'm passionate about crafting seamless web applications, proficient in both front-end and back-end technologies. Eager to collaborate on innovative projects and contribute to the dynamic world of web development.`
    }
]

export const techStacks = [
    { src: '/image/html.svg', alt: 'html' },
    { src: '/image/css.svg', alt: 'css' },
    { src: '/image/javascript.svg', alt: 'javascript' },
    { src: '/image/tailwindcss.svg', alt: 'tailwindcss' },
    { src: '/image/react.svg', alt: 'react' },
    { src: '/image/typescript.svg', alt: 'typescript' },
    { src: '/image/next-js.svg', alt: 'next-js' },
    { src: '/image/mongodb.svg', alt: 'mongodb' },
]

export const aboutMe = [

    {
        src: '/image/experience.png',
        header: 'Experience',
        desc: '8 months'
        ,
        footer: 'Full Stack Web Developer'
    },
    {
        src: '/image/education.png',
        header: 'Education',
        desc: [
            {
                course:
                    'Bachelor of Science in Computer Science',
                school: 'Caraga State University',
                link: 'https://www.carsu.edu.ph/'

            },
            {
                course:
                    'Full Stack Web Developer',
                school: 'Kodego Bootcamp ( 6 months )',
                link: 'https://kodego.ph/'

            },

        ],
    },
]

export const techSkill = [
    { label: 'HTML, ' },
    { label: 'CSS, ' },
    { label: 'Tailwind, ' },
    { label: 'JavaScript, ' },
    { label: 'React JS, ' },
    { label: 'TypeScript, ' },
    { label: 'Express JS, ' },
    { label: 'MongoDB, ' },
    { label: 'Next JS ' },
]

export const expData = [
    {
        img: '/image/html.svg',
        skill: 'HTML',
        desc: 'HTML thing',
        icon: React.createElement(FaHtml5),
        date: 'July 2023'
    },
    {
        img: '/image/tailwindcss.svg',
        skill: 'Tailwind CSS',
        desc: 'Tailwind CSS thing',
        icon: React.createElement(SiTailwindcss),
        date: 'August 2023'
    },
    {
        img: '/image/javascript.svg',
        skill: 'JavaScript',
        desc: 'JavaScript thing',
        icon: React.createElement(RiJavascriptLine),
        date: 'October 2023'
    },
    {
        img: '/image/react.svg',
        skill: 'React JS',
        desc: 'React JS thing',
        icon: React.createElement(FaReact),
        date: 'December 2023'
    },
    {
        img: '/image/typescript.svg',
        skill: 'TypeScript',
        desc: 'TypeScript thing',
        icon: React.createElement(TbBrandTypescript),
        date: 'January 2024'
    },
    {
        img: '/image/next-js.svg',
        skill: 'Next JS',
        desc: 'Next JS thing',
        icon: React.createElement(TbBrandNextjs),
        date: 'January - Present 2024'
    },
] 

export const skills = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'React',
    'TypeScript',
    'Express',
    'MongoDB',
    'NextJS'
]

export const accordionData = [
    {
        id: 1,
        label: 'HTML',
        content: '"Semantics is a subject I deeply enjoy! 😄"',
        progress: 80

    },
    {
        id: 2,
        label: 'CSS',
        content: '"I know how to center div 😁"',
        progress: 50
    },
    {
        id: 3,
        label: 'Tailwind',
        content: '"I highly recommend to use this library 👍. "',
        progress: 50
    },
    {
        id: 4,
        label: 'JavaScript',
        content: '"Arrow function () => { 😉 } "',
        progress: 70
    }
]

export const accordionDataTwo = [
    {
        id: 1,
        label: 'React JS',
        content: '"Reusable components are a must! I 💓 it."',
        progress: 40
    },
    {
        id: 2,
        label: 'TypeScript',
        content: '"Safety first! { 🆎 ✅ }"',
        progress: 35
    },
    {
        id: 3,
        label: 'Express JS',
        content: '"Interesting server stuff. I used this during my capstone project in bootcamp. 💖"',
        progress: 65
    },
    {
        id: 4,
        label: 'MongoDB',
        content: '"Keep your document safe!"',
        progress: 60
    },
    {
        id: 5,
        label: 'NextJS',
        content: `"This website is made with Next JS. I'm still learning."`,
        progress: 40
    },
]