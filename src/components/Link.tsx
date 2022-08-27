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
    <div className="flex p-[5px]">
      <NavLink to={to}>
        <a className={`flex gap-5 items-center p-1 px-2 pr-5 w-fit rounded-full transition-colors ${className ? className : "hover:bg-gray-200"}`}>
          {children}
          {title && <p className="text-[19px]">{title}</p>}
        </a>
      </NavLink>
    </div>

  )
}