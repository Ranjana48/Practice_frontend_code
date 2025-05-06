let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

function modalPop() {
  modal.style.display = "block";
}
function closed() {
  modal.style.display = "none";
}
function Eve(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
