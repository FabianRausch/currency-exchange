import { API_URL, CURRENCIES } from "../constants";
import { handleParams } from "../utils/urls";

const getMethod =  async (url) => {
  const response = await fetch(url,{
    method: 'GET',
  });
  const data = await response.json();
  return data;
}

export const getRates = async (base) => {
  const params = handleParams({  base, symbols: CURRENCIES, });
  const url = `${API_URL}rates?${params}`
  return await getMethod(url);
}

export const getCurrencies = async () => {
  const url = `${API_URL}currencies`;
  return await getMethod(url);
}

