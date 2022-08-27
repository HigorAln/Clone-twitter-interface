import { MagnifyingGlass } from "phosphor-react";
import { NewNotice } from "./NewNotice";


export function Footer(){
  return(
    <div className="flex-col flex-1 w-full px-4 my-2 py-2 overflow-hidden sticky top-0 max-h-screen hidden lg:flex">
      <label htmlFor="search_twitter" className="flex gap-3 items-center p-[9px] px-5 rounded-full bg-[#eff3f4]">
        <MagnifyingGlass size={18} weight="light" className=""/>
        <input name="search_twitter" id="search_twitter" placeholder="Search Twitter" className="text-[15px] text-gray-800 focus:border-none outline-none bg-transparent placeholder:text-gray-500" />      
      </label>

      <div className="bg-[#f3f5f6] mt-4 w-full rounded-2xl h-auto flex flex-col gap-4 overflow-hidden">
        <strong className="text-xl m-4 mb-0">What's happening</strong>

        <NewNotice 
          tags={["Politics", "Last night"]} 
          title="Bolsonaro diz que “não se veem” pessoas “pedindo pão na porta da padaria”; jornalistas reagem com depoimentos e dados da fome" 
          url="https://pbs.twimg.com/semantic_core_img/1563278308942290944/Fk6Yq5Qn?format=jpg&name=120x120"
        />

        <NewNotice 
          tags={["Trending in Brazil"]} 
          title="BOBO DA CORTE" 
          tweets={"22.4K"}
        />

        <NewNotice 
          tags={["Trending in Brazil"]} 
          title="GENTEEEE NÃO ACREDITOOOOO" 
          tweets={"25.2K"}
        />
        <NewNotice 
          tags={["Politics", "LIVE"]} 
          title="Eleições 2022: as últimas notícias sobre a disputa pelo governo de Pernambuco" 
          url="https://pbs.twimg.com/semantic_core_img/1547658863872057347/FgyxD_mq?format=jpg&name=240x240"
        />
        
        <button 
          className=
            "text-violet-500 self-start text-[13px] hover:bg-gray-200 w-full h-12 text-start px-5 tracking-tight"
        >
          Show more
        </button>
      </div>
    </div>
  )
}