const fullPictureBox = document.getElementById("fullPictureBox");
const fullPicture = document.getElementById("fullPicture");

function closePicture() {
  fullPictureBox.style.display = "none";
}

function openPicture(reference) {
  fullPictureBox.style.display = "flex";
  fullPicture.src = reference;
}
