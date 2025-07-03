import { FC } from "react";
import { MediumPost } from "../util/types";
import { ArrowRight } from "lucide-react";

const MediumPostCard: FC<{ post: MediumPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-none border-4 border-black p-6 flex flex-col h-full shadow-[8px_8px_0px_#fde047]">
      <h3 className="text-2xl font-bold text-black mb-3">{post.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{post.description}</p>
      <div className="mt-auto pt-4">
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black hover:text-cyan-600 font-bold transition-colors duration-300"
        >
          Read on Medium <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default MediumPostCard;
