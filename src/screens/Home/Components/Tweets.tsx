import { DotsThree } from "phosphor-react";
import {
  IconComment,
  IconFontComment,
  IconFontHealth,
  IconFontReTweet,
  IconHeath,
  IconReTwitter,
  IconShare,
} from "../../../Icons";
import { ButtonIcon } from "../../../components/ButtonIcon";
import { formatDistanceToNow } from "date-fns";
import PtBr from "date-fns/locale/pt-BR";

interface Props {
  name: string;
  username: string;
  interactions: {
    comments: string;
    likes: string;
    reTwitters: string;
  };
  avatar_url: string;
  font?: {
    name: string;
    interaction: "HEALTH" | "COMMENT" | "FORWARD";
  };
  date: string;
  description: string;
}

export function Tweet({
  avatar_url,
  name,
  date,
  font,
  interactions,
  username,
  description,
}: Props) {
  const fontIcons = {
    HEALTH: () => <IconFontHealth />,
    FORWARD: () => <IconFontReTweet />,
    COMMENT: () => <IconFontComment />,
  };

  const dateDistance = formatDistanceToNow(new Date(date), {
    locale: PtBr,
    addSuffix: false,
  });
  const dateFormatted = dateDistance.includes("horas")
    ? `${dateDistance.replace(/\D/gi, "")}h`
    : `${dateDistance.replace(/\D/gi, "")}d`;

  return (
    <div className="border-b py-3 flex flex-col cursor-pointer hover:bg-gray-100 transition-colors">
      {font && (
        <span className="pl-14 text-[13px] font-bold text-gray-500 flex items-center gap-3">
          <span>{fontIcons[font.interaction]()}</span>
          {font.name}
        </span>
      )}
      <div className="flex px-4 gap-3">
        <img src={avatar_url} className="w-12 h-12 rounded-full" />

        <div className="flex flex-col flex-1">
          <span className="flex justify-between relative">
            <span className="flex gap-2">
              <strong className="text-sm">{name} </strong>
              <p className="text-sm text-gray-500">
                @{username} · {dateFormatted}
              </p>
            </span>

            <ButtonIcon className="absolute right-0 -top-2">
              <DotsThree size={20} weight="bold" className="" />
            </ButtonIcon>
          </span>

          <span className="mt-1">
            <p className="text-sm text-gray-800">{description}</p>
          </span>

          <span className="flex justify-between -ml-2 mt-2">
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-sky-100">
                <IconComment />
                <p className="text-xs text-gray-700">{interactions.comments}</p>
              </ButtonIcon>
            </div>
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-emerald-50">
                <IconReTwitter />
                <p className="text-xs text-gray-700">
                  {interactions.reTwitters}
                </p>
              </ButtonIcon>
            </div>
            <div className="flex flex-1">
              <ButtonIcon className="hover:bg-rose-200">
                <IconHeath />
                <p className="text-xs text-gray-700">{interactions.likes}</p>
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
  );
}
