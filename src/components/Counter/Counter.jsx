import React from "react";
import style from "./Counter.module.scss";
import { PositionContext } from "../../providers/context/PositionContext";
import { useContext } from "react";

export const Counter = () => {
  const { results, reset, midle } = useContext(PositionContext);

  return (
    <>
    <div className={style.counter}>
      <div className={style.counter__result}>
        {results.length > 0
          ? results.map((el) => <p   style={el< midle ? ({color: `green`}):({color: `red`})  } > Reaction: {el}ms</p>)
          : null}
      </div>
      <button onClick={reset} className={style.counter__button}>
        
        Reset
      </button>
    </div></>
  );
};
