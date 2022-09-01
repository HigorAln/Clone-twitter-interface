import { GlobeHemisphereWest } from "phosphor-react";
import { useState } from "react";
import { IconGif, IconImageUpload, IconPool } from "../Icons";
import { IconSmile, IconSchedule, IconLocalization, IconStars } from '../Icons/index';
import { ButtonIcon } from "./ButtonIcon";

export function WriteTwitter(){
  const [inputFocus, setInputFocus] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="w-full border-b border-gray-100 px-4">
      <div className="flex pt-2">
        <div className="w-14 h-full min-w-[56px]">
          <img src="https://github.com/higoraln.png" className="w-12 h-12 rounded-full" />
        </div>

        <div className="flex flex-col w-full">
          <textarea 
            placeholder="What's happening?"
            className="w-full h-full max-h-[400px] mx-2 mt-[15px] text-lg outline-none resize-none placeholder:text-gray-500"
            onFocus={() => setInputFocus(true)}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          {inputFocus && (
            <div className="border-b border-b-gray-100 my-3 ">
              <button className="flex gap-2 my-1 items-center px-2 py-[2px] hover:bg-purple-100 rounded-full transition-colors">
                <GlobeHemisphereWest size={18} className="text-primary_purple" weight="fill" />
                <p className="text-xs font-bold text-primary_purple">Everyone can reply</p>
              </button>
            </div>
          )}

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


            <button 
              className=
                "flex items-center justify-center border rounded-full bg-[#7856FF] text-white text-sm font-bold w-[75px] h-[38px] disabled:opacity-50 mb-3"
              disabled={text.length === 0}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}