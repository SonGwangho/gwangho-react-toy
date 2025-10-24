import {  Suspense, useEffect } from "react";
import {   Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useDarkModeStore } from "./store/darkModeStore";
import { useLoadingStore } from "./store/pageLoadingStore";
import HomePage from "./pages/HomePage";
import GlobalLoader from "./components/GlobalLoader";

function App() {
  const { isDark, toggleDarkmode } = useDarkModeStore();
  const location = useLocation();
  const { start, stop } = useLoadingStore();

  // 다크모드 토글
  useEffect(() => {
    const state = isDark ? "dark" : "light";
    document.body.className = state;
  }, [isDark]);

  // 페이지 로딩
  useEffect(() => {
    stop();
    start();
  }, [location.pathname]);

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/">로고</Link>
          <Link to="/">어딘가로</Link>
        </nav>
        <button
          onClick={toggleDarkmode}
          className="themeButton"
        >
          테마 변경 - {isDark ? "☀️" : "🌙"}
        </button>
      </div>
      <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Suspense>
    </>
  );
}

export default App;
