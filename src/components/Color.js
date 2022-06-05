import React from "react";

export default function Color() {
  const [color, setColor] = React.useState("white");
  const body = document.querySelector("body");
  const colors = ["white", "red", "green", "blue"];

  const randomNum = () => {
    let num = Math.floor(Math.random() * colors.length);

    if (colors[num] === color) {
      num = randomNum();
    }

    return num;
  };

  const changeColor = () => {
    const color = colors[randomNum()];
    body.style.backgroundColor = color;
    setColor(color);
  };

  return (
    <button className="random" onClick={changeColor}>
      {color}
    </button>
  );
}
