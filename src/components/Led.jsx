import { React, useState, useEffect, useRef } from "react";

const Led = (props) => {
  const {
    id,
    color,
    isWorking,
    setColorsLed,
    colorsLed,
    ledWorking,
    setLedWorking,
    userSecuence,
    setUserSecuence,
    arraysEqual,
    secuence,
    generateRandomNumber,
    setSecuence,
    setIndexLedUsed
  } = props;
  const botonRef = useRef();

  useEffect(() => {}, []);
  const clickOnButton = () => {
    console.log("ID: ", id);
    setLedWorking(id);
    setUserSecuence([...userSecuence, id]);

    console.log("NUEVA SECUENCIA");
    console.log([...userSecuence, id]);
    console.log("SECUENCIA CORRECTA");
    console.log(secuence);
    console.log("SON IGUALES ???");
    console.log(arraysEqual(secuence, [...userSecuence, id]));

    if (!arraysEqual(secuence, [...userSecuence, id])) {
      setUserSecuence([]);
      alert("PERDISTE, VUELVE A COMENZAR");
      return;
    }
    if (
      arraysEqual(secuence, [...userSecuence, id]) &&
      secuence.length == [...userSecuence, id].length
    ) {
      console.log("BIEN!");
      setUserSecuence([]);
      setSecuence([...secuence, generateRandomNumber()]);

      return;
    }
  };

  return (
    <div
      className="led"
      ref={botonRef}
      style={{
        background: isWorking ? color : ""
      }}
      onClick={clickOnButton}
    ></div>
  );
};

export default Led;
