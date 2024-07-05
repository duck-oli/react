import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [flip, setFlip] = useState(false);
  const [usd, setUsd] = useState(1);

  const onChange = (event) => setValue(event.target.value);
  const reset = () => setValue(0);
  const onSelect = (event) => setUsd(+(coins[event.target.selectedIndex].quotes.USD.price));
  const changeFlip = () => {
    setFlip((val) => !val);
    reset();
  };
  

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json()) 
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
      
      setUsd(coins[0].quotes.USD.price);
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr/>
      {loading ? <strong>Loading...</strong> : (
        <select onChange={onSelect} >
          {coins.map((item, index)=> 
            <option key={index} data={item.quotes.USD.price}>
              {item.name} ({item.symbol})
            </option>
          )}
        </select>
      )}
      <div>
          <input value={!flip ? value : value*usd} onChange={onChange} type="number" placeholder="USD" disabled={flip}/>
        </div>
      <div>
        <input  value={flip ? value : (value/usd)} onChange={onChange} type="number" placeholder="Coin" disabled={!flip}/>
      </div>
        <button onClick={reset}>reset</button>
        <button onClick={changeFlip}>flip</button>
    </div>
  );
}

export default App;