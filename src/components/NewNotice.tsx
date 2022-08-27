import { DotsThree } from "phosphor-react";
import { ButtonIcon } from "./ButtonIcon";

interface Props {
  tags: string[];
  title: string;
  url?: string;
  tweets?: string;
}

export function NewNotice({tags, title, url, tweets}: Props){
  return (
    <div className="flex w-full px-4">
      <div className="flex w-full">
        <span className="flex-1">
          <p className="text-[13px] text-gray-600">
            {tags.map((tag, index) => index === 1 ? `· ${tag}` : `${tag} `)}
          </p>

          <strong className="text-sm text-gray-900 tracking-tight">
            {title}
          </strong>
          <br />
          {tweets && (
            <span className="text-xs text-gray-500">
              {tweets} Tweets
            </span>
          )}
        </span>

        <span className="w-auto">
          {url && <div className={`${`bg-[url('${url}')]`} max-w-[68px] min-w-[68px] h-[68px] bg-cover bg-no-repeat bg-center rounded-xl`}/>}

          {!url && (
            <ButtonIcon className="hover:bg-sky-100">
              <DotsThree size={22} weight="bold" />
            </ButtonIcon>
          )}
        </span>

        
      </div>
    </div>   
  )
}