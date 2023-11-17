let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");
let data;
let btnArray = Array.from(buttons);
// let input =;
let str = "";
btnArray.forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = screen.innerHTML.replace(/x/g, "*");
      try {
        str = eval(str);
      } catch {
        str = "Syntax Error";
      }
    } else if (e.target.innerHTML == "AC") {
      str = 0;
    } else if (e.target.innerHTML == "←") {
      if (screen.innerHTML.length == 1 || str == "Syntax Error") {
        str = 0;
      } else {
        str = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
      }
    } else {
      if (str == 0 || str == "Syntax Error") {
        str = "";
      }

      str += e.target.innerHTML;
    }
    screen.innerHTML = str;
  });
});
