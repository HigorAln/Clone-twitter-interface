import { DotsThree } from "phosphor-react";
import { IconComment, IconHeath, IconReTwitter, IconShare } from "../Icons";
import { ButtonIcon } from './ButtonIcon';



export function Tweets(){
  return(
    <div className="border-b py-1 flex flex-col cursor-pointer hover:bg-gray-100 transition-colors">
      <span className="pl-14 text-[13px] font-bold text-gray-500 flex gap-3"><span>♥️</span> Erick Wendel liked</span>
      <div className="flex px-4 gap-3">
        <img src="https://github.com/higoraln.png" className="w-12 h-12 rounded-full" />
        
        <div className="flex flex-col flex-1">
          <span className="flex justify-between relative">
            <span className="flex gap-2">
              <strong className="text-sm">Naju{" "}</strong>
              <p className="text-sm text-gray-500">@_anajucosta · 1h</p>
            </span>

            <ButtonIcon className="absolute right-0 -top-2">
              <DotsThree size={20} weight="bold" className=""/>
            </ButtonIcon>
          </span>

          <span className="mt-1">
            <p className="text-sm text-gray-800">
              To bem insatisfeita Favip, bem insatisfeita
              To bem insatisfeita Favip, bem insatisfeita
              To bem insatisfeita Favip, bem insatisfeita
              To bem insatisfeita Favip, bem insatisfeita
              To bem insatisfeita Favip, bem insatisfeita
              To bem insatisfeita Favip, bem insatisfeita
              To bem insatisfeita Favip, bem insatisfeita
            </p>
          </span>

          <span className="flex justify-between -ml-2 mt-2">
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-sky-100">
                <IconComment />
                <p className="text-xs text-gray-700">2</p>
              </ButtonIcon>
            </div>
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-emerald-50">
                <IconReTwitter />
                <p className="text-xs text-gray-700">35</p>
              </ButtonIcon>
            </div>
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-rose-200">
                <IconHeath />
                <p className="text-xs text-gray-700">86</p>
              </ButtonIcon>
            </div>
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-sky-100">
                <IconShare />
              </ButtonIcon>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}