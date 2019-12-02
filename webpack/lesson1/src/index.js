import "./style.css";
import Icon from "./web.png";

function component() {
  var element = document.createElement("div");
  element.innerHTML = "hello webpack!!!";
  element.classList.add("hello");

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());
