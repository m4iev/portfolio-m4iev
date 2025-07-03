import { FC } from "react";
import { portfolioData } from "../data/variables";
import MediumPostCard from "./MediumPostCard";
import Section from "./Section";

const Blogs: FC = () => {
  return (
    <Section id="blog" title="From My Blog" className="bg-pink-300">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioData.mediumPosts.map((post, index) => (
          <MediumPostCard key={index} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
