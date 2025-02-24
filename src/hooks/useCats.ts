import { useState } from "react";
import axios from "axios";
import { CatImage } from "../types";

const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const API_URL = "https://api.thecatapi.com/v1/images/search";

export const useCats = () => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCats = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(API_URL, {
        params: {
          limit: 100,
          has_breeds: 1,
          api_key: API_KEY,
        },
      });

      setCats(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || error.message);
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error fetching cats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { cats, isLoading, error, getCats };
};
