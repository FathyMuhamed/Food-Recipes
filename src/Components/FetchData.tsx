import axios from "axios";
const APP_ID = "4e9f05eb";
const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

export const FetchData = async (query: string) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const result = await axios.get(url);
  return result.data.hits;
};

export const FetchAll = async () => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=${APP_ID}&app_key=${APP_KEY}
`;
  const result = await axios.get(url);
  return result.data.hits;
};
