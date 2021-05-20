import React from 'react';
import './app.css';
import Table from 'react-bootstrap/Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apikey: "MNOPROWNFMGBB4QJ",
      stock_codes: [
        "AIR.NZ", "SML.NZ", "CVT.NZ"
      ],
      stock_library: {
        names: [],
        symbols: [],
        prices: []
      }
    };
  }

  componentDidMount() {
    let fetch_stocks = this.state.stock_codes.join(",");
    console.log("Fetched Stock Codes: "+fetch_stocks);
    fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=${fetch_stocks}&api_token=jkIeJHXgzdurMRj6FvfUk5a82siGSZ4ETOhFNNw04EE8mIG7e8r4yUQMDgqr`).then(response => {
      return response.json();
    }).then(resp => {
      console.log("Response Data:",resp.data);
      // let code_names = resp.data.map((stock)=>(stock.name));
      // let code_symbols = resp.data.map((stock)=>(stock.symbol));
      // let code_prices = resp.data.map((stock)=>(stock.price));
      this.setState(() => {
        return {
          stock_library: {
            names: resp.data.map((stock) => (stock.name)),
            symbols: resp.data.map((stock) => (stock.symbol)),
            prices: resp.data.map((stock) => (stock.price))
          }
        }
      })
      console.log("Stock Data Added to Library: ",this.state.stock_library);
      console.log("Index: ", this.state.stock_library.symbols.indexOf("CVT.NZ"));
    })
  }

  render() {

    let tableData = this.state.stock_codes.map((name, index) => (<tr>
      <td>
        {this.state.stock_library.names[index]}
      </td>
      <td>
        {this.state.stock_library.symbols[index]}
      </td>
      <td>
        {this.state.stock_library.prices[index]}
      </td>
    </tr>));
    return (<div className="app">
      <div className="wrapper">
        <Table striped="striped" bordered="bordered" hover="hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </Table>
      </div>
    </div>);
  }
}

export default App;
