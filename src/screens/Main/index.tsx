import { Tweets } from "../../components/Tweets";
import { WriteTwitter } from "../../components/WriteTwitter";




export function Main(){
  return(
    <main className="max-w-[600px] flex-1 w-full border border-gray-100">
      <WriteTwitter />

      <Tweets />
    </main>
  )
}