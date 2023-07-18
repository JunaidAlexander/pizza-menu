const number = document.getElementById(".number");
const btn = document.getElementById(".generate");

const generate = () => {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

// const rand = (Math.random() * 10 + 1);
// console.log(rand);
