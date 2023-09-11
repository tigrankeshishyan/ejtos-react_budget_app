import { useContext } from "react";
import { CURRENCIES } from "../config/constants";
import { AppContext } from "../context/AppContext";

const CurrencySelect = () => {
  const { dispatch, currency: currentSelectedCurrency } =
    useContext(AppContext);

  const currencyObj = CURRENCIES.find(
    (currency) => currency.symbol === currentSelectedCurrency
  );

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          className="btn btn-lg btn-success dropdown-toggle"
        >
          Currency ({`${currencyObj.symbol} ${currencyObj.name}`})
        </button>

        <div className="dropdown-menu bg-success">
          {CURRENCIES.map((currency) => {
            return (
              <a
                style={{ cursor: "pointer" }}
                key={currency.name}
                className="dropdown-item btn btn-success"
                href="#"
                onClick={() =>
                  dispatch({
                    type: "CHG_CURRENCY",
                    payload: currency.symbol,
                  })
                }
              >
                {currency.symbol} {currency.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CurrencySelect;
