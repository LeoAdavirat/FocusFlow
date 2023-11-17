// Add a note

document.addEventListener("keydown", (event) => {
  if (
    (event.ctrlKey && event.shiftKey && event.key === "A") ||
    (event.ctrlKey && event.shiftKey && event.key === "a")
  ) {
    addANote();
  }
});

function addANote() {}

let availableNotesTypes = [
  "Standard Note",
  "Calendar Note",
  "Notification Note",
  "Image Note",
  "Edit Background & Theme",
  "Audio Note",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableNotesTypes.filter((note_keyword) => {
      return note_keyword.toLowerCase().includes(input.toLowerCase());
    });
    // console.log(result);
  }
  display(result);
  if (!result.length) {
    resultsBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join("") + "<li>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}
