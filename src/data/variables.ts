import { NavLink, PortfolioData } from "../util/types";
import {
  Briefcase,
  User,
  Code,
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  Instagram,
  ArrowRight,
  Newspaper,
  LucideProps,
} from "lucide-react";

export const portfolioData: PortfolioData = {
  name: "Your Name",
  title: "Full-Stack Developer",
  bio: "I'm a passionate developer building robust and user-centric web applications. My focus is on clean code and impactful design.",
  about:
    "Hello! I'm a dedicated and results-driven web developer with a strong foundation in modern web technologies. My journey in programming started with a fascination for how things work on the internet, which quickly grew into a passion for creating dynamic and interactive web experiences. I thrive on solving complex problems and am constantly learning to keep up with the ever-evolving tech landscape. When I'm not coding, I enjoy hiking, photography, and exploring new coffee shops.",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  instagram: "https://instagram.com/your-username",
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A feature-rich online store built with the MERN stack. Includes product catalog, shopping cart, and user authentication.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      mediumLink: "#",
    },
    {
      title: "Project Management Tool",
      description:
        "A collaborative tool for teams to manage tasks and track progress with real-time updates using WebSockets.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Blog",
      description:
        "A clean and minimalist blog platform created with Next.js and Markdown. Optimized for performance and SEO.",
      technologies: ["Next.js", "React", "Markdown"],
      liveLink: "#",
      githubLink: "#",
      mediumLink: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets using D3.js and React, providing insightful analytics.",
      technologies: ["React", "D3.js", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A full-stack chat application enabling real-time messaging, user presence, and private chat rooms.",
      technologies: ["Socket.IO", "React", "Node.js"],
      liveLink: "#",
      githubLink: "#",
    },
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Sass",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Git",
    "Docker",
    "Jest",
  ],
  mediumPosts: [
    {
      title: "Demystifying React Hooks",
      description:
        "A deep dive into the most commonly used React Hooks and how they can simplify your component logic.",
      link: "#",
    },
    {
      title: "Building with Neo-Brutalism in Tailwind CSS",
      description:
        "Exploring the design principles of Neo-Brutalism and how to implement them effectively using Tailwind CSS.",
      link: "#",
    },
    {
      title: "A Guide to State Management in Modern Web Apps",
      description:
        "Comparing different state management solutions like Context API, Redux, and Zustand for your next project.",
      link: "#",
    },
  ],
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#blog", label: "Blog", icon: Newspaper },
  { href: "#contact", label: "Contact", icon: Mail },
];
