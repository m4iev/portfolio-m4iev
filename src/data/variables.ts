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
      title: "Super Cebol",
      description:
        "2D Platformer game developed using Construct 2. It features simple gameplay mechanics and a horror plot twist. 😱",
      technologies: ["Construct 2", "Visual Scripting"],
      liveLink: "https://maiev12.itch.io/super-cebol",
    },
    {
      title: "MemasaX",
      description:
        "AR app project that shows 3D model when the camera aim at a marker.",
      technologies: ["Unity", "C#", "Vuforia"],
      githubLink: "https://github.com/m4iev/memasax",
    },
    {
      title: "Camera Parts Interactive 3D Experience ",
      description:
        "A clean and minimalist blog platform created with Next.js and Markdown. Optimized for performance and SEO.",
      technologies: ["Blender", "Verge3D", "Visual Scripting", "JavaScript"],
      liveLink:
        "https://drive.google.com/file/d/1xoXffKc8HMFWodKfNNKoO01tfbEKjU3N/view?usp=sharing",
      githubLink: "https://github.com/m4iev/camera-parts",
    },
    {
      title: "Dapoer Alfredho",
      description:
        "Dapoer Alfredo's food menu app made with Android Studio (Kotlin).",
      technologies: ["Android Studio", "Kotlin"],
      githubLink: "https://github.com/m4iev/dapoer-alfredho",
    },
    {
      title: "MyRantau",
      description:
        "UI/UX design project for a mobile app that helps users order MyRantau's beverages from their own phone.",
      technologies: ["Figma", "UI/UX Design"],
      figmaLink:
        "https://www.figma.com/design/zgfLR2wkT5ITYEHsRoe3Z8/MyRantau?node-id=0-1&p=f&t=7Xmtb1HntD8nX8s0-0",
    },
    {
      title: "Network Infrastructure Implementation using Cisco Packet Tracer",
      description:
        "A project demonstrating the implementation of a network infrastructure using Cisco Packet Tracer",
      technologies: ["Networking", "Cisco Packet Tracer"],
      documentLink:
        "https://drive.google.com/file/d/1WLpHMfYIlCoL7wRK4ZABwSVO0rParOws/view?usp=sharing",
    },
    {
      title: "Askitout",
      description:
        "A Laravel-based Q&A platform where users can ask and answer questions, similar to Stack Overflow.",
      technologies: [
        "PHP",
        "Laravel",
        "PostgreSQL",
        "Node.js",
        "Blade",
        "JavaScript (ES6+)",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/m4iev/askitout",
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
    "Verge3D",
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
