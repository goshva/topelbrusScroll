var fullScreenHeader = false;
i = 0;
var ancorsHeigthList = {};
var header = document.getElementsByClassName("header-main")[0];
var els = document.getElementsByClassName("anchors");
console.log(els);

function zr() {
  if (!fullScreenHeader) {
    header.style.height = window.innerHeight + "px";
  } else {
    header.style.height = "171px";
  }
  fullScreenHeader = !fullScreenHeader;
}
//function setAnchor(anchor) {
//  location.href = location.href.split("#")[0] + "#" + anchor;
//}
// if (location.href.split("#")[1] == el.id) {
//   moveHeaderto(el.dataset.h, el.dataset.w, el.dataset.z);
// }
function forEachAnchors() {
  Array.from(els).forEach((el) => {
    if (
      window.scrollY < el.offsetTop &&
      el.offsetTop < window.innerHeight + window.scrollY
    ) {
      moveHeaderto(el.dataset.h, el.dataset.w, el.dataset.z);
    }
  });
}
window.addEventListener(
  "scroll",
  function () {
    forEachAnchors();
  },
  false
);
function moveHeaderto(h, w, z) {
  header.style.backgroundPositionY = h + "%"; // y by scroll
  header.style.backgroundPositionX = w + "%"; // x by scroll
  header.style.backgroundSize = z + "%"; //zoom by scroll
}
