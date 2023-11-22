document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});
window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  // document.getElementById("first-image").width =
  //   window.innerWidth -
  //   document.querySelector("#master-your-notes div").offsetWidth;
});
