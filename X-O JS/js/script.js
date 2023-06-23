let count = 0;
let gameBtn = document.getElementsByClassName("btn")
let xScoreCount = 0
let oScoreCount = 0
let xScore = document.getElementById("x_score")
let oScore = document.getElementById("o_score")
let winnerX = document.getElementById("winner_x")
let winnerO = document.getElementById("winner_o")
let rowX = document.createElement("div")
let rowO = document.createElement("div")
let againBtn = document.getElementById("again_btn")
let rowAgainBtn = document.createElement("button")

game.onclick = function (event) {
    if (event.target.className == "btn") {
        if (count % 2 == 0) {
            event.target.innerHTML = "X"
            event.target.setAttribute("disabled", true)
            event.target.style.color = "white"
            count++
        }else{
            event.target.innerHTML = "O"
            event.target.setAttribute("disabled", true)
            event.target.style.color = "white"
            count++
        }
    }
    checkWinner()
}
function checkWinner() {
    if (gameBtn[0].innerHTML == "X" && gameBtn[1].innerHTML == "X" && gameBtn[2].innerHTML == "X" ||
        gameBtn[3].innerHTML == "X" && gameBtn[4].innerHTML == "X" && gameBtn[5].innerHTML == "X" ||
        gameBtn[6].innerHTML == "X" && gameBtn[7].innerHTML == "X" && gameBtn[8].innerHTML == "X" ||
        gameBtn[0].innerHTML == "X" && gameBtn[3].innerHTML == "X" && gameBtn[6].innerHTML == "X" ||
        gameBtn[1].innerHTML == "X" && gameBtn[4].innerHTML == "X" && gameBtn[7].innerHTML == "X" ||
        gameBtn[2].innerHTML == "X" && gameBtn[5].innerHTML == "X" && gameBtn[8].innerHTML == "X" ||
        gameBtn[0].innerHTML == "X" && gameBtn[4].innerHTML == "X" && gameBtn[8].innerHTML == "X" ||
        gameBtn[2].innerHTML == "X" && gameBtn[4].innerHTML == "X" && gameBtn[6].innerHTML == "X") {
        xScoreCount++
        xScore.innerHTML = xScoreCount

        for (let i = 0; i < gameBtn.length; i++) {
            gameBtn[i].innerHTML = " ";
            gameBtn[i].disabled = false
        }

        if (xScore.innerHTML == 3) {
            for (let i = 0; i < gameBtn.length; i++) {
                gameBtn[i].disabled = true
            }
            winnerX.appendChild(rowX)
            rowX.setAttribute("class", "win_x")
            rowX.innerHTML = "-X- IS WINNER"
            winnerO.append(rowO)
            rowO.setAttribute("class", "win_o")
            rowO.innerHTML = "-O- IS LOOSER"
            tryAgain()
        }
        
    }
    
    if (gameBtn[0].innerHTML == "O" && gameBtn[1].innerHTML == "O" && gameBtn[2].innerHTML == "O" ||
        gameBtn[3].innerHTML == "O" && gameBtn[4].innerHTML == "O" && gameBtn[5].innerHTML == "O" ||
        gameBtn[6].innerHTML == "O" && gameBtn[7].innerHTML == "O" && gameBtn[8].innerHTML == "O" ||
        gameBtn[0].innerHTML == "O" && gameBtn[3].innerHTML == "O" && gameBtn[6].innerHTML == "O" ||
        gameBtn[1].innerHTML == "O" && gameBtn[4].innerHTML == "O" && gameBtn[7].innerHTML == "O" ||
        gameBtn[2].innerHTML == "O" && gameBtn[5].innerHTML == "O" && gameBtn[8].innerHTML == "O" ||
        gameBtn[0].innerHTML == "O" && gameBtn[4].innerHTML == "O" && gameBtn[8].innerHTML == "O" ||
        gameBtn[2].innerHTML == "O" && gameBtn[4].innerHTML == "O" && gameBtn[6].innerHTML == "O") {

            oScoreCount++
            oScore.innerHTML = oScoreCount

        for (let i = 0; i < gameBtn.length; i++) {
            gameBtn[i].innerHTML = " ";
            gameBtn[i].disabled = false
        }

        if (oScore.innerHTML == 3) {
            for (let i = 0; i < gameBtn.length; i++) {
                gameBtn[i].disabled = true
            }
            winnerX.appendChild(rowX)
            rowX.setAttribute("class", "win_x")
            rowX.innerHTML = "-X- IS LOOSER"
            winnerO.append(rowO)
            rowO.setAttribute("class", "win_o")
            rowO.innerHTML = "-O- IS WINNER"
            tryAgain()
        }
    }
}

function tryAgain() {
    if (xScore.innerHTML == 3 || oScore.innerHTML == 3) {
        againBtn.appendChild(rowAgainBtn)
        rowAgainBtn.setAttribute("id", "again")
        rowAgainBtn.innerHTML = "TRY AGAIN"
    }
}

rowAgainBtn.onclick = function () {
    count = 0
    xScoreCount = 0
    oScoreCount = 0
    xScore.innerHTML = xScoreCount
    oScore.innerHTML = oScoreCount
    winnerX.removeChild(rowX)
    winnerO.removeChild(rowO)
    againBtn.removeChild(rowAgainBtn)

    for (let i = 0; i < gameBtn.length; i++) {
        gameBtn[i].innerHTML = " ";
        gameBtn[i].disabled = false
    }
}
