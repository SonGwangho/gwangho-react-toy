import { useEffect, useState } from "react";

function useLocalData<T>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!path) return;

    setLoading(true);
    import(`../data/${path}.json`)
      .then((module) => {
        setData(module.default);
        setError(null);
      })
      .catch((err) => {
        setError(`파일을 불러올 수 없습니다: ${err}`);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading, error };
}
export default useLocalData;
