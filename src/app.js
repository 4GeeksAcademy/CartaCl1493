import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(GenerateRandomSuit());
  document.querySelector(".card").innerHTML.GenerateRandomNumber();
};

let GenerateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNumber = math.floor(math.random() * numbers.length);
  return numbers[randomNumber];
};
let GenerateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let randomSuit = math.floor(math.random() * suit.length);
  return suit[randomSuit];
};
