import { Tweets } from "../components/Tweets";
import { WriteTwitter } from "../components/WriteTwitter";
import { IconStars } from "../Icons";

export function Main(){
  return(
    <main className="max-w-[600px] min-w-[600px] flex-2 w-full border border-gray-100 relative">
      <span className="flex justify-between px-4 sticky z-10 top-0 bg-white">
        <h1 className="py-3 text-lg font-bold">Home</h1>
        
        {/* <ButtonIcon> */}
          <IconStars />
        {/* </ButtonIcon> */}
      </span>

      <WriteTwitter />

      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
    </main>
  )
}