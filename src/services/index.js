import { getCurrencies, getRates } from "../api";
import { currenciesMapper } from "../utils/currencies";

export const getCurrencyOptions = async () => {
  try {
    return currenciesMapper(await getCurrencies());
  } catch (error) {
    throw new Error("Error getting currency options");
  }
};

export const getLastRates = async (base) => {
  try {
    return await getRates(base);
  } catch (error) {
    throw new Error("Error getting rates");
  }
};
