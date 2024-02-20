import React, {  useState } from "react";
import { PositionContext } from "./PositionContext";

export const PositionProvider = ({ children }) => {
  const [arrTime, setArrTime] = useState([]);
  const [results, setResults] = useState([]);
  const [top, setTop] = useState("50%");
  const [left, setLeft] = useState("50%");
  const [midle,setMidle] = useState(0)

  function setPosition() {
    let t = Math.floor(Math.random() * 80);
    let l = Math.floor(Math.random() * 70);
    setTop(`${t}%`);
    setLeft(`${l}%`);
  }

  function fillArr() {
    let stamp = new Date().getTime();
    arrTime.unshift(stamp);
  }

  function result() {
    if (arrTime.length > 1) {
      results.unshift(arrTime[0] - arrTime[1]);
    }
  }

  function midleMath() {
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i];
       setMidle(sum / results.length)
    }
  }

  function reset() {
    setArrTime([]);
    setResults([]);
  }

  return (
    <PositionContext.Provider
      value={{
        setPosition,
        top,
        left,
        fillArr,
        result,
        arrTime,
        results,
        reset,
        midleMath,
        midle,
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};
