// grab elements
const images = document.querySelectorAll(".about-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// helper: show image at index
function showImage(index) {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");
}

// next button
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

// previous button
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
});
