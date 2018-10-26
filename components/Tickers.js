const Tickers = ({data, selectTicker, filterTickers, markets, currentMarket, changeMarket}) => {
	return (
		<div className="tab-pane" role="tabpanel" aria-labelledby="nav-home-tab">
			<div className="search">
				<input className="form-control rounded-0" type="text" placeholder="Search" onKeyUp={filterTickers} />
				<a href="#" className="clear">&times;</a>
			</div>
			<select className="form-control w-100 rounded-0" value={currentMarket} onChange={changeMarket}>
				{markets.map(m => (
					<option key={m} value={m}>Market: {m}</option>
				))}
			</select>
			<div className="ticker-header d-flex py-2 text-center">
				<div className="col-3">Pair</div>
				<div className="col-3">Last Price</div>
				<div className="col-3">24h Price</div>
				<div className="col-3">24h Vol</div>
			</div>
			<div className="list-group rounded-0" id="tickers">
				{data.map(t => (
					<a className="list-group-item list-group-item-action"
						href="#" 
						key={t.symbol}
						data-symbol={t.symbol} 
						onClick={selectTicker}
						>
						<div className="row text-center">
							<div className="col-3 p-0">{t.symbol} </div>
							<div className="col-3">{t.lastDealPrice}</div>
							<div className={`col-3 ${t.changeRate > 0 ? 'text-success' : 'text-warning'}`}>
								{(t.changeRate * 100).toFixed(2)}%
							</div>
							<div className="col-3">{t.volValue.toFixed(2)}</div>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default Tickers