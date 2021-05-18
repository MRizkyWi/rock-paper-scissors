const winScore = 5

let human = ""
let comp = ""
let humanScore = 0
let compScore = 0
let gameOver = false
let humanWinning = true

function chooseWeapon(clicked_id) {
    if (!gameOver) {
        human = clicked_id
        chooseWeaponCom()
        whoWin()
        updateScoreboard()
        checkWin()
    } else {
        if (humanWinning) {
            updateMessageBoard("Stop! Stop! Comp's already dead")
        } else {
            updateMessageBoard("You couldn't live up to your failure. and what you do? back to me")
        }
    }   
}

function restart(){
    human = ""
    comp = ""
    humanScore = 0
    compScore = 0
    gameOver = false

    updateMessageBoard("")
    updateScoreboard()
}

function checkWin(){
    let humanWin = humanScore == 5
    let compWin = compScore == 5

    if (humanWin) {
        gameOver = true
        humanWinning = true
    }

    if (compWin) {
        gameOver = true
        humanWinning = false
    }
}

function chooseWeaponCom() {
    let num = Math.floor(Math.random() * 3)
    comp = switchNumToWeapon(num)
}

function whoWin(){
    let result = 1
    switch(human){
        case "rock":
            switch (comp){
                case "paper":
                    result = 2;
                    break;
                case "scissors":
                    result = 0;
                    break;
            }
            break;
        case "paper":
            switch (comp){
                case "scissors":
                    result = 2;
                    break;
                case "rock":
                    result = 0;
                    break;
            }
            break;
        case "scissors":
            switch (comp){
                case "paper":
                    result = 2;
                    break;
                case "rock":
                    result = 0;
                    break;
            }
            break;
    }
    switch (result) {
        case 0:
            humanScore++
            updateMessageBoard(`You won this round! You choose ${human} while comp choose ${comp}`)
            break;
        case 1:
            updateMessageBoard(`Tied! Both of you choose ${comp}`)
            break;
        case 2:
            compScore++
            updateMessageBoard(`You lose this round! You choose ${human} while comp choose ${comp}`)
            break;
    }
}

function switchNumToWeapon(num) {
    switch(num){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function updateMessageBoard(text){
    document.getElementById('messageboard').innerHTML = text
}

function updateScoreboard(){
    document.getElementById('scoreboard').innerHTML = `human ${humanScore} - ${compScore} computer`
}