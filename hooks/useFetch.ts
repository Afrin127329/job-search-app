import { useEffect, useState } from "react";
// import axios from 'axios';
import { RAPID_API_KEY } from "@env";
import { SearchQuery } from "../shared/types";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint: string, query: SearchQuery) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: { ...query },
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
};
