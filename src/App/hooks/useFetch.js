import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const useFetch = (url) => {
  const cache = useRef(Object);
  const [counter, setCounter] = useState(0); // DEBUG
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [refetchFlag, setRefetch] = useState(false);

  const fetchData = async () => {
    setCounter(counter + 1);
    setStatus("loading");
    if (cache.current[url]) {
      setData(cache.current[url])
      setStatus("success");
    } else {
      try {
        const response = await fetch(url, {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          }
        });
        if (response.status == 403) {
          localStorage.clear();
          throw response;
        };
        if (response.ok) {
          const data = await response.json();
          cache.current[url] = data;
          setData(data);
          setStatus("success");
        } else throw response;
      } catch (e) {
        Swal.fire("Error", "Failed to fetch data, please check console for more information", "error");
        setError(true);
        console.log(e);
      }
    }
  };

  const refetch = async () => {
    const original_path = getPathFromUrl(url);
    function getPathFromUrl(val) {
      return val.split(/[?#]/)[0];
    }
    for (const path in cache.current) {
      if (getPathFromUrl(path) == original_path) delete cache.current[path];
    }
    delete cache.current[url];
    setRefetch(true);
    await fetchData();
    setRefetch(false);
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
    return () => {
      setStatus("unmounted");
    };
  }, [url]);

  useEffect(() => {
    // DEBUG
    // console.log(counter);
    // console.log("status from counter change >>> ", status);
  }, [counter]);

  useEffect(() => {
    if (refetchFlag) {
      fetchData();
    }
  }, [refetchFlag])

  return { status, data, error, refetch };
};

export default useFetch;
