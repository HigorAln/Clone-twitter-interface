import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";


export function Home(){
  return(
    <div className="flex justify-center">
      <div className="max-w-[1280px] w-full flex min-h-screen gap-2">
        <Header />

        <Main />

        <Footer />
      </div>
    </div>
  )
}