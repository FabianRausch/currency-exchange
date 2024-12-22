import React, { useContext } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import { AppContext } from "../store";

const namespace = "body-layout";

const Layout = ({ children }) => {
  const { state } = useContext(AppContext);
  const { appName, titleHeader, lastUpdate, fromCurrency, toCurrency } = state;
  return (
    <>
      <div className={namespace}>
        <Navbar appName={appName} />
        <Header title={titleHeader} />
        <div className={`${namespace}__content`}>{children}</div>
        <Footer
          className={`${namespace}__footer`}
          toCurrency={toCurrency}
          fromCurrency={fromCurrency}
          lastUpdate={lastUpdate}
        />
      </div>
    </>
  );
};

export default Layout;
