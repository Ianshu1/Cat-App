import { useState } from "react";
import axios from "axios";
import { CatImage } from "../types";

export const useCats = () => {
  const [cats, setCats] = useState<CatImage[]>([]);

  const getCats = async () => {
    try {
      const response = await axios.get<CatImage[]>(
        "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1"
      );
      setCats(response.data);
    } catch (error) {
      console.error("Error fetching cats:", error);
      setCats([]);
    }
  };

  return {
    cats,
    getCats,
  };
};
