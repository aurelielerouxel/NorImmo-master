// Place the images one behind the other
let index = 1;
showImages(index);

// Next/previous controls
function nextImage(n) {
  showImages(index += n);
}

function showImages(n) {
  let i;
  let images = document.getElementsByClassName("image");

  // Allows you to loop through the images
  if (n > images.length) {index = 1}
  if (n < 1) {index = images.length}
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }

  images[index-1].style.display = "block";
}