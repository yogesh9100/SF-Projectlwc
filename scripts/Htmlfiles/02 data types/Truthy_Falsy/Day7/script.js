//𝐀𝐬𝐬𝐢𝐠𝐧𝐦𝐞𝐧𝐭

/* 
We're building a Cricket app !

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the wicketkeeper and the others are field players. 
For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.
7. Loop over the game.Century array and print each player name to the 
console, along with the Century number (Example: "Century 1: Kohli")
8. Use a loop to calculate the average odd and log it to the console 

GOOD LUCK 😀
*/
/*const game = {
  team1: "India",
  team2: "Australia",
  players: [
    [
      "Dhoni",
      "Sharma",
      "Kohli",
      "Rahul",
      "Jadeja",
      "Pandey",
      "Ashwin",
      "Chahal",
      "Khan",
      "Bhumra",
      "Shami",
    ],
    [
      "Wade",
      "Cummins",
      "Green",
      "Maxwell",
      "Finch",
      "Hazelwood",
      "Marsh",
      "Stoinis",
      "Richardson",
      "Starc",
      "Warner",
    ],
  ],
  Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


1. //Create one player array for each team (variables 'players1' and 'players2')(destructing)
let [player1, player2] = game.players;
console.log("players",player1);
console.log("players",player2);

//2. The first player in any player array is the wicketkeeper and the others are field players.(rest operator)
let [captain, ...fieldplayers] = player1
console.log("captain", captain);
console.log("fieldplayers", fieldplayers);


//Create an array 'allPlayers' containing all players of both teams (22 players)(spread operator)
let allPlayers = [...player1,...player2];
console.log("allplayers",allPlayers);

//4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
//containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'(spread operator)

let players1Final = [...player1,"Sandeep","John","Sunil"];
console.log("players1Final",players1Final);


//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

let {team1 , x:draw, team2} = game.odds
console.log("team1",team1);
console.log("draw",draw);
console.log("team2",team2);


//6. The team with the lower odd is more likely to win. 
//Print to the console which team is more likely to win, 
//WITHOUT using an if/else statement or the ternary operator.
/*if (team1 > team2){
    console.log("team 2 will win");
} else{
    console.log("team 1 will win");
}

team1 > team2 ?  console.log("team 2 will win"): console.log("team 1 will win");*/

/*team1 < team2 && console.log("team 1 will win");
team2 < team1 && console.log("team 2 will win");


//7. Loop over the game.Century array and print each player name to the 
//console, along with the Century number (Example: "Century 1: Kohli")

for ( let [index,value] of game.Century.entries()){
    console.log('century ${index + 1}: ${value}');
}

//8. Use a loop to calculate the average odd and log it to the console 
let sum =0;
let counter = 0;
for ( let currItem of Object.values(game.odds)){
    sum = sum + currItem;
    counter = counter + 1;
}

console.log("sum", sum);
console.log("counter", counter);
console.log("average", (sum/counter));*/


// Function declaration
function calc1(number1,number2){
    let sum = number1 + number2;
    return sum;
}

// function expression

let calc2 = function (number1, number2) {
    if (number2){
        let sum = number1 + number2;
        return sum;
    } else {
        return number1; 
    }
    

};

let calc1result = calc1(10, 5);
console.log("calc1result", calc1result);

let calc2result = calc2(10,5);
console.log("calc2result", calc2result);


let calc3result = calc2(10);
console.log("calc3result", calc3result);



let calc3 =  (number1, number2) =>{
    if (number2){
        let sum = number1 + number2;
        return sum;
    } else {
        return number1; 
    }
    

};

let calc4result = calc2(10,5);
console.log("calc4result", calc4result);

let great = function(username){
    return'${username}, welcome to learn js';
};

let greatArrowFunction =  (username)=>'${username}, welcome to learn js';
console.log(great("yogi"));
console.log(greatArrowFunction("yogi"));

let welcomeMessage = () => "welcome to learn js";
console.log(welcomeMessage);

//callback function

function welcomeMe(name, callMe){
    console.log('hello ${name}');
    callMe();
}

function greatMeToo() {
    console.log('welcome to javascript');
}

function goodBye() {
    console.log('see you to javascript');
}

welcomeMe("yogi", greatMeToo);
welcomeMe("yogi", goodBye);

setTimeout(() => {},1000);