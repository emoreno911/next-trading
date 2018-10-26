import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Tickers from '../components/Tickers';
import Trade from '../components/Trade';
import Orders from '../components/Orders';
import { groupBy } from '../components/utils';

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.kucoin.com/v1/open/tick')
    const response = await res.json()

    console.log(`Show data fetched. Count: ${response.data.length}`)

    return {
      tickers: response.data,
      lastupdated: response.timestamp
    }
  }
  componentWillMount() {
    const currentMarket = 'BTC';
    const tickers = groupBy(this.props.tickers, 'coinTypePair');
    const markets = Object.keys(tickers);
    const filteredTickers = tickers[currentMarket];
    const currentTicker = tickers[currentMarket][0];

    this.setState({
      markets,
      tickers,
      currentMarket, 
      currentTicker,
      filteredTickers
    });
  }
  getTickers() {
    
  }
  getOrders() {

  }
  setOrder() {
    
  }
  handleChangeMarket = (evt) => {
    const currentMarket = evt.currentTarget.value;
    const filteredTickers = this.state.tickers[currentMarket];
    this.setState({ currentMarket, filteredTickers });
  }
  handleSelectTicker = (evt) => {
    const symbol = evt.currentTarget.getAttribute('data-symbol');
    const { tickers, currentMarket } = this.state;
    const currentTicker = tickers[currentMarket].find(t => t.symbol === symbol);
    this.setState({currentTicker});
    this.layout.selectTab(2);
  }
  handleFilterTickers = (evt) => {
    const fx = evt.currentTarget.value;
    const { tickers, currentMarket } = this.state;
    const filteredTickers = tickers[currentMarket].filter(t => t.symbol.toLowerCase().indexOf(fx) !== -1);
    this.setState({filteredTickers});
  }
	render() {
    const { filteredTickers, currentTicker, markets, currentMarket } = this.state;
		return (
      <Layout ref={el => this.layout = el}>
        <Tickers 
          data={filteredTickers} 
          markets={markets}
          currentMarket={currentMarket}
          selectTicker={this.handleSelectTicker}
          filterTickers={this.handleFilterTickers}
          changeMarket={this.handleChangeMarket}
          />
        <Trade ticker={currentTicker}/>
        <Orders />
      </Layout>
    )
	}
}

export default Index