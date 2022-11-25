import React from "react";
import CalculatorBody from "./CalculatorBody";
import CalculatorHeader from "./CalculatorHeader";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="calculator">
        <CalculatorHeader />
        <CalculatorBody />
      </div>
    );
  }
}
export default Calculator;
