import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"
const App = () => {
  const [advice, setAdvice] = useState("");
  const handleAdvice = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
       setAdvice(res.data.slip.advice)
    });
  };
  useEffect(() => {
    handleAdvice();
  }, []);

  return (
    <div className="conatainer">
      <div className="advice_container">
      <h1 className="advice">{advice}</h1>
      <button className="advice_btn" onClick={handleAdvice}>Give Me Advice</button>
      </div>
    </div>
  );
};

export default App;
