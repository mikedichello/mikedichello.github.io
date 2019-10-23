//LOVE LETTER///
// on load cards shuffle into deck 
// 1 card burned faced down 3 cards burned face up
// player goes first
// player draws a card then chooses to discard a card

//guard (1)
// if card discarded is gaurd then player enters a number between 2 and 8 If computer enters random number
// if value === opponents card value opp discards card and player wins
// if not, turn passes to opponent

//priest (2)
//if priest discarded then active player gets to see opp' card
// then pass turn

//baron (3)
// if baron discarded current player and oppt reveals card
//the values of both cards are compared lower one loses

//handmaid (4)
//if current player discards handmaid they are protected until their next turn
//we will have to check if player is protected on each discard

//prince (5)
//if prince is discarded opp discards their card and draws a new one
// if discarded card is princess they lose

//king (6)
//if king is discarded, then players swap cards

//countess (7)
//if players other card is King or Prince then it must be discarded
// this must be checked somehow

//princess (8)
//if princess is ever discarded that player loses

//win/lose conditions
//if oppt discards due to guard
//if oppt discards princess
// if oppt has lesser value in baron compare
//if no cards are left compare value
//if that compare is tie then compare total value


//additional goals:
//rules as pop up modal
//cards enlarge on hover
$(()=> {
const player = {
    name: 'Player',
    hand: [],
    playedCards: [],
    totalPlayedValue: 0,
    activePlayer: true,
    draw: (topCard) => {

    },
    discard: ()=> {

    },
    play: ()=> {
        
    }



}

const computer = {
    name: 'Computer',
    hand: [],
    playedCards: [],
    totalPlayedValue: 0,
    activePlayer: false,
    draw: (topCard) => {

    },
    discard: ()=> {

    },
    play: ()=> {

    }
}

const lovers = [player, computer];
const activePlayer = lovers[0];


class Card {
    constructor (name, value, frontImg, backImg = 'images/back.JPG') {
        this.name = name;
        this.value = value;
        this.frontImg = frontImg;
        this.backImg = backImg;
    }
}

const deck= [];

const shuffle= (array)=> {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
};

// create function createDeck
//pass paramater(card, qty) #of cards
//loops run qty times
//pushes that card to deck 
const createDeck = (card, qty) => {
    for(let i = 0; i < qty; i++){
        deck.push(card);
    };
};

const guard = new Card('guard', 1, 'images/guard.JPG');
const priest = new Card('priest', 2, 'images/priest.JPG');
const baron = new Card('baron', 3, 'images/baron.JPG');
const handmaid = new Card('handmaid', 4, 'images/handmaid.JPG');
const prince = new Card('prince', 5, 'images/prince.JPG');
const king = new Card('king', 6, 'images/king.JPG');
const countess = new Card('countess', 7, 'images/countess.JPG');
const princess = new Card('princess', 8, 'images/princess.JPG');

createDeck(guard, 5); 
createDeck(priest, 2);
createDeck(baron, 2);
createDeck(handmaid, 2);
createDeck(prince, 2);
createDeck(king, 1);
createDeck(countess, 1);
createDeck(princess, 1);

const $burnedCards = $('.burned-cards');

const gameStart = () => {
    shuffle(deck);
    $burnedCards.append(`<img class="card" src="${deck[0].backImg}">`);
    console.log(deck[0]);
    deck.shift();
    for(let i = 0; i < 3; i++){
        console.log(deck[0].frontImg);
        let newCard = deck[0];
        $burnedCards.append(`<img class="card" src="${newCard.frontImg}">`);
        deck.shift();
    };
};


console.log(deck);
gameStart();

//drawing cards needs to remove obj from deck
//


// game reset all cards need to push back into deck to shuffle;

});