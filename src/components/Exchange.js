import React from "react";

export default function Exchange() {
  const [data, setData] = React.useState([]);
  const [currency, setCurrency] = React.useState("USD");

  React.useEffect(() => {
    const url = `http://rest.coinapi.io/v1/exchangerate/${currency}?invert=false&filter_asset_id=EUR;UAH;RUB&apikey=152A36D9-79E1-4D50-A2F1-79AAD1D6E16A`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.rates));
  }, [currency]);

  return (
    <div className="exchange">
      <h2>Exchange rate to UAH:</h2>
      <button className="button__exchange" onClick={() => setCurrency("USD")}>
        USD
      </button>
      <button className="button__exchange" onClick={() => setCurrency("EUR")}>
        EUR
      </button>
      <ul>
        {data.map((item) => (
          <li>
            {item.asset_id_quote} : {item.rate}
          </li>
        ))}
      </ul>
    </div>
  );
}
