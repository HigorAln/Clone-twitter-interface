import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
  to: string;
  children: ReactNode;
  title?: string;
}

export function Link({ to, className, children, title}: Props){
  return(
    <NavLink to={to}>
      <a className={`flex gap-6 items-center p-2 px-4 w-fit ${className} rounded-full hover:bg-gray-200 transition-colors`}>
        {children}
        {title && <p className="text-[24px]">{title}</p>}
      </a>
    </NavLink>
  )
}