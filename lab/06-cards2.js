function main() {
	return (function () {
		console.log("our IIFE is working");
		let cardValues = [
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
			"K",
			"A",
		];

		let suitsObj = {
			SPADES: "♠",
			HEARTS: "♥",
			DIAMONDS: "♦",
			CLUBS: "♣",
		};
		class Card {
			constructor(face, suits) {
				// set the key value for the face
				if (cardValues.indexOf(face) != -1) {
					this._face = face;
				} else {
					console.log("Check your alert there is an error!");
				}
				// set the suit
				if (Object.values(suitsObj).indexOf(suits) != -1) {
					this._suits = suits;
				} else {
					console.log("Check your alert there is an error!");
				}
			}
			get face() {
				return this._face;
			}

			set face(faceValue) {
				if (cardValues.indexOf(faceValue) != -1) {
					this._face = faceValue;
				} else {
					console.log("Error");
				}
			}

			get suits() {
				return this._suits;
			}

			set suits(suitsValue) {
				if (Object.values(suitsObj).indexOf(suitsValue) != -1) {
					this._suits = suitsValue;
				} else {
					alert("Error");
					console.log("Check your alert there is an error!");
				}
			}
		}
		// end of class!

		return {
			Suits: suitsObj,
			Card: Card,
		};
	})();
}

let result = main();

let Card = result.Card;

let Suits = result.Suits;
let card = new Card("Q", Suits.CLUBS);
//let tempCard = new Card("7", Suits.DIAMONDS);
//console.log(tempCard);

console.log(card.suits);
console.log("card face is ", card.face);
card.face = "A";
console.log("new card face value ", card.face);
// console.log(card);
// card.suits = Suits.DIAMONDS;
// console.log(card);
// let card2 = new Card("1", Suits.DIAMONDS);

// Card { _face: 'Q', _suits: '♣' }
// Card { _face: 'A', _suits: '♣' }
// Card { _face: 'A', _suits: '♦' }
// Error
