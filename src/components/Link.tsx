import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
  to: string;
  children: ReactNode;
  classNameDiv?: string;
  title?: string;
}

export function Link({ to, className, children, title, classNameDiv}: Props){
  return(
    <div className={`flex p-[5px] ${classNameDiv}`}>
      <NavLink to={to}>
        <a className={`flex gap-5 items-center p-2 px-2 py-0 xl:py-2 xl:px-2 xl:pr-5 w-fit rounded-full transition-colors ${className ? className : "hover:bg-gray-200"}`}>
          {children}
          {title && <p className="text-[19px] hidden xl:flex">{title}</p>}
        </a>
      </NavLink>
    </div>

  )
}