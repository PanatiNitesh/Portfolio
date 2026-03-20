// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

import homeImg from "./assets/home.jpg";
import aboutImg from "./assets/about.jpg";
import campusversa from "./assets/projects/campusversa.png";
import codecrib from "./assets/projects/codecrib.png";
import costsage from "./assets/projects/costsage.png";
import  agrisense from "./assets/projects/agrisense.png";
import telemedicine from "./assets/projects/telemedicine.png";
import concrete from "./assets/projects/concrete.png";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/python.png";
import c from "./assets/techstack/c.png";
import java from "./assets/techstack/java.png";
import next from "./assets/techstack/next.png";
import mongodb from "./assets/techstack/mongodb.png";
import node from "./assets/techstack/node.png";
import express from "./assets/techstack/express.png";
import canva from "./assets/techstack/canva.png";
import docker from "./assets/techstack/docker.png";

// Project Images
// import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
// import projectImage4 from "./assets/projects/project4.jpg";


// Logos
export const logos = {
  logogradient,
  logo,
};

// Personal Details
export const personalDetails = {
  name: "",
  tagline: "Where innovation meets full-stack execution",
  homeImg,
  aboutImg,
  about:
    "I'm a passionate full-stack developer with hands-on experience in frontend, backend, and UI/UX design. I love crafting responsive, user-centric web applications built on clean architecture and scalable code. With a growing interest in data analysis and product design, I enjoy transforming ideas into impactful digital solutions and driving projects from concept to launch.",
};

// Social Media
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nitesh-reddy-dev/",
  github: "https://github.com/PanatiNitesh/",
  twitter: "https://x.com/Nitesh_Reddy_",
  instagram: "https://www.instagram.com/nitesh_reddy_/",
};

// Work Experience
// Work Experience / Career Milestones
export const workDetails = [
  {
    Position: "SIH 2025 Winner",
    Company: "Smart India Hackathon",
    Location: "India (National Level)",
    Type: "Achievement",
    Duration: "2025",
    Desc: [
      "Contributed to the development of a role-based, real-time education governance platform for centralized academic and administrative data management.",
      "Built interactive dashboards using Chart.js to visualize attendance trends, CGPA distribution, and department-level performance metrics.",
      "Implemented role-based access control for students, faculty, and administrators to ensure secure and relevant data visibility."
    ],
    Tags: [
      "Problem Solving",
      "Web Application Development",
      "Data Visualization",
      "UI/UX Design"
    ]
  },
  {
    Position: "Internship",
    Company: "JB PORTALS",
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Jan 2024 - Apr 2024",
  },
];
;

// Education
export const eduDetails = [
  {
    Position: "Diploma in Computer Science Engineering",
    Company: "RJS Polytechnic",
    Location: "Bengaluru",
    Duration: "2021 - 2024",
    Score: "CGPA: 9.1",
  },
  {
    Position: "B.E. in Computer Science and Engineering (Data Science)",
    Company: "Bangalore Institute of Technology",
    Location: "Bengaluru",
    Duration: "2024 - 2027 (Pursuing)",
    Score: "CGPA: 8.45 (Current)",
  },
];

// Tech Stack
export const techStackDetails = {
  html,
  css,
  js,
  react,
  tailwind,
  node,
  express,
  next,
  mongodb,
  python,
  java,
  c,
  git,
  github,
  npm,
  postman,
  vscode,
  figma,
  canva,
  docker,
};

// Projects
export const projectDetails = [
{
  title: "CampusVersa – Unified Education Governance Platform",
  image: campusversa,
  description:
    "Role-based, real-time education governance platform that centralizes academic and administrative data into interactive dashboards. Enables efficient management, data visualization, and streamlined decision-making for institutions through a scalable full-stack architecture.",
  techstack: "React.js, Chart.js, Node.js, Express, MongoDB, UI/UX Design",
  previewLink: "https://campusversa.netlify.app",
  githubLink: "https://github.com/PanatiNitesh/Project_Sih",
},

{
  title: "CodeCrib – Real-Time Collaborative Coding Platform",
  image: codecrib,
  description:
    "Real-time collaborative coding platform designed for interview preparation, featuring live code editing, multi-user collaboration via WebSockets, and analytics-driven progress tracking. Enhances coding practice through an interactive and scalable development environment.",
  techstack: "React.js, TypeScript, Vite, Node.js, Express, Socket.IO, MongoDB",
  previewLink: "https://code-crib.netlify.app",
  githubLink: "https://github.com/ravindraogg/CodeCrib",
},

{
  title: "AgriSense – AI-Powered Smart Farming Platform",
  image: agrisense, // make sure you import this image
  description:
    "AI-driven smart farming platform that provides crop recommendations, yield prediction, weather insights, and disease detection. Features an intelligent chatbot, real-time analytics dashboard, and multi-language support to help farmers make data-driven decisions.",
  techstack: "React.js, Node.js, Express.js, MongoDB, AI/ML, OpenAI",
  previewLink: "https://agrisense-farm.netlify.app", // replace if available
  githubLink: "https://github.com/PanatiNitesh/Agrisense-Hackproject", // replace if available
},
{
  title: "Cost-Cutting AI Tool",
  image: costsage,
  description:
    "AI-powered expense management and financial forecasting platform that analyzes spending patterns and provides actionable insights to reduce costs. Designed to help small businesses optimize budgets, improve financial planning, and make data-driven decisions.",
  techstack: "JavaScript, React.js, Node.js, MongoDB",
  previewLink: "https://cost-sage-analysis.netlify.app",
  githubLink: "https://github.com/ravindraogg/Cost-Sage-Analysis",
},

{
  title: "Telemedicine App",
  image: telemedicine,
  description:
    "Cross-platform telemedicine mobile application built using Flutter (Dart), enabling seamless patient-doctor interaction with an intuitive and accessible UI. Designed to provide a modern healthcare experience with smooth navigation, real-time communication features, and user-focused design.",
  techstack: "Flutter (Dart), UI/UX Design, Mobile App Development",
  previewLink: "https://www.figma.com/design/pa4CDuDENlb8GTf3U6GYay/Telemedicine-app",
  githubLink: "https://github.com/PanatiNitesh/google-telemedicine-app",
},
{
  title: "Concrete Strength Prediction using Deep Learning",
  image: concrete, // import this image
  description:
    "Deep learning-based model to predict the compressive strength of concrete using material composition data. Helps optimize construction quality and reduce material costs through accurate predictions.",
  techstack: "Python, TensorFlow/Keras, Pandas, NumPy, Machine Learning, Deep Learning",
  previewLink: "https://concrete-dl.vercel.app/", // optional (leave empty if not deployed)
  githubLink: "https://github.com/PanatiNitesh/Concrete-Strength-Prediction-DL",
}
];

// Contact Info
export const contactDetails = {
  email: "niteshreddy242005@gmail.com",
  instagram: "https://www.instagram.com/nitesh_reddy_/",
};

