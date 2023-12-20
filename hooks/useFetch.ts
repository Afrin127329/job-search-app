import { RAPID_API_KEY } from "@env";
import axios from "axios";
import { useEffect, useState } from "react";
import { SearchQuery } from "../shared/types";

const rapidApiKey = RAPID_API_KEY;

export const useFetch = (endpoint: string, query: SearchQuery) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState<any[]>([]);

  // console.log(data);
  // console.log(RAPID_API_KEY);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setLoading(false);
    } catch (error: any) {
      setErr(error);
      alert("Something went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // If data is not fetched properly
  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, err, refetch };
};
