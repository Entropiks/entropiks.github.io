let homeSection = document.getElementsByClassName("content-wrapper home-wrapper")[0];
let projectSection = document.getElementById("project-section");
console.log(projectSection);

function hideDiv() {
  homeSection.style.display = "none";
  projectSection.style.display = "flex";
  // projectSection.style.transition = "all 2s";
  // homeSection.style.transform = "rotate(70deg)";
}
function goHome() {
  homeSection.style.display = "block";
  projectSection.style.display = "none";
}
// function showDiv() {
//   projectSection.style.display = "flex";
// }