//CARDS
let firstCard=20
let secondCard=0
let thirdCard=0
let forthCard=0
let fifthCard=0
let sixthCard=0
let seventhCard=0
//CONDITIONS
let hasBlackjack=false //this is a boolean statement (true or false)
let isAlive=true
//OUTPUT
let message=""
let messageEl=document.getElementById("message-el")
let sum=firstCard+secondCard
let sumEl=document.getElementById("sum-el")
//START GAME
function startGame() {
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