let userScore = 0;
let compScore = 0;

const userChoice = document.querySelectorAll(".game");
const msg = document.querySelector(".msg");
const yourScore = document.querySelector("#userScore");
const compresult = document.querySelector("#compScore");
const mode = document.querySelector(".mode");


// Computer Choice 
const compChoice = ()=> {
    const choices = ["rock" ,  "paper" , "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

// Checking System
userChoice.forEach((choice)  => {
    choice.addEventListener("click", ()=> { 
        const user = choice.getAttribute("id");
        let comp = compChoice();
        checkData(user,comp);
    })
});

let isHeWin;
// checking Data 
const checkData = (user,comp)=> {
    if(user === comp){    
        msg.style.backgroundColor = "#023047";      
        msg.innerText = "Oh! It was a Draw.";
    } else {
        if( user == "paper"){
             isHeWin = comp == "rock"? true : false ;
        } else if ( user == "rock"){
            isHeWin = comp == "scissors"? true : false;
        }else if ( user == "scissors"){
            isHeWin = comp == "paper"? true : false;
        }
        Score(isHeWin,user,comp);
    }
}

//Score Updating System
const Score = (isHeWin,user,comp)=> {
    if(isHeWin){
        userScore++;
        yourScore.innerText = userScore;
        msg.innerText = `You win! Your ${user} beats ${comp}`
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compresult.innerText = compScore;
        msg.innerText = `You lost! Your ${user} could'nt stand upon ${comp} `
        msg.style.backgroundColor = "red";
    }
};

// Display Mode 
let type = true;

mode.addEventListener("click", ()=> {
    if(type){ 
        document.body.style.backgroundColor = "#212121"
        document.body.style.color = "#fff"
        type = false;
    }else {
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#212121"
        type = true;
    }
    })
