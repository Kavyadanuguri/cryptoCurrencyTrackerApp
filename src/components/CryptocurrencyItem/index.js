// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = itemDetails
  return (
    <li className="item-list-container" key={id}>
      <div className="item-container1">
        <img className="item-image1" alt={currencyName} src={currencyLogo} />
        <p className="item-p1">{currencyName}</p>
      </div>
      <div className="item-container2">
        <p className="item-p2">{usdValue}</p>
        <p className="item-p3">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
