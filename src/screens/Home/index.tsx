import { Header } from "../../components/Header";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";

export function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1280px] w-full flex justify-center min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
