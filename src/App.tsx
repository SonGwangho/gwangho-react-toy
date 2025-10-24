import { Suspense, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDarkModeStore } from "./store/darkModeStore";
import HomePage from "./pages/HomePage";
import GlobalLoader from "./components/GlobalLoader";
import TestPage from "./pages/TestPage";

function App() {
  const { isDark, toggleDarkmode } = useDarkModeStore();

  // 다크모드 토글
  useEffect(() => {
    const state = isDark ? "dark" : "light";
    document.body.className = state;
  }, [isDark]);

  return (
    <>
      <div className='header'>
        <nav>
          <Link to='/'>로고</Link>
          <Link to='/test'>테스트 페이지</Link>
        </nav>
        <button onClick={toggleDarkmode} className='themeButton'>
          테마 변경 - {isDark ? "☀️" : "🌙"}
        </button>
      </div>
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
