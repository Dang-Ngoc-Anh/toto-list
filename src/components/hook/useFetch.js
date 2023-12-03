import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setErr("failed to fetch");
          alert("failded to fetch");
        }
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    err,
    loading,
  };
};

export default useFetch;
