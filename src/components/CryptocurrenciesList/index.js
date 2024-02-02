// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isValue: false}

  componentDidMount() {
    this.getListData()
  }

  getListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({currencyList: updatedList})
    this.setState({isValue: true})
  }

  render() {
    const {currencyList, isValue} = this.state

    return (
      <div>
        {!isValue ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="list-h1"> Cryptocurrency Tracker</h1>
            <img
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <ul className="list-ul-container">
              <div className="list-con1">
                <p className="list-p1">Coin Type</p>
                <div className="list-con2">
                  <p className="list-p2">USD</p>
                  <p className="list-p3">EURO</p>
                </div>
              </div>
              {currencyList.map(each => (
                <CryptocurrencyItem key={each.id} itemDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
