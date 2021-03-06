const Orders = (props) => (
  <div className="tab-pane px-md-3" role="tabpanel" aria-labelledby="nav-contact-tab">
		<h4 className="d-none d-md-block mt-5">All Orders History</h4>
	  <table className="table table-hover table-striped">
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
		  	<tr className="table-dark">
		      <th scope="row" colSpan="5">ETC-BTC</th>
		    </tr>
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
		    <tr className="table-dark">
		      <th scope="row" colSpan="5">EOS-BTC</th>
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
		    <tr className="table-dark">
		      <th scope="row" colSpan="5">LTC-BTC</th>
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
)

export default Orders