let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b30";
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats Your${userChoice}.`;
        msg.style.backgroundColor="red";
    }
};
const playGame= (userChoice) => {
    console.log("user choice= ",userChoice);
    // generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice= ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper or scissors
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //scissors or rock
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            // paper or rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});