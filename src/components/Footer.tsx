import { MagnifyingGlass } from "phosphor-react";


export function Footer(){
  return(
    <footer className="flex flex-col flex-1  w-full px-4 py-2">
      <label htmlFor="search_twitter" className="flex gap-3 items-center p-[9px] px-5 rounded-full bg-[#eff3f4]">
        <MagnifyingGlass size={18} weight="light" className=""/>
        <input name="search_twitter" id="search_twitter" placeholder="Search Twitter" className="text-[15px] text-gray-800 focus:border-none outline-none bg-transparent placeholder:text-gray-500" />      
      </label>

      <div className="bg-[#f3f5f6] mt-4 w-full h-20 rounded-2xl p-3">
        <strong className="text-xl">What's happening</strong>

        
      </div>
    </footer>
  )
}