import { useState } from "react";
import css from "./App.css";
import eyeImg from "./assets/eye.png";
import closedEye from "./assets/closedEye.png";
import password from "./assets/password.png";
const App = () => {
  const starMake = (event) => {
    let eyeOpen = document.getElementById("eyeOpened");
    let eyeClose = document.getElementById("eyeClose");
    let text = document.getElementById("text");
    let password = document.getElementById("password");
    let password1 = document.getElementById("password1");
    password.classList.toggle("hidden");
    password1.classList.toggle("hidden");
    eyeOpen.classList.toggle("hidden");
    eyeClose.classList.toggle("hidden");
    text.classList.toggle("hidden");
    if(text.classList.contains('hidden')){
      text.classList.add('hidden')
    }
  };
  const handleClick = (event) => {
    let password = document.getElementById("password");
    let password1 = document.getElementById("password1");
    let eyeOpen = document.getElementById("eyeOpened");
    let eyeClose = document.getElementById("eyeClose");
    let text = document.getElementById("text");
    let hideEl = document.getElementById("hide");
    let showEl = document.getElementById("show");
    eyeOpen.classList.toggle("hidden");
    eyeClose.classList.toggle("hidden");
    hideEl.classList.toggle("hidden");
    showEl.classList.toggle("hidden");
    text.classList.toggle("hidden");
    password.classList.add('hidden')
    password1.classList.add('hidden')
  };
  return (
    <div>
      <div className="app">
        <h2 className="text" id="text">
          Salom dunyo
        </h2>
        <img
          src={password}
          width="50"
          height="50"
          id="password"
          className="hidden"
        />
        <img
          src={password}
          width="50"
          height="50"
          id="password1"
          className="hidden"
        />
        <img
          src={eyeImg}
          width="50"
          className="openedeye"
          id="eyeOpened"
          onClick={starMake}
        />
        <img
          src={closedEye}
          className="hidden"
          width="50"
          id="eyeClose"
          onClick={starMake}
        />
      </div>
      <button className="hidden" id="show" onClick={handleClick}>
        show
      </button>
      <button className="" id="hide" onClick={handleClick}>
        hide
      </button>
    </div>
  );
};

export default App;
