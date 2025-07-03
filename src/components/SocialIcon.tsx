import { LucideProps } from "lucide-react";
import { FC } from "react";

const SocialIcon: FC<{
  href: string;
  icon: React.ElementType<LucideProps>;
}> = ({ href, icon: Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border-2 border-black w-12 h-12 flex items-center justify-center shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
    >
      <Icon className="w-6 h-6 text-black" />
    </a>
  );
};

export default SocialIcon;
