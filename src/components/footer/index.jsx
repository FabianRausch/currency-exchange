import React from "react";

const namespace = "app-footer";

const Footer = ({ toCurrency, fromCurrency, lastUpdate, className }) => {

  return (
    <footer className={`${namespace} ${className}`}>
      <p className={`${namespace}__text`}>
        <a target="_blank" rel="noreferrer" href={fromCurrency.url}>
          {fromCurrency.name}
        </a>{" "}
        to{" "}
        <a target="_blank" rel="noreferrer" href={toCurrency.url}>
          {toCurrency.name}
        </a>{" "}
        conversion — Last updated {lastUpdate}
      </p>
    </footer>
  );
};

export default Footer;
