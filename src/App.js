import React, { Component } from "react";
import FirstHeader from "./components/FirstHeader";
import Input from "./components/Input";
import Filter from "./components/Filter";
import * as DataArray from "./data.json";
import Countries from "./components/Countries";

class App extends Component {
  state = {
    data: DataArray.default,
    change: false,
    filtered: DataArray.default,
  };

  changeBg = () => {
    this.state.change
      ? this.setState({ change: false })
      : this.setState({ change: true });
  };
  resetCountries = () => {
    this.setState({ filtered: DataArray.default });
  };
  filterCountriesBySearch = (e) => {
    // implementing the search functionality.
    let text = e.target.value.toLowerCase();
    if (text !== "") {
      let data = this.state.data.filter((country) =>
        !country.capital
          ? country.name.toLowerCase().includes(text)
          : country.capital.toLowerCase().includes(text) ||
            country.name.toLowerCase().includes(text)
      );
      this.setState({ filtered: data });
    } else {
      this.resetCountries();
    }
  };

  filterCountriesByRegion = () => {
    // filter the countries by region/continents...
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    if (value !== "") {
      let data = this.state.data.filter((country) => country.region === value);
      this.setState({ filtered: data });
    } else {
      this.resetCountries();
    }
  };
  render() {
    return (
      <div>
        <FirstHeader
          changeBg={this.changeBg}
          bgState={this.state.change}
          reset={this.resetCountries}
        />
        <div className={`main ${this.state.change ? "mainDark" : ""}`}>
          <div className="middle rowFlex">
            <Input
              bgState={this.state.change}
              filterCountries={this.filterCountriesBySearch}
            />
            <Filter
              bgState={this.state.change}
              filterByRegion={this.filterCountriesByRegion}
            />
          </div>
          <Countries filtered={this.state.filtered} />
        </div>
      </div>
    );
  }
}

export default App;

/*
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
*/
