//PLAYER
let player={
    name:"Josh",
    cash:200,
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.cash
//CASH
//function cashDeduct() {
//    player.cash=10
//    console.log("cash taken!")
//    return player.cash
//}
//ELEMENTS
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
//CONDITIONS
let hasBlackjack=false //this is a boolean statement (true or false)
let isAlive=false
//OUTPUT
let message=""
let cards=[]
let sum=" "
//START GAME
function startGame() {
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
//RENDER GAME
function renderGame() {
    cardsEl.textContent="Cards: "
    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent+=cards[i]+" " //arrays are 0 indexed, meaning that they start from 0 rather than 1.
    }
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
//NEW CARD
function newCard() {
    if(isAlive==true&&hasBlackjack===false) { //THIS IS AN "AND" STATEMENT AND REQUIRES BOTH CONDITIONS ARE MET TO CONTINUE.
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
//RANDOM CARD
function getRandomCard() {
    let randomCard=Math.floor(Math.random()*13)+1
    //THIS IS JUST A PLACEHOLDER BECAUSE MAKING THE ACE HAVE BOTH 1 OR 11 OPTIONS IS TOO COMPLEX RN.
    if (randomCard===1){
        return 11
    }else if (randomCard>11) {
        return 10
    }else {
        return (randomCard)
    }
    //END OF PLACEHOLDER.
}