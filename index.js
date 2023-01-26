const selection = document.querySelectorAll(".rating-button");
const submitBtn = document.querySelector(".submit-button");
const ratingPrompt = document.querySelector(".rating-prompt");
const thanksMsg = document.querySelector(".rating-thanks");
const displayChoice = document.querySelector(".display-choice");
let ratingChosen = false;

selection.forEach((li) => {
  li.addEventListener("click", selectRating);
});

submitBtn.addEventListener("click", submitRating);

function selectRating(event) {
  selection.forEach((li) => {
    li.classList.remove("selected");
  });
  event.target.classList.add("selected");
  ratingChosen = true;
}

function submitRating() {
  if (ratingChosen) {
    ratingPrompt.style.display = "none";
    thanksMsg.style.display = "flex";
    displaySelection();
  } else;
}

function displaySelection() {
  selection.forEach((li) => {
    if (li.classList.contains("selected")) {
      displayChoice.innerHTML = li.innerHTML;
    }
  });
}
