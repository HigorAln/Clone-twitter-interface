import { Link } from "./Link";
import { DotsThree } from 'phosphor-react'
import { IconBookmarks, IconExplorer, IconHome, IconLists, IconLogo, IconMessages, IconMore, IconNotifications, IconProfile, IconSearch } from "../Icons";
import { IconTweet } from '../Icons/index';
import { NavLink } from "react-router-dom";

export function Header(){
  return(
    <header className="w-[80px] xl:w-[266px] px-3 flex flex-col sticky top-0 max-h-screen left-0">
      <div className={`flex p-[5px]`}>
        <NavLink to={""}>
          <a className={`flex gap-5 items-center p-2 px-2 py-0 xl:py-3 xl:px-3 xl:pr-3 w-fit rounded-full transition-colors hover:bg-sky-100`}>
            {<IconLogo />}
          </a>
        </NavLink>
      </div>
      <Link to="/" title="Home">
        <IconHome />
      </Link>
      <Link to="/explorer" title="Explore" classNameDiv="hidden lg:flex">
        <IconExplorer />
      </Link>
      <Link to="/explorer" title="Explore" classNameDiv="flex lg:hidden">
        <IconSearch />
      </Link>
      <Link to="/" title="Notifications">
        <IconNotifications />
      </Link>
      <Link to="/" title="Messages">
        <IconMessages /> 
      </Link>
      <Link to="/" title="Bookmarks">
        <IconBookmarks /> 
      </Link>
      <Link to="/" title="Lists">
        <IconLists /> 
      </Link>
      <Link to="/" title="Profile">
        <IconProfile /> 
      </Link>
      <Link to="/" title="More">
        <IconMore /> 
      </Link>

      <button className="bg-[#7856FF] p-[14px] w-[95%] self-center mt-4 rounded-full text-md font-bold text-white hover:bg-[#6948e8] transition-colors hidden xl:block">
        Tweet
      </button>

      <button className="bg-[#7856FF] p-[14px] w-[95%] self-center mt-4 rounded-full text-md font-bold text-white hover:bg-[#6948e8] transition-colors flex xl:hidden">
        <IconTweet className=""/>
      </button>


      <div className="flex-1 flex items-end">
        <button className="flex gap-2 rounded-full px-2 w-full h-16 mb-2 items-center hover:bg-gray-200 transition-colors">
          <img src="https://github.com/higoraln.png" className="w-10 h-10 rounded-full" />

          <span className="flex-1 h-full flex-col justify-center items-start hidden xl:flex">
            <strong className="text-sm">Higor Allan</strong>
            <p className="text-xs text-gray-500">@HigorAllan4</p>
          </span>

          <button className="items-center justify-center rounded-full hover:bg-gray-100 transition-colors  hidden xl:flex">
            <DotsThree size={20} weight="bold"/>
          </button>
        </button>
      </div>
      
    </header>
  )
}