import { NavLink, PortfolioData } from "../util/types";
import { Briefcase, User, Code, Mail, Newspaper } from "lucide-react";

export const portfolioData: PortfolioData = {
  name: "Hafidz Ahlaqul Anbiya",
  title: ["Full-Stack Developer", "Cybersecurity Enthusiast"],
  bio: "I am a passionate full-stack developer with a keen interest in cybersecurity. I specialize in building scalable web applications and ensuring their security against modern threats.",
  about:
    "I'm an undergraduate student at Politeknik Negeri Sriwijaya, majoring in Computer Science. I have a strong foundation in web development and cybersecurity principles. My goal is to create secure and efficient applications that enhance user experience while protecting sensitive data.",
  email: "anbiya574@gmail.com",
  linkedin: "https://linkedin.com/in/hafidz574",
  github: "https://github.com/m4iev",
  instagram: "https://instagram.com/hafidz.aa",
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
    "React.js",
    "React Native",
    "Expo",
    "Node.js",
    "Express.js",
    "Python",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "Supabase",
    "Git",
    "Linux",
    "Unity Game Engine",
    "C#",
    "Cisco Packet Tracer",
    "Cybersecurity Fundamentals",
    "Docker",
    "Networking",
    "Android Studio",
    "Kotlin",
    "Figma",
  ],
  mediumPosts: [
    {
      title: "🗺️My Cybersecurity Roadmap for The Next 5 Years🔒",
      description:
        "An overview about my roadmap to become a cybersecurity engineer.",
      link: "https://medium.com/@anbiya574/my-cybersecurity-roadmap-for-the-next-5-years-62208a2bb91f",
    },
    {
      title: "Configuring UFW (Uncomplicated Firewall) on my Fedora KDE System",
      description:
        "Securing my Fedora KDE system with UFW for better network security.",
      link: "https://medium.com/@anbiya574/configuring-ufw-uncomplicated-firewall-on-my-fedora-kde-system-7de3d746e6e0",
    },
    {
      title: "Web3 Cryptography: Understanding ECC and Its Threats",
      description:
        "A deep dive into elliptic curve cryptography and its implications for Web3 security.",
      link: "https://medium.com/@anbiya574/web3-cryptography-understanding-ecc-and-its-threats-22f6e68502ad",
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
