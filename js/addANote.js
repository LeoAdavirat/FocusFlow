// Add a note
function addANote() {}

document.addEventListener("keydown", (event) => {
  if (
    (event.ctrlKey && event.shiftKey && event.key === "A") ||
    (event.ctrlKey && event.shiftKey && event.key === "a")
  ) {
    addANote();
  }
});
