import { IconGif, IconImageUpload, IconPool } from "../Icons";
import { IconSmile, IconSchedule, IconLocalization, IconStars } from '../Icons/index';
import { ButtonIcon } from "./ButtonIcon";



export function WriteTwitter(){
  return (
    <div className="w-full border-b border-gray-100 px-4">
      <span className="flex justify-between">
        <h1 className="my-3 text-lg font-bold">Home</h1>
        
        {/* <ButtonIcon> */}
          <IconStars />
        {/* </ButtonIcon> */}
      </span>

      <div className="flex pt-2">
        <div className="w-14 h-full">
          <img src="https://github.com/higoraln.png" className="w-12 h-12 rounded-full" />
        </div>

        <div className="flex flex-col w-full">
          <textarea 
            placeholder="What's happening?"
            className="mt-[15px] mx-2 text-lg resize-none placeholder:text-gray-500"
          />

          <div className="flex flex-1 justify-between">
            <span className="flex h-fit gap-[2px]">
              <ButtonIcon>
                <IconImageUpload />
              </ButtonIcon>

              <ButtonIcon>
                <IconGif />
              </ButtonIcon>
              
              <ButtonIcon>
                <IconPool />
              </ButtonIcon>

              <ButtonIcon>
                <IconSmile />
              </ButtonIcon>

              <ButtonIcon>
                <IconSchedule />
              </ButtonIcon>

              <ButtonIcon>
                <IconLocalization className="opacity-50 cursor-default" />
              </ButtonIcon>
            </span>


            <button className="flex items-center justify-center border rounded-full bg-[#7856FF] text-white font-bold w-[75px] h-[38px] opacity-50 mb-3">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}