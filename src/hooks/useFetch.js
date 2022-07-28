import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setData(null);
    setIsPending(true);
    setError(null);
    async function fetchData() {
      try {
        const response = await fetch(url, {
          signal,
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_API_HOST,
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error("Could not fetch the data.");
        }
        const result = await response.json();
        const total = response.headers.get("x-total-count");
        setpageCount(Math.ceil(total / limit));
        setItems(result);
        setData(result);
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
  }, [url], [limit]);
   
  return { data, isPending, error };
};
