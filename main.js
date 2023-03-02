var guesslist = ['rock', 'paper', 'scissors'];

var randPick = Math.floor(Math.random()*3);

var guess = guesslist[randPick];

console.log(guess)

// var choice = prompt("Rock, Paper Scissors?");

// switch(choice){
//     case guess:
//         console.log("tie game");
//         break;

//     case "rock":
//         if (guess==='paper'){
//             console.log('you lose ')
//         }
//         else{
//             console.log('you win')
//         }
//         break;
//     case "paper":
//         if (guess==='rock'){
//             console.log('you win')
//         }
//         else{
//             console.log('you lose')
//         }
//         break;
//     case "scissors":
//         if (guess==='paper'){
//             console.log('you win ')
//         }
//         else{
//             console.log('you lose')
//         }
//         break;
// }




// let vacancy = prompt("Is there vacancy at your company?, if no leave blank");

// if (vacancy==='no'){
//     vacancy=false;
// }

// let response = vacancy ? "Yes there's vacancy!" :"Sorry no vacancy";
// console.log(response);

// let testScore = prompt("Enter your score: 0-100");

// let grade = testScore>89 ? "A": testScore>79 ? "B": testScore>69 ? "C": testScore>59 ? "D": testScore>49 ? "E": "F";
// console.log(`Your grade is a beautiful ${grade}`)



// let loss = "computer wins!";
// let win = "you win!"; 
// let result="its a tie!";

// if(guess===choice){
//     let result="its a tie!";
//     console.log(result)
// }
// else if (guess==='rock'){
//     let result = choice=="paper"?loss:choice=='scissors'?win:result;
//     console.log(result)
// }
// else if (guess==='paper'){
//     let result = choice=="rock"?loss:choice=='scissors'?win:result;
//     console.log(result)
// }
// else if (guess==='scissors'){
//     let result = choice=="paper"?loss:choice=='rock'?win:result;
//     console.log(result)
// }


// using ternary operator
// function rps(){
//     var choice = prompt("Rock, Paper Scissors?");
//     let newresult = 
//         guess===choice?
//         "its a tie!":
//         choice==='rock' && guess==='paper'?
//         "commputer wins!":
//         choice==='paper' && guess==='scissors'?
//         "commputer wins!":
//         choice==='scissors' && guess==='rock'?
//         "commputer wins!":
//         choice!=='rock' || choice!=='paper' || choice!=='scissors'?"invalid input":
//         "you win!";
//     console.log(newresult);
// }

name = prompt('name: ')
if(name){
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim()); //name.trim truncates extra whitespaces in a string and prints out
}
else{
    console.log("enter your name");
}
