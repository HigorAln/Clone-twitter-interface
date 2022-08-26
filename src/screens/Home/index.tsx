import { Header } from "../../components/Header";
import { Footer } from "../Footer";
import { Main } from "../Main";


export function Home(){
  return(
    <div className="w-screen flex justify-center">
      <div className="max-w-[1600px] w-full flex min-h-screen gap-2">
        <Header />

        <Main />

        <Footer />
      </div>
    </div>
  )
}