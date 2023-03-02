let letsPlay = confirm("shall we play a game? ");
if (letsPlay){

    var guesslist = ['rock', 'paper', 'scissors'];

    var randPick = Math.floor(Math.random()*3);

    var guess = guesslist[randPick];

    console.log(guess)

    function rps(){
        var playerChoice = prompt("Rock, Paper Scissors?");
        if(playerChoice){
            let choice = playerChoice.trim().toLowerCase(); 

        let newresult = 
            guess===choice?
            "its a tie!":
            choice==='rock' && guess==='paper'?
            "commputer wins!":
            choice==='paper' && guess==='scissors'?
            "commputer wins!":
            choice==='scissors' && guess==='rock'?
            "commputer wins!":
            choice==='rock' && guess==='scissors'?
            "you win!":
            choice==='paper' && guess==='rock'?
            "you win!":
            choice==='scissors' && guess==='paper'?
            "you win!":
            choice!=='rock' || choice!=='paper' || choice!=='scissors'?"invalid input":
            "you win!";
        console.log(newresult);
        let playAgain = confirm("Do you want to play again?")?location.reload():alert("Thanks for playing!")   
        }
        else{
            alert("game has been canceled")
        }
    }
    rps()
}
else{
    alert("mayber another time")
}

let emailAddress='tohmi02@gmail.com';
function getUserNameFromEmail(){
    let lp = [];
    for(let i=0; i<=(emailAddress.length-1); i++){
        // console.log(i);
        lp.push(emailAddress.charAt(i))
        // var1.concat(emailAddress.charAt(i))
        if(emailAddress.charAt(i+1)==='@'){
            // console.log(emailAddress.charAt(i))
            break;
        }
    }
    console.log(lp)
    var newlp = lp.join("");
    console.log(newlp);

}
getUserNameFromEmail()


var x=1;
let y=2;
const z=3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    var x=4;
    let y=5;
    const z=6;
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {
        var x=7;
        let y=8;
        const z=9;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`outsideB: ${x}`);
    console.log(`outsideB: ${y}`);
    console.log(`outsideB: ${z}`);
}


myFunc();
console.log(`outsideF: ${x}`);
    console.log(`outsideF: ${y}`);
    console.log(`outsideF: ${z}`);


myArray = [10, 200, 3000]
console.log

let newObj = {name:"tofunmi",
    hobby1:"playing video games",
    hobby2:"watching movies",
    dailyActivities: {
        one:"press phone",
        two:"devotion",
        three:"eat",
        four:"press laptop",
        five:"freshen up",
        six:"sleep"
    },

    goal:"build a successful programming career",
    program: function(){
        let first= 'think'
        let second= 'code'
        let third='pretend to debug'
        let fourth='check stack overflow'
        let fifth='test'
        let sixth='actually debug'
        return(first+second+third+fourth+fifth+sixth);
    }
    }
let tofunmi = Object.create(newObj)
tofunmi.surname = 'adeyinka'

let bimbo = Object.create(tofunmi)
bimbo.ride = 'corolla'
bimbo.code={
    first: 'think',
    second: 'code',
    third:'pretend to debug',
    fourth:'check stack overflow',
    fifth:'test',
    sixth:'actually debug'
}

// Web Storage

sessionStorage.setItem("tofunmiStore", JSON.stringify(myArray));
const tofunmiSessionData = JSON.parse(sessionStorage.getItem("tofunmiStore"));
console.log(tofunmiSessionData)
console.log(sessionStorage.length)
