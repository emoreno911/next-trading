//import Head from 'next/head'

const Tickers = (props) => (
  <div className="tab-pane" role="tabpanel" aria-labelledby="nav-home-tab">
		<div className="search">
			<input className="form-control rounded-0" type="text" placeholder="Search" id="search-input" />
			<a href="#" className="clear">&times;</a>
		</div>
		<div className="ticker-header d-flex py-2 text-center">
			<div className="col-3">Pair</div>
			<div className="col-3">Last Price</div>
			<div className="col-3">24h Price</div>
			<div className="col-3">24h Vol</div>
		</div>
		<div className="list-group rounded-0" id="tickers"></div>
	</div>
)

export default Tickers