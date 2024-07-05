function Coins({coins}) {
  return (
    <select>
        {coins.map((item)=> 
          <option>
            {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
          </option>
        )}
    </select>
  )
}

export default Coins;