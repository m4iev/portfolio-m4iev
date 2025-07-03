import { LucideProps } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  mediumLink?: string;
}

export interface MediumPost {
  title: string;
  description: string;
  link: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType<LucideProps>;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  projects: Project[];
  skills: string[];
  mediumPosts: MediumPost[];
}
