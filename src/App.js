import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import * as DataArray from "./data.json";
import Countries from "./components/Countries";

class App extends Component {
  state = {
    data: DataArray.default,
    change: false,

  };

  changeBg = () => {
    this.state.change
      ? this.setState({ change: false })
      : this.setState({ change: true });
  };
  formatNumber = (number, index, increase = 4) => {
    let stringedNumber = String(number);
    let arrayNum = stringedNumber.split("");
    if (arrayNum.length > 3) arrayNum.splice(index, 0, ",");
    if (arrayNum.length > 3 + increase)
      arrayNum.splice(index - increase, 0, ",");
    if (arrayNum.length > 3 + increase + increase)
      arrayNum.splice(index - increase - increase, 0, ",");
    if (arrayNum.length > 3 + increase + increase + increase)
      arrayNum.splice(index - increase - increase - increase, 0, ",");
    return arrayNum.join("");
  };
  updateQuery = (keyword) => {
    this.setState({ keyword });
    console.log(keyword);
    this.filterCountriesBySearch();
  };
  filterCountriesBySearch = () => {
    // implementing the search functionality.

  };
  render() {
    return (
      <div>
        <Header changeBg={this.changeBg} bgState={this.state.change} />
        <div className={`main ${this.state.change ? "mainDark" : ""}`}>
          <div className="middle rowFlex">
            <Input bgState={this.state.change} updateQuery={this.updateQuery} />
            <Filter />
          </div>
          <Countries array={this.state.data} formatNumber={this.formatNumber} />
        </div>
      </div>
    );
  }
}

export default App;

/*
FOR THE CARDS ON THE HOMEPAGE
- Flag
- Name
- Population
- Region
- Capital
*/
