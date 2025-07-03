import { FC } from "react";
import Section from "./Section";
import { portfolioData } from "../data/variables";

const About: FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-pink-300">
      <div className="bg-white border-4 border-black p-8 md:p-10 shadow-[8px_8px_0px_#000]">
        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          {portfolioData.about}
        </p>
      </div>
    </Section>
  );
};

export default About;
