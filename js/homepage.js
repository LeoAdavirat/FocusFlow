function readHomepageJson() {
  return fetch("../json/homepage_json.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function getData() {
  const data = await readHomepageJson();
  document.getElementById("background-text-homepage").innerHTML =
    data["background-text-homepage"];
}

getData();
// console.log(data);
// document.getElementById("background-text-homepage").innerHTML =
//   data["background-text-homepage"];

document.addEventListener("keydown", (event) => {
  if (
    (event.shiftKey && event.key === "E") ||
    (event.shiftKey && event.key === "e")
  ) {
  }
});

// Add a note

document.addEventListener("keydown", (event) => {
  if (
    (event.ctrlKey && event.shiftKey && event.key === "A") ||
    (event.ctrlKey && event.shiftKey && event.key === "a")
  ) {
    addANote();
  }
});
