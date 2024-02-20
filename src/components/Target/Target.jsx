import React, { useContext } from "react";
import style from "./Target.module.scss";
import { PositionContext } from "../../providers/context/PositionContext";

export const Target = () => {
  const { setPosition, top, left, fillArr, result, midleMath } =
    useContext(PositionContext);

  return (
    <div className={style.target}>
      <div
        onClick={() => {
          setPosition();
          fillArr();
          result();
          midleMath();
        }}
        className={style.target__ball}
        style={{ top: `${top}`, left: `${left}` }}
      >
     
      </div>
    </div>
  );
};
