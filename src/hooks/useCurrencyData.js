/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { getCurrencyOptions, getLastRates } from "../services";
import { calculateResult, changeCurrency, setAmount, setCurrencyOptions, setErrorMessagge, setRates, setTitle, switchCurrencies } from "../store/actions";


export default function useCurrencyData(id, dispatch) {

    const handleGetRates = useCallback(() => {
        getLastRates(id)
          .then((result) => {
            dispatch(setRates(result));
            dispatch(calculateResult());
          })
          .catch((error) => {
            dispatch(setErrorMessagge(error));
          });
      }, [id]);
    
      const handleGetCurrencyOptions = useCallback(() => {
        getCurrencyOptions()
          .then((currencyOptions) => {
            dispatch(setCurrencyOptions(currencyOptions));
          })
          .catch((error) => {
            dispatch(setErrorMessagge(error));
          });
      }, []);
    
      const onChangeValue = (e) => {
        const positiveNumberRegex = /^$|^([0-9]\d*)(\.\d*)?$/;
          if (!positiveNumberRegex.test(e.target.value)) return;
        dispatch(setAmount(e));
        dispatch(setTitle());
        dispatch(calculateResult());
      }
    
      const onSwitchCurrency = () => {
        dispatch(switchCurrencies());
        dispatch(setTitle());
      }
    
      const onChangeCurrency = (id, name) => {
        dispatch(changeCurrency(id, name));
        dispatch(setTitle());
      }
    
      useEffect(() => {
        handleGetCurrencyOptions();
      }, [handleGetCurrencyOptions]);
    
      useEffect(() => {
        handleGetRates();
        dispatch(setTitle());
      }, [id, handleGetRates]);

    return {
        onChangeValue,
        onSwitchCurrency,
        onChangeCurrency
    }
}