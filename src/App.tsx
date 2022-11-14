import { SkeletonTheme } from "react-loading-skeleton";
import { Router } from "./router";

function App() {
  return (
    <SkeletonTheme baseColor="#e8e5ff" highlightColor="#dedaff">
      <Router />
    </SkeletonTheme>
  );
}

export default App;
