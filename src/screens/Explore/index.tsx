import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ExploreComponent } from "../../components/ExploreComponent";

export function Explore(){
  return(
    <div className="flex justify-center">
      <div className="max-w-[1280px] w-full flex justify-center min-h-screen">
        <Header />
        <ExploreComponent />
        <Footer />
      </div>
    </div>
  )
}