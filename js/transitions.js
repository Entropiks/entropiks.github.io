let homeSection = document.getElementsByClassName("content-wrapper home-wrapper")[0];
let projectSection = document.getElementById("project-section");

let goProjectSection = document.getElementById("project-link");
let goHomeSection = document.getElementById("project-link-home");

goProjectSection.onclick = goProjects;
goHomeSection.onclick = goHome;

function goProjects() {
  homeSection.style.display = "none";
  projectSection.style.display = "flex";
}
function goHome() {
  homeSection.style.display = "block";
  projectSection.style.display = "none";
}
// function showDiv() {
//   projectSection.style.display = "flex";
// }