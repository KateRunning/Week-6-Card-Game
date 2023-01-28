// class card
// card has suit
// card has faceValues
// card has rank
//26 rounds
//USE DOT NOTATION :) 

class Player {
    constructor(name) { //place holder for things to get passed in
        this.name = name;
        this.score = 0; 
        this.hand = [];
    }
}

let player1 = new Player('Kate');
let player2 = new Player('Laila');

console.log(player1);
console.log(player2);

class Card {
    constructor(faceValue, suit, rank) {
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.deck = []; //we want to put 52 cards here
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']; //could also do 11-14
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        
        }
    
    //method to create the deck (52 cards)
    createDeck() {
        for (let i = 0; i < this.faceValues.length; i++) {
            //console.log(this.faceValues[i]);
            for(let s = 0; s < this.suits.length; s++) {
                this.deck.push(new Card(this.faceValues[i], this.suits[s], this.ranks[i]));
            }
        }
        console.log(this.deck);

        //console.log(this.deck[0].rank) // logs 2
    
    }
    //method to shuffle 52 cards (fischer yates)
    shuffle() {
        //let currentIndex = array.length, temporaryValue, randomIndex;
        let currentIndex = this.deck.length
        let temporaryValue
        let randomIndex
        //While there remain elements to shuffle..
        while (0 !== currentIndex) {
            //pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            //and swap it with the current element.
            temporaryValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = temporaryValue;
        }
        return this.deck;
    }

    deal() { //method to deal - interact with the players object //slice in half
        player1.hand = this.deck.slice(0, 26); 
        player2.hand = this.deck.slice(26);

         console.log(player1);
         console.log(player2);
    }
}   

let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffle();
gameDeck.deal();
//console.log(player1.hand); //testing player array
//console.log(player1.hand.length); //testing player array length
//console.log(gameDeck.deck.length) //testing deck length array
 player1.score = 0;
 player2.score = 0;

 for (let i = 0; i < 26; i++) {
    console.log("\n P1 card:", player1.hand[i].faceValue, " P2 card:", player2.hand[i].faceValue)
    
  if (player1.hand[i].rank > player2.hand[i].rank) {
    player1.score += 1
    console.log(`${player1.name} wins round! Score: ${player1.score}`)
  } else if (player1.hand[i].rank < player2.hand[i].rank) {
    player2.score += 1
    console.log(`${player2.name} wins round! Score: ${player2.score}`)
  } else {
    console.log("It's a tie!")
  }
 }
console.log(`
Final scores: ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`)
 if (player1.score > player2.score) {
    console.log(` 
    ${player1.name} wins!`)
 } else if (player1.score < player2.score) {
    console.log(` 
    ${player2.name} wins!`)
 }

//  console.log(player1);
//  console.log(player2);
 

