function readHomepageJson() {
  return fetch("../json/homepage_json.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function guideBackgroundNote() {
  document.getElementById("background-text-homepage").innerHTML =
    "In the todo App, everything is organized into notes.\n\nEven background theme is also a note,\nwhich means you can edit it by pressing 'Shift + E'\n\nClick on add a note icon on the side to begin\n(For keyboard user: <b>Ctrl + Shift + A</b>)";
  document.getElementById("background-text-homepage").innerHTML =
    data["background-text-homepage"];
}
async function getData() {
  const data = await readHomepageJson();
  console.log(data["background-text-homepage"]);
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
