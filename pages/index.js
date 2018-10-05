import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Tickers from '../components/Tickers';
import Trade from '../components/Trade';
import Orders from '../components/Orders';

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
    this.setState({...this.props});
  }
  getTickers() {
    
  }
	render() {
    const { tickers } = this.state;
		return (
      <Layout>
        <Tickers data={tickers} />
        <Trade />
        <Orders />
      </Layout>
    )
	}
}

export default Index