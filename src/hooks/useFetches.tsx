import { useEffect, useState } from "react";

function useFetches<T>(urls: string[]) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetches = urls.map((url) =>
      fetch(url).then((res) => {
        return res.json();
      }),
    );
    Promise.all(fetches)
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [urls]);

  return { data, loading, error };
}

export default useFetches;
