import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="Container">
      <div id="display">
        <div className="formula">21+2334 x 0.3434 / 12</div>
        <div className="answer">12323.3253</div>
      </div>
      <div className="buttons">
        <div id="clear" className="btn">
          AC
        </div>
        <div id="resert" className="btn">
          C
        </div>
        <div id="back" className="btn">
          Back
        </div>
        <div id="divide" className="btn">
          /
        </div>
        <div id="seven" className="btn">
          7
        </div>
        <div id="eight" className="btn">
          8
        </div>
        <div id="nine" className="btn">
          9
        </div>
        <div id="multiply" className="btn">
          x
        </div>
        <div id="four" className="btn">
          4
        </div>
        <div id="five" className="btn">
          5
        </div>
        <div id="six" className="btn">
          6
        </div>
        <div id="subtract" className="btn">
          -
        </div>
        <div id="one" className="btn">
          1
        </div>
        <div id="two" className="btn">
          2
        </div>
        <div id="three" className="btn">
          3
        </div>
        <div id="add" className="btn">
          +
        </div>
        <div id="sign" className="btn">
          +/-
        </div>
        <div id="zero" className="btn">
          0
        </div>
        <div id="decimal" className="btn">
          .
        </div>
        <div id="equals" className="btn">
          =
        </div>
      </div>
    </div>
  );
}

export default App;
