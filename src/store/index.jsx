import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { getCurrencyOptions, getLastRates } from "../services";
import { appReducer } from "./reducer";
import {
  CALCULATE_RESULT,
  CHANGE_CURRENCY,
  SET_AMOUNT,
  SET_CURRENCIES_OPTIONS,
  SET_ERROR_MESSAGE,
  SET_RATES,
  SET_TITLE,
  SWITCH_CURRENCIES,
} from "./actions";

export const AppContext = createContext();

const initialState = {
  appName: "Currency exchange",
  titleHeader: "",
  lastUpdate: "",
  fromCurrency: {
    name: "US Dollars",
    id: "USD",
    symbol: "$",
    url: "",
  },
  toCurrency: {
    name: "Euros",
    id: "EUR",
    symbol: "€",
    url: "",
  },
  amount: 1,
  result: 1.0627478,
  rates: {
    USD: 1,
    EUR: 0.95,
  },
  currencyOptions: [
    {
      name: "US Dollars",
      id: "USD",
      symbol: "$",
      url: "",
    },
    {
      name: "Euros",
      id: "EUR",
      symbol: "€",
      url: "",
    },
  ],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { id } = state.fromCurrency;

  const handleGetRates = useCallback(async() => {
    getLastRates(id)
      .then((result) => {
        dispatch({ type: SET_RATES, payload: result });
        dispatch({ type: CALCULATE_RESULT });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
      });
  }, [id]);

  const handleGetCurrencyOptions = useCallback(() => {
    getCurrencyOptions()
      .then((currencyOptions) => {
        dispatch({ type: SET_CURRENCIES_OPTIONS, payload: currencyOptions });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
      });
  }, []);

  const onChangeValue = useCallback((e) => {
    dispatch({ type: SET_AMOUNT, payload: e.target.value });
    dispatch({ type: SET_TITLE });
    dispatch({ type: CALCULATE_RESULT });
  }, []);

  const onSwitchCurrency = useCallback(async() => {
    dispatch({ type: SWITCH_CURRENCIES });
    dispatch({ type: SET_TITLE });
   
  }, []);

  const onChangeCurrency = useCallback(async (id, name) => {
    dispatch({ type: CHANGE_CURRENCY, payload: { id, name } });
    dispatch({ type: SET_TITLE });
  }, []);


  useEffect(() => {
    handleGetCurrencyOptions();
  }, [handleGetCurrencyOptions]);


  useEffect(() => {
    handleGetRates();
    dispatch({ type: SET_TITLE });
  }, [id, handleGetRates]);

  return (
    <AppContext.Provider
      value={{ state, onChangeValue, onSwitchCurrency, onChangeCurrency }}
    >
      {children}
    </AppContext.Provider>
  );
};
