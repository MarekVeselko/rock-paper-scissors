let scoreNumber = 0;
document.getElementById("score").innerHTML = scoreNumber;

const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector("[data-final-column]")
const SELECTIONS = [
    {
        name: "rock",
        emoji: "images/icon-rock.png",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "images/icon-paper.png",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "images/icon-scissors.png",
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
    })
})

function makeSelection(selection){
const computerSelection = randomSelection();
const playerWinner = isWinner(selection,computerSelection);
const computerWinner = isWinner(computerSelection,selection)
document.getElementById("play-again-text").innerHTML = "draw";
if(playerWinner){
    scoreNumber = scoreNumber+1;
    document.getElementById("score").innerHTML = scoreNumber;
    document.getElementById("play-again-text").innerHTML = "You win";
}
if(computerWinner){
    scoreNumber = scoreNumber-1;
    document.getElementById("score").innerHTML = scoreNumber;
    document.getElementById("play-again-text").innerHTML = "You lose";
}

addSelectionResults(computerSelection,computerWinner)
addSelectionResults(selection,playerWinner)

document.getElementById("selections").style.display ="none";
document.getElementById("play-again-box").style.display = "inline-block";
}

function addSelectionResults(selection,winner){
    const div = document.createElement("img");
    div.src= selection.emoji;
    div.id = "result__selection"
    div.classList.add("result__selection");
    
    if(selection.name==="rock"){
        div.style.borderColor="#de405d";
    }
    if(selection.name==="paper"){
        div.style.borderColor="#516df3";
    }
    if(selection.name==="scissors"){
        div.style.borderColor="#eca318";
    }


    finalColumn.after(div)
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex]
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}


document.getElementById("play-again-btn").addEventListener("click",()=>{
    document.getElementById("selections").style.display ="inline-block";
document.getElementById("play-again-box").style.display = "none";
document.getElementById("result__selection").remove();
document.getElementById("result__selection").remove();
})

document.getElementById("rules-btn").addEventListener("click",()=>{
    document.getElementById("rules-box").style.display = "inline-block";
})

document.getElementById("x-button").addEventListener("click",()=>{
    document.getElementById("rules-box").style.display = "none";
})