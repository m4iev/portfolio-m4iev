import { FC, ReactNode } from "react";

const NeoButton: FC<{
  children: ReactNode;
  href: string;
  className?: string;
}> = ({ children, href, className = "" }) => {
  return (
    <a
      href={href}
      className={`inline-block bg-yellow-300 text-black font-bold py-3 px-6 border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export default NeoButton;
