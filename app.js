const cardArr = [
  {
    name: "fries",
    img: "img/fried-potatoes.png",
  },
  {
    name: "hamburger",
    img: "img/hamburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "fries",
    img: "img/fried-potatoes.png",
  },
  {
    name: "hamburger",
    img: "img/hamburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
];
const gridDisplay = document.querySelector("#grid");
const result = document.querySelector("#result");
let cardChosen = [];
let cardChosenId = [];
let cardWon = [];

cardArr.sort(() => 0.5 - Math.random());

function createBoard() {
  for (let i = 0; i < cardArr.length; i++) {
    const card = document.createElement("img");
    card.src = "img/colors.png";
    card.id = i;
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function flipCard() {
  let cardId = this.getAttribute("id");
  cardChosen.push(cardArr[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArr[cardId].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 100);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");

  if (cardChosen[0] === cardChosen[1]) {
    alert("YOU FIND A MATCH !!");
    cards[cardChosenId[0]].setAttribute("src", "img/checkbox.png");
    cards[cardChosenId[1]].setAttribute("src", "img/checkbox.png");
    cards[cardChosenId[0]].removeEventListener("click", flipCard);
    cards[cardChosenId[1]].removeEventListener("click", flipCard);
    cardWon.push(cardChosen);
  } else {
    cards[cardChosenId[0]].setAttribute("src", "img/colors.png");
    cards[cardChosenId[1]].setAttribute("src", "img/colors.png");
    alert("sorry try again (");
  }

  result.innerText = cardWon.length;

  cardChosen = [];
  cardChosenId = [];

  if (cardWon.length === cardArr.length / 2)
    result.innerText = "Congratulations Winner!!!!!!";
}
