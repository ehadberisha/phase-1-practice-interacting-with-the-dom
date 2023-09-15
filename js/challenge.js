const plusButton = document.getElementById("plus");

const theCounter = document.getElementById("counter");

const minusButton = document.getElementById("minus");

const theForm = document.getElementById([comment - Form]);

function addOne() {
  theCounter.innerText++;
}

function subtractOne() {
  theCounter.innerText--;
}

plusButton.addEventListener("click", addOne);

minusButton.addEventListener("click", subtractOne);
