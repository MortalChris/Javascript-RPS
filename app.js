/*****Converts user inout to lower case and only accepts 3 rps signs*********/
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  if(userInput === `rock` ||userInput === `paper` ||userInput === `scissors` || userInput === `bomb`){
    return userInput;
  } else{
    console.log(`Input rock, paper, or scissors instead.`);
  }; 
 };
/***********Randomizes computer signs*************/
const getComputerChoice = () => {
    const cpuInput = Math.floor(Math.random() * 3) + 1;
      if(cpuInput === 1){
        return `rock`;
      } else if (cpuInput === 2){
        return `paper`;
      } else if(cpuInput === 3){
        return `scissors`
      };

};
/*********Determines who wins within a round**************/
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return `This was a tie`;
  };
  if(userChoice === `bomb`){
    return console.log(`User won!`)
  }
    
  if(userChoice === `rock`){
    if(computerChoice === `paper`){
      return console.log(`Computer won!`);
    } else{
      return console.log(`User won!`);
      };
    };
    
  if(userChoice === `paper`){
    if(computerChoice === `scissors`){
      return console.log(`Computer won!`);
    } else {
      return console.log(`User won!`)
    };
  };
  
};


const playGame = () => {
  let userChoice = getUserChoice(`bomb`);
  console.log(`User: ` + userChoice);
  let computerChoice = getComputerChoice();
  console.log(`Computer: ` + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
