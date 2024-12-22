import React, { useContext } from "react";
import "./styles.scss";
import Select from "../../components/select";
import Textfield from "../../components/textfield";
import { MdCurrencyExchange } from "react-icons/md";
import Footer from "../../components/footer";
import { AppContext } from "../../store";

const namespace = "currency-exchange";

const CurrencyExchange = () => {
  const { state, onChangeValue, onSwitchCurrency, onChangeCurrency } =
    useContext(AppContext);
  const {
    lastUpdate,
    fromCurrency,
    toCurrency,
    amount,
    currencyOptions,
    result,
    rates,
  } = state;

  return (
    <div className={namespace}>
      <div className={`${namespace}__inputs`}>
        <Textfield
          onChange={onChangeValue}
          value={amount}
          label={"Amount"}
          className={`${namespace}__textarea`}
          suffix={fromCurrency.symbol}
        />
        <Select
          className={`${namespace}__select`}
          options={currencyOptions}
          value={fromCurrency.id}
          label={"From"}
          onChange={onChangeCurrency}
          name="fromCurrency"
        />
        <div className={`${namespace}__btn`} onClick={onSwitchCurrency}>
          <MdCurrencyExchange size={18} />
        </div>
        <Select
          className={`${namespace}__select`}
          options={currencyOptions}
          value={toCurrency.id}
          label={"To"}
          onChange={onChangeCurrency}
          name="toCurrency"
        />
      </div>
      <div className={`${namespace}__content`}>
        <div className={`${namespace}__expected`}>
          <p className={`${namespace}__expected--primary`}>
            <span>
              {Number(amount).toFixed(2)} {fromCurrency.name}
            </span>{" "}
            =<br />
            <span>
              {Number(result).toFixed(7)} {toCurrency.name}
            </span>
          </p>
          <p className={`${namespace}__expected--secondary`}>
            {rates[fromCurrency.id]?.toFixed(2)} {fromCurrency.id} ={" "}
            {rates[toCurrency.id]?.toFixed(7)} {toCurrency.id}
          </p>
        </div>
        <div className={`${namespace}__extra-info`}>
          <div className={`${namespace}__message`}>
            <p className={`${namespace}__message--content`}>
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won’t receive this rate when
              sending money.
            </p>
          </div>
          <Footer
            className={`${namespace}__footer`}
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
            lastUpdate={lastUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
