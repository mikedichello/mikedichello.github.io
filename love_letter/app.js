//LOVE LETTER///
// on load cards shuffle into deck
// 1 card burned faced down 3 cards burned face up
// player goes first
// player draws a card then chooses to discard a card


//if oppt discards due to guard
//if oppt discards princess
// if oppt has lesser value in baron compare
//if no cards are left compare value
//if that compare is tie then compare total value

//additional goals:
//rules as pop up modal
//cards enlarge on hover


//////////////////////
//Class Constructor///
//////////////////////

class Card {
    constructor (name, value, frontImg, backImg = 'images/back.JPG') {
        this.name = name;
        this.value = value;
        this.frontImg = frontImg;
        this.backImg = backImg;
        this.element = null;
    }
    setElement(element) {
       const card = $(`element`);
       this.element = card;
    }
};
const state = {
setState(key, value){
  this[key] = value
},
getState(key) {
  return this[key]
}
};




$(()=> {
    

const $promptBox = $('#prompt-text');
const $drawBtn = $('#btn-draw');
const $playBtn = $('#btn-play');
const $passBtn = $('#btn-pass');
const $playerHand = $('#player-hand');
const $oppHand = $('.their-hand');

let whichCard = "left"

const player = {
    name: 'Player',
    hand: [],
    playedCards: [],
    totalPlayedValue: 0,
    protected: false,
    draw: () => {
        let newCard = deck[0];
         player.hand.push(newCard);
        $('#player-hand').append(`<img class="card" id="our-hand-${whichCard}" src="${newCard.frontImg}">`)
        console.log(player.hand);
        deck.shift();
        whichCard === "left" ? whichCard = "right" : whichCard = "left";
    },
    discard: (card)=> {
        card.appendTo('#player-discard');
        console.log(card);
    },
    play: ()=> {
        $promptBox.text("Select a card to Play.");
        $playerHand.css('cursor', 'pointer');
        
    }
}

const computer = {
    name: 'Computer',
    hand: [],
    playedCards: [],
    totalPlayedValue: 0,
    protected: false,
    draw: () => {
        let newCard = deck[0];
        $('#opp-hand').append(`<img class="card their-hand" src="${newCard.backImg}">`)
        computer.hand.push(deck[0]);
        console.log(computer.hand)
        deck.shift();
    },
    discard: ()=> {
    },
    play: ()=> {
        if (computer.hand[0].value <= computer.hand[1].value){
            // logic[computer.hand[0].name];
            $promptBox.text(`Computer plays ${computer.hand[0].name}`);
        }else{
            //logic[computer.hand[1].name]
            $promptBox.text(`Computer plays ${computer.hand[1].name}`);
        }
    }
}
const lovers = [player, computer];
let activePlayer = 0;
let otherPlayer = 1;

//////////////
//Card Logic//
//////////////
const logic = {
    guard: () => {
        if(activePlayer === 0){

            let guardChoice = prompt('Guess Value of Opponents Hand', "2-8");
            console.log(computer.hand[0].value);
            if (parseFloat(guardChoice) === computer.hand[0].value){
            alert(`Computer discards ${computer.hand[0].name} YOU WIN!`);
            
            }else{
                $promptBox.text('Computer does not have that card');
                passTurn();
            };

        }else {
            let computerGuard = Math.floor(Math.random * 6 + 2);
            if (computerGuard === player.hand[0].value){
                alert('Computer plays guard and chose correctly YOU LOSE!')
            }else{
                $promptBox.text('Computer plays guard but did not choose your card');
                passTurn();
            }
        }

    },
    priest: () => {
        if (activePlayer === 0) {
            // $($promptBox).text(`Computer reveals ${computer.hand[0].name}`);
            $('.their-hand').attr('src', computer.hand[0].frontImg);
        }else {
            $promptBox.text('Computer Plays Priest and you reveal your hand');
        }
    },
    baron: () => {
        //baron (3)
        // if baron discarded current player and oppt reveals card
        //the values of both cards are compared lower one loses

    },
    handmaid: () => {
        protectPlayer = lovers[activePlayer].protected 
        protectPlayer = true;
        console.log(protectPlayer);

    },
    prince: () => {
        //prince (5)
        //if prince is discarded opp discards their card and draws a new one
        // if discarded card is princess they lose

    },
    king: () => {
        //king (6)
        //if king is discarded, then players swap cards

    },
    countess: () => {
        //countess (7)
        //if players other card is King or Prince then it must be discarded
        // this must be checked somehow

    },
    princess: () => {
        //princess (8)
        //if princess is ever discarded that player loses
        //win/lose conditions
    }
};

// const compareCards = () => {
//     if (lovers[activePlayer].hand[1])
// }


const checkTurn = () => {
    if (activePlayer === 0){
        $promptBox.text("Player's Turn, Click 'DRAW' to draw a card.");
        $drawBtn.attr('disabled', false);
    }else{
        $promptBox.text("Computer's Turn, Click 'DRAW' to draw a card.");
        $drawBtn.attr('disabled', false);
    }
}
// if-else to change active player -
const passTurn = () => {
    if(activePlayer === 0) {
        lovers[activePlayer].protected = false;
        activePlayer++;
        otherPlayer--
        console.log(activePlayer);
        $drawBtn.attr('disabled', false);
    }else{
        lovers[activePlayer].protected = false;
        activePlayer--;
        otherPlayer++;
        console.log(activePlayer);
        $drawBtn.attr('disabled', false);
    };
};

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


//game start funcion shuffles deck array and deals out initial cards
const gameStart = () => {
    let newCard = deck[0];
    shuffle(deck);
    $burnedCards.append(`<img class="card" src="${newCard.backImg}">`);
    // console.log(deck[0].name);
    deck.shift();
    for(let i = 0; i < 3; i++){
        // console.log(deck[0].name);
        let newCard = deck[0];
        $burnedCards.append(`<img class="card" src="${newCard.frontImg}">`);
        deck.shift();
    };
    player.draw();
    computer.draw();
    checkTurn();
};

const afterPlay = () => {
    $playBtn.attr('disabled', true);
    $passBtn.attr('disabled', false);
}



console.log(deck);
gameStart();


///////////////////
//EVENT LISTENERS//
///////////////////
$drawBtn.on('click', () => {
    lovers[activePlayer].draw();
    $drawBtn.attr('disabled', true);
    $promptBox.text(`${lovers[0].name}'s turn Play a Card`);
    $playBtn.attr('disabled', false);
});

$playBtn.on('click', () => {
    afterPlay();
    if(activePlayer === 0) {
        player.play();
        $(`#our-hand-left`).on('click', (event) => {
          console.log('i was clicked')
          const element = event.currentTarget;
          state.playerPlayedCard ={
            element,
            card: player.hand[0]
          }
          let cardLogic = state.getState('playerPlayedCard').card.name;
          logic[cardLogic]();
          console.log(state.getState('playerPlayedCard').card.name);
          $(event.currentTarget).off('click');
          $(event.currentTarget).removeAttr('id');
          $(event.currentTarget).appendTo('#player-discard');

          $promptBox.text(`Player played a ${state.getState('playerPlayedCard').card.name}.`);
          $playerHand.css('cursor', 'default');
          $(`#our-hand-right`).off('click');
         
          

        });
        $(`#our-hand-right`).on('click', (event) => {
          
          console.log('i was clicked');
          const element = event.currentTarget;
          state.setState('playerPlayedCard', {
            element,
            card: player.hand[1]
          });
          let cardLogic = state.getState('playerPlayedCard').card.name;
          logic[cardLogic]();
          console.log(state.getState('playerPlayedCard').card.name);
          $(event.currentTarget).off('click');
          $(event.currentTarget).removeAttr('id');
          $(event.currentTarget).appendTo('#player-discard');

          $promptBox.text(`Player played a ${state.getState('playerPlayedCard').card.name}.`);
          $playerHand.css('cursor', 'default');
          $(`#our-hand-left`).off('click');
         
        //   alert('test');
        });
        
          
        }else{
        computer.play();
    }
    
    
    
});

$passBtn.on('click', () => {
    passTurn();
    $passBtn.attr('disabled', true);
    $drawBtn.attr('disabled', false);
    checkTurn();
})

// game reset all cards need to push back into deck to shuffle;
});