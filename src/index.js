import React from "react";
import ReactDOM from "react-dom";
import Rate from "./Rate";
import Inr from "./Inr";
import Usd from "./Usd";
import "./styles.css";

class App extends React.Component {
  state = {
    rate: 1,
    inr: 0,
    usd: 0
  };
  isRate = value => {
    this.setState({ rate: value });
  };
  isInr = value => {
    this.setState({ inr: value, usd: value / this.state.rate });
  };

  isUsd = value => {
    this.setState({ usd: value, inr: value * this.state.rate });
  };
  render() {
    return (
      <div className="App">
        <Rate rate={this.state.rate} ratecall={this.isRate} />
        <Inr inr={this.state.inr} inrcall={this.isInr} />
        <Usd usd={this.state.usd} usdcall={this.isUsd} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
