//PLAYER
let player={
    name:"Player",
    cash:200,
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.cash
//CASH
//function cashDeduct() {
//    player.cash-=10
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
//BUTTONS
const startBtn=document.getElementById("start-btn").style.display=""
const newCardBtn=document.getElementById("newCard-btn").style.display="none"
const aceOneEl=document.getElementById("aceOne-el").style.display="none"
const aceElevenEl=document.getElementById("aceEleven-el").style.display="none"
//START GAME
function startGame() {
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    document.getElementById("start-btn").style.display="none"
    document.getElementById("newCard-btn").style.display="unset"
    document.getElementById("aceOne-el").style.display="none"
    document.getElementById("aceEleven-el").style.display="none"
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
            document.getElementById("start-btn").style.display="unset"
            document.getElementById("newCard-btn").style.display="none"
    }else {
            message="You lose!" 
            isAlive=false
            document.getElementById("start-btn").style.display="unset"
            document.getElementById("newCard-btn").style.display="none"
    }
    messageEl.textContent=message
    }
//NEW CARD
function newCard() {
    if(isAlive===true&&hasBlackjack===false) { //THIS IS AN "AND" STATEMENT AND REQUIRES BOTH CONDITIONS ARE MET TO CONTINUE.
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
//RANDOM CARD
function getRandomCard() {
    let randomCard=Math.floor(Math.random()*12)+1
        if (randomCard===1&&hasBlackjack===false&&isAlive===true){
            document.getElementById("newCard-btn").style.display="none"
            document.getElementById("aceOne-el").style.display="unset"
            document.getElementById("aceEleven-el").style.display="unset"
            return new Promise(getAceCard)
        }else if (randomCard>10) {
            return 10
        }else {
            return (randomCard)
        }
}
//ACE CARD
function getAceCard(aceOne,aceEleven) {
    aceOne();{
        aceOneEl.addEventListener("click");{
            return 1}
        }
    aceElevenEl();{
        aceElevenEl.addEventListener("click");{
            return 11}
        }
}