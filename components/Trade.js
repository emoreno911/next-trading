const Trade = ({ticker}) => (
  <div className="tab-pane" role="tabpanel" aria-labelledby="nav-profile-tab">
	  	
	  	<div className="col-12 d-flex flex-wrap py-4">
	  		<div className="col-6">
	  			<h3 className="text-secondary">{ticker.symbol}</h3>
	  		</div>
	  		<div className="col-6">
	  			<h3 className={`text-right ${ticker.changeRate >= 0 ? 'text-success':'text-danger'}`}>
						{(ticker.changeRate * 100).toFixed(2)} %
					</h3>
	  		</div>

	  		<div className="col-4">
	  			<small>Buy</small>
	  			<span className="d-block text-light"> {ticker.buy}</span>
	  		</div>
	  		<div className="col-4">
	  			<small>Sell</small>
	  			<span className="d-block text-light"> {ticker.sell}</span>
	  		</div>
	  		<div className="col-4">
	  			<small>24h High</small>
	  			<span className="d-block text-light"> {ticker.high}</span>
	  		</div>
	  		<div className="col-4">
	  			<small>24h Low</small>
	  			<span className="d-block text-light"> {ticker.low}</span>
	  		</div>
	  		<div className="col-4">
	  			<small>Total Vol</small>
	  			<span className="d-block text-light"> {ticker.vol}</span>
	  		</div>
	  		<div className="col-4">
	  			<small>Last Checked</small>
	  			<span className="d-block text-light">X min ago</span>
	  		</div>

	  	</div>

	  	<div className="col-12 order-form">
	  		<div className="card">
	  			<h5 className="card-header">Order Form</h5>
		        <div className="card-body">

		          <div className="form-group">
		          	<div className="custom-control custom-radio custom-control-inline">
				      <input type="radio" id="customRadio0" name="customRadio" className="custom-control-input" />
				      <label className="custom-control-label">Market</label>
				    </div>
				    <div className="custom-control custom-radio custom-control-inline">
				      <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
				      <label className="custom-control-label">Limit</label>
				    </div>
				    <div className="custom-control custom-radio custom-control-inline">
				      <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
				      <label className="custom-control-label">Stop</label>
				    </div>
				  </div>
		          
					<div className="row">
					<div className="col-md-6 form-group">
					    <label className="col-form-label col-form-label-lgx">Price</label>
					    <div className="form-group">
					    	<div className="input-group">
					    		<input className="form-control" type="text" placeholder="Price" />
							    <div className="input-group-append">
						          <span className="input-group-text">{ticker.coinTypePair}</span>
						        </div>
					    	</div>
					    </div>	    
					</div>
					<div className="col-md-6 form-group">
					    <label className="col-form-label col-form-label-lgx">Amount</label>
					    
					    <div className="form-group">
					    	<div className="input-group">
					    		<input className="form-control" type="text" placeholder="Amount"/>
							    <div className="input-group-append">
						          <span className="input-group-text">{ticker.coinType}</span>
						        </div>
					    	</div>
					    </div>
					</div>
					</div>

		          <div className="d-flex">
		          	<button type="button" className="btn flex-fill btn-success mr-1">BUY</button>
		          	<button type="button" className="btn flex-fill btn-warning">SELL</button>
		          </div>

		        </div>
		      </div>
	  	</div>
	  	
	  	<div className="col-12 my-4">
	  		<div className="card">
	  			<h5 className="card-header">{ticker.symbol} Orders</h5>
	  			<div className="card-body p-0">
	  				<table className="table table-hover table-striped m-0">
				      <thead>
				        <tr>
				          <th scope="col">Date</th>
				          <th scope="col">Type</th>
				          <th scope="col">Price</th>
				          <th scope="col">Amount</th>
				          <th scope="col">Total</th>
				        </tr>
				      </thead>
				      <tbody>
				        <tr>
				          <th scope="row">10/11/2018</th>
				          <td className="text-success">BUY</td>
				          <td>0.0035</td>
				          <td>0.5</td>
				          <td>0.00175</td>
				        </tr>
				        <tr>
				          <th scope="row">10/11/2018</th>
				          <td className="text-warning">SELL</td>
				          <td>0.0035</td>
				          <td>0.5</td>
				          <td>0.00175</td>
				        </tr>
				        <tr>
				          <th scope="row">10/11/2018</th>
				          <td className="text-success">BUY</td>
				          <td>0.0035</td>
				          <td>0.5</td>
				          <td>0.00175</td>
				        </tr>
				      </tbody>
				    </table>

	  			</div>
	  		</div>
	  	</div>

	  	

	  </div>
)

export default Trade