const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];


const editModal = document.getElementById("editModal");
const editBtn = document.getElementById("openEditModalBtn");
const editSpan = document.getElementsByClassName("close")[1];




btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

editSpan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    editModal.style.display = "none";
  }
}



