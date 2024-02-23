import axios from "axios";

export const fetchData = async (endpoint: string) => {
  const result = await axios(`https://razer-store.cytr.us/${endpoint}`);
  return result.data;
};
