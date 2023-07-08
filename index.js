//CARDS
let firstCard=8
let secondCard=10

let cards=[firstCard,secondCard]
console.log(cards)
//CONDITIONS
let hasBlackjack=false //this is a boolean statement (true or false)
let isAlive=true
//INPUT
cards.push(6)
console.log(cards)
//OUTPUT
let message=""
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sum=firstCard+secondCard
let sumEl=document.getElementById("sum-el")
//START GAME
function startGame() {
    renderGame()
}
function renderGame() {
    cardsEl.textContent="Cards:"+cards[0]+" "+cards[1]+" "+cards[2] //arrays are 0 indexed, meaning that they start from 0 rather than 1.
    sumEl.textContent="Sum: "+sum
    if (sum<=20) { //conditions work kinda like booleans, if the condition is met (if the statement is true) then the code is run, if not (false) then the code is not run.
        message="Draw a new card?"
    }else if (sum===21) { // === means that the variable should be equivilant to the number rather than = which changes the variable to equal the number, using == is less strict and will accept values as numbers or strings rather than one or ther other.
            message="You've got Blackjack!"
            hasBlackjack=true
    }else {
             message="You lose!" 
            isAlive=false
    }console.log(message)
    messageEl.textContent=message
    }
function newCard() {
    let card=1
    sum+=card
    renderGame()
}