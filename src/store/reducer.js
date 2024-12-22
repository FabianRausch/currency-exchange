import { BASE_CURRENCY } from "../constants";
import { formatDate } from "../utils/time";
import {
  SET_TITLE,
  SET_AMOUNT,
  SWITCH_CURRENCIES,
  CHANGE_CURRENCY,
  CALCULATE_RESULT,
  SET_RATES,
  SET_ERROR_MESSAGE,
  SET_CURRENCIES_OPTIONS,
} from "./actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        titleHeader: `${state.amount} ${state.fromCurrency.id} to ${state.toCurrency.id} - Convert ${state.fromCurrency.name} to ${state.toCurrency.name}`,
      };
    case SET_AMOUNT:
      const positiveNumberRegex = /^$|^(0|[1-9]\d*)(\.\d*)?$/;
      if (!positiveNumberRegex.test(action.payload)) return;
      return { ...state, amount: action.payload };
    case SWITCH_CURRENCIES:
      return {
        ...state,
        fromCurrency: state.toCurrency,
        toCurrency: state.fromCurrency,
      };
    case CHANGE_CURRENCY:
      const currency = state.currencyOptions.find(
        (option) => option.id === action.payload.id
      );
      return { ...state, [action.payload.name]: currency };
    case CALCULATE_RESULT:
      return {
        ...state,
        result: state.rates[state.toCurrency.id] * state.amount,
      };
    case SET_ERROR_MESSAGE:
      return { ...state, loading: false, error: action.payload };

    case SET_RATES:
      return {
        ...state,
        rates: action.payload.rates,
        lastUpdate: formatDate(new Date(action.payload.date)),
      };
    case SET_CURRENCIES_OPTIONS:
      return {
        ...state,
        currencyOptions: action.payload,
        fromCurrency: action.payload.find(({ id }) => id === BASE_CURRENCY),
        toCurrency: action.payload.filter(({ id }) => id !== BASE_CURRENCY)[0],
      };
    default:
      return state;
  }
};
