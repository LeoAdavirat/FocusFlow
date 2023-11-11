function guideBackgroundNote() {
  document.getElementById("background-text-homepage").innerHTML = "In the todo App, everything is organized into notes.\n\nEven background theme is also a note,\nwhich means you can edit it by pressing 'Shift + E'\n\nClick on add a note icon on the side to begin\n(For keyboard user: <b>Ctrl + Shift + A</b>)";
}
guideBackgroundNote();
// window.onload = function () {
//   const bgtask = document.getElementsByClassName("background-text-homepage");
//   let savedBgTask = sessionStorage.getItem("SavedBgTask");
//   if (savedBgTask) {
//     bgtask.innerHTML = savedBgTask; // Change bg text with task on local storage
//     bgtask.style.overflow = "visible";
//     bgtask.style.overflowWrap = "break-word"; // reformat text from session storage
//     guideBackgroundNote();
//   }
// };

function replaceInnerHTML() {
  // Get the element by ID
  var element = document.getElementById("background-text-homepage");

  // Check if the element exists
  if (element) {
    // Replace the innerHTML with your desired content
    element.innerHTML = "Your new content goes here";
  } else {
    console.error("Element with ID 'background-text-homepage' not found");
  }
}
