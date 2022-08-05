import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setData(null);
    setIsPending(true);
    setError(null);
    async function fetchData() {
      try {
        const response = await fetch("https://api.rawg.io/api/games?key=c081ece3d564465e863515d149c45031");
        if (!response.ok) {
          throw new Error("Could not fetch the data.");
        }
        const result = await response.json();
        setData(result.results);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        if (error.name === "AbortError") {
          console.log(error.message);
          setError(error.message);
        } else {
          setError(error.message);
        }
      }
    }
    fetchData();
    return () => controller.abort();
  }, [url]);
   
  return { data, isPending, error };
};
