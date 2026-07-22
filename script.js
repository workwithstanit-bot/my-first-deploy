let count = 0;

const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

function updateCount() {
  countEl.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCount();
});
