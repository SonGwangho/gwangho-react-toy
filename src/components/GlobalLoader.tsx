import { useLoadingStore } from "../store/pageLoadingStore";

function GlobalLoader() {
  const { loading } = useLoadingStore();

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "1.2rem",
        zIndex: 9999,
      }}
    >
      🔄 페이지 불러오는 중...
    </div>
  );
}

export default GlobalLoader;
