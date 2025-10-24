import { useEffect } from "react";
import { useLoadingStore } from "../store/pageLoadingStore";

function HomePage() {
  const { stop } = useLoadingStore();

  useEffect(() => {
    stop();
  }, []);
  return <div>페이지</div>;
}

export default HomePage;
