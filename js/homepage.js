function readHomepageJson() {
  fetch("../json/homepage_json.json").then((res) => {
    return res.json();
  });
  // .then((data) => console.log(data));
}
function guideBackgroundNote() {
  document.getElementById("background-text-homepage").innerHTML =
    "In the todo App, everything is organized into notes.\n\nEven background theme is also a note,\nwhich means you can edit it by pressing 'Shift + E'\n\nClick on add a note icon on the side to begin\n(For keyboard user: <b>Ctrl + Shift + A</b>)";
  document.getElementById("background-text-homepage").innerHTML =
    data["background - text - homepage"];
}
readHomepageJson();
guideBackgroundNote();
