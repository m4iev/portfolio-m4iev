import { FC } from "react";
import Section from "./Section";
import SocialIcon from "./SocialIcon";
import { portfolioData } from "../data/variables";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Contact: FC = () => {
  return (
    <Section id="contact" title="Contact" className="bg-lime-50">
      <div className="text-center bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_#000]">
        <h3 className="text-3xl font-bold text-black mb-4">Let's Connect</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Have a project idea or just want to chat? Feel free to reach out. I'm
          always open to new opportunities and collaborations.
        </p>
        <div className="flex justify-center items-center gap-6 md:gap-8">
          <SocialIcon href={portfolioData.github} icon={Github} />
          <SocialIcon href={portfolioData.linkedin} icon={Linkedin} />
          <SocialIcon href={portfolioData.instagram} icon={Instagram} />
          <SocialIcon href={`mailto:${portfolioData.email}`} icon={Mail} />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
