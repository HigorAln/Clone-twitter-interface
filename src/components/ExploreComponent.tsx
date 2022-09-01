import { Gear, MagnifyingGlass } from "phosphor-react";

export function ExploreComponent(){
  return(
    <main className="min-w-0 md:min-w-[600px] max-w-none md:max-w-[600px] flex-2 w-full border border-gray-100 relative">
  
      <div className="flex w-full gap-7 items-center px-5 m-3">
        <label htmlFor="search_twitter" className="flex flex-1 gap-3 items-center p-[10px] px-5 rounded-full bg-[#eff3f4]">
          <MagnifyingGlass size={18} weight="light" className=""/>
          <input name="search_twitter" id="search_twitter" placeholder="Search Twitter" className="text-[15px] text-gray-800 focus:border-none outline-none bg-transparent placeholder:text-gray-500" />      
        </label>

        <Gear size={20} />
      </div>


      <span className="w-full grid grid-cols-6">
        <button className="hover:bg-gray-200 transition-all rounded-sm h-14 text-gray-900 relative">
          <p className="px-4 whitespace-nowrap text-sm after_explorer">
            For you
          </p>
        </button>
        <button className="hover:bg-gray-200 transition-all rounded-sm h-14 text-gray-900 relative">
          <p className="px-4 whitespace-nowrap text-sm after_explorer">
            COVID-19
          </p>
        </button>
        <button className="hover:bg-gray-200 transition-all rounded-sm h-14 text-gray-900 relative">
          <p className="px-4 whitespace-nowrap text-sm after_explorer">
            Trending
          </p>
        </button>
        <button className="hover:bg-gray-200 transition-all rounded-sm h-14 text-gray-900 relative">
          <p className="px-4 whitespace-nowrap text-sm after_explorer">
            News
          </p>
        </button>
        <button className="hover:bg-gray-200 transition-all rounded-sm h-14 text-gray-900 relative">
          <p className="px-4 whitespace-nowrap text-sm after_explorer">
            Sports
          </p>
        </button>
        {/* <button className="hover:bg-gray-200 transition-all rounded-sm h-14 text-gray-900 relative">
          <p className="px-4 whitespace-nowrap text-sm after_explorer">
            Entertainment
          </p>
        </button> */}
      </span>
    </main>
  )
}