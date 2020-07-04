var fullScreenHeader = false;
i = 0;
var ancorsHeigthList = {};
var maxY =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

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
function setAnchor(anchor) {
  location.href = location.href.split("#")[0] + "#" + anchor;
}

Array.from(els).forEach((el) => {
  el.dataset.id = el.id;
  ancorsHeigthList[el.offsetTop] = el.dataset;
  console.log(ancorsHeigthList);

  if (location.href.split("#")[1] == el.id) {
    moveHeaderto(el.dataset.h, el.dataset.w, el.dataset.z);
  }
});

window.addEventListener(
  "scroll",
  function () {
    //console.log(window.scrollY);
    //console.log(maxY);
    //console.log(Object.keys(ancorsHeigthList));

    anchorKeys = Object.keys(ancorsHeigthList);
    if (anchorKeys[i] <= this.window.scrollY) {
      mapdata = ancorsHeigthList[anchorKeys[i]];
      moveHeaderto(mapdata.h, mapdata.w, mapdata.z);
      i++;
    }

    //  var scrollPercent = window.scrollY / maxY;
    //  console.log(scrollPercent + "%");
    // moveHeaderto(scrollPercent);
  },
  false
);
function moveHeaderto(h, w, z) {
  header.style.backgroundPositionY = h + "%"; // y by scroll
  header.style.backgroundPositionX = w + "%"; // x by scroll
  header.style.backgroundSize = z + "%"; //zoom by scroll
}
