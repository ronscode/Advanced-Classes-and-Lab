function main() {
	return (function () {
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
				if (cardValues.indexOf(face) != -1) {
					this._face = face;
				} else {
					console.log("Error");
				}
				if (Object.values(suitsObj).indexOf(suits) != -1) {
					this._suits = suits;
				} else {
					console.log("Error");
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
					console.log("Error");
				}
			}
		}

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
console.log(card);
card.face = "A";
console.log(card);
card.suits = Suits.DIAMONDS;
console.log(card);
let card2 = new Card("1", Suits.DIAMONDS);
