import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const symbol = e.target.value;

    let val = symbol;
    if (symbol === "×") val = "*";
    else if (symbol === "÷") val = "/";

    setValue(value + val);
  };

  return (
    <div className="container">
      <h1 className="calc-name"> CALCULATOR</h1>

      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>

          <div>
            <input type="button" value="AC" onClick={() => setValue("")} />
            <input
              type="button"
              value="DE"
              onClick={() => setValue(value.slice(0, -1))}
            />
            <input type="button" value="." onClick={handleClick} />
            <input
              type="button"
              value="÷"
              className="andy"
              onClick={handleClick}
            />
          </div>

          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input
              type="button"
              value="×"
              className="andy"
              onClick={handleClick}
            />
          </div>

          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input
              type="button"
              value="+"
              className="andy"
              onClick={handleClick}
            />
          </div>

          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input
              type="button"
              value="-"
              className="andy"
              onClick={handleClick}
            />
          </div>

          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={() => setValue(eval(value))}
            />
          </div>
        </form>
      </div>

      <p className="footer">Andrew Abu © 2025 </p>
    </div>
  );
}

export default App;
