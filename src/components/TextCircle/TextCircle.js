import React from "react";
import "./TextCircle.scss";

const TextCircle = () => {
  const text = document.querySelector("section .text");
  console.log(text);
  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  const element = document.querySelectorAll("section .text span");
  for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "rotate(" + i * 11 + "deg)";
  }
  return (
    <div>
      <section>
        {/* <p className="text">Мягко - Результативно - Позитивно -</p>
        <img src="./assets/logoNat.png" alt="" srcset="" /> */}
        <img src="./assets/logoRPM.png" alt="" srcset="" />
      </section>
    </div>
  );
};
export default TextCircle;
