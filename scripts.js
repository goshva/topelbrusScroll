var maxY =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

var header = document.getElementsByClassName("header-main")[0];
var els = document.getElementsByClassName("anchors");
console.log(els);

Array.from(els).forEach((el) => {
  console.log(el);
  console.log(el.offsetTop);
});

window.addEventListener("scroll", function () {
  //console.log(window.scrollY);
  //console.log(maxY);
  var scrollPercent = window.scrollY / maxY;
  //console.log(scrollPercent + "%");
  moveHeaderto(scrollPercent);
});
function moveHeaderto(heigth) {
  header.style.backgroundPositionY = 100 - heigth * 100 + "%"; // y by scroll
  header.style.backgroundPositionX = heigth * 100 + "%"; // x by scroll
  header.style.backgroundSize = 100 + 100 * heigth + "%"; //zoom by scroll
}
