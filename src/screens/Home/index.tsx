import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";

export function Home(){
  return(
    <div className="flex justify-center">
      <div className="max-w-[1280px] w-full flex justify-center min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}