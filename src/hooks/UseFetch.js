import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.cod >= 400) {
          setError(data.message);
          return;
        }
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default useFetch;
