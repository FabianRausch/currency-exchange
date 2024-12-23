import React, { createContext, useReducer } from "react";
import { appReducer } from "./reducer";
import useCurrencyData from "../hooks/useCurrencyData";

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
  const { onChangeValue, onSwitchCurrency, onChangeCurrency } = useCurrencyData(
    id,
    dispatch
  );

  return (
    <AppContext.Provider
      value={{ state, onChangeValue, onSwitchCurrency, onChangeCurrency }}
    >
      {children}
    </AppContext.Provider>
  );
};
