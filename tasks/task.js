window.onload = function () {

  //util func
  const elem = (select) => document.querySelector(select);

  //open and close menu
  elem("#menu").onclick = function () {
    elem("nav").style.display = "flex";
  }

  elem("#close-menu").onclick = function () {
    elem("nav").style.display = "none";
  }
}