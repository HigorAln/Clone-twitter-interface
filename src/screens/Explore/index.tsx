import { Header } from "../../components/Header";
import { Footer } from "../Home/Components/Footer";
import { ExploreComponent } from "./Components/ExploreComponent";

export function Explore() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1280px] w-full flex justify-center min-h-screen">
        <Header />
        <ExploreComponent />
        <Footer />
      </div>
    </div>
  );
}
