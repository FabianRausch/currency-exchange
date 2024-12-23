import {
  CALCULATE_RESULT,
  CHANGE_CURRENCY,
  SET_AMOUNT,
  SET_CURRENCIES_OPTIONS,
  SET_ERROR_MESSAGE,
  SET_RATES,
  SET_TITLE,
  SWITCH_CURRENCIES,
} from "./types";

export const setRates = (result) => ({ type: SET_RATES, payload: result });

export const calculateResult = () => ({ type: CALCULATE_RESULT });

export const setErrorMessagge = (error) => ({
  type: SET_ERROR_MESSAGE,
  payload: error.message,
});

export const setCurrencyOptions = (currencyOptions) => ({
  type: SET_CURRENCIES_OPTIONS,
  payload: currencyOptions,
});

export const setAmount = (e) => ({ type: SET_AMOUNT, payload: e.target.value });

export const setTitle = () => ({ type: SET_TITLE });

export const switchCurrencies = () => ({ type: SWITCH_CURRENCIES });

export const changeCurrency = (id, name) => ({
  type: CHANGE_CURRENCY,
  payload: { id, name },
});
