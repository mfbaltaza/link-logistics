import { ReactNode } from "react";

const Button = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <a
      className="md:rounded-tl-[30px] md:rounded-tr-none rounded-tr-[20px] py-3 px-4 md:py-4 md:px-7 text-[8px] md:text-sm font-bold md:font-medium bg-[#EB6547] hover:bg-[#F49684] uppercase tracking-[2px] transition-all text-[#252429]"
      href={link}
    >
      {children}
    </a>
  );
};
export default Button;
