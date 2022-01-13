/* Shuffle a deck of cards randomly */

//initialize values
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
	"Ace",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"Jack",
	"Queen",
	"King",
];

//create deck
let deck = [];

for (let i=0; i<values.length; i++) {
  for (let j=0; j<suits.length; j++) {
    const card = {
      Value: values[i],
      Suit: suits[j]
    }
    deck.push(card);
  }
}
console.log("Original Deck", deck, deck.length);

// Dummy Method
deck.sort(() => Math.random() - 0.5);
// console.log('Sorted deck', deck)

// Better Method
for(let i=deck.length-1; i>0; i--) {
  const j = Math.floor(Math.random() * (i+1)); 
  [deck[i], deck[j]] = [deck[j], deck[i]]
}

console.log('Sorted deck', deck, deck.length)

