import { ReactNode } from "react";

const Button = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <a
      className="rounded-tr-[20px] bg-[#EB6547] py-3 px-4 text-[8px] font-bold uppercase tracking-[2px] text-[#252429] transition-all hover:bg-[#F49684] md:rounded-tl-[30px] md:rounded-tr-none md:py-4 md:px-7 md:text-sm md:font-medium"
      href={link}
    >
      {children}
    </a>
  );
};
export default Button;
