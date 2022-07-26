const randomFruit = () => {
   const randomNumber =
   Math.floor(Math.random() * fruit.length)
   
   return fruit[randomNumber]
}

 fruit =['applye', 'banana', 'orange', 'graph']
//   console.log(randomFruit(fruit))


  const weatherScore = (weather, weather2) => {
    let Score 
     
    if (weather === 'rainy' && weather2 === 'sunney') {
        Score = 1
    }else if (weather === 'suney' && weather2 === 'rainy') {
        Score = 2
    } else if ( weather === 'rainy'){
        Score = -1
    }
    else{
        Score = -2
    }
    return Score
  }
//    console.log(weatherScore('overCast'))
 
// ROCK < PAPER & SCISSORS------------------------->>>>>///


const totalScore = {computerScore:0 , playerScore:0 }


 

function getComputerChoice(){
  const rpsChoice = ['rock','paper','scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

// console.log(getComputerChoice)


function getResult(playerChoise, computerChoice){
  let Score;

  if(playerChoise == computerChoice) {
    Score = 1
  }else if (playerChoise == 'rock'  &&  computerChoice == 'scissors' ) {
    Score = 1
  } else if (playerChoise == 'paper'  &&  computerChoice =='rock' ) {
    Score = 1
  } else if (playerChoise == 'scissors'  &&  computerChoice =='paper' ) {
    Score = 1
  } 
  else{
    Score = -1
  }
  return Score
}
// console.log(getResult('rock', 'scissors'))


function showResult( Score, playerChoise, computerChoice){

  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoerDiv = document.getElementById('player-Score')


  if (Score == -1) {
     resultDiv.innerText = "you Lose !"
  }else if (Score == 0) {
    handDiv.innerText ="It's a tie!"
  } else {
    playerScoerDiv.innerText ="Ypu won!"
  }

  handDiv.innerText = `${playerChoise} vs ${computerChoice}`
  // playerScoerDiv.innerText = `your Score : ${totalScore['playerScore']}`
}




function onClickRPS (playerChoise){
  console.log(playerChoise)

  const computerChoice = getComputerChoice()
  console.log({computerChoice})

  const Score = getResult(playerChoise, getComputerChoice)
  totalScore['playerScore'] += Score

  console.log({Score})
  console.log(totalScore)
  showResult(Score, playerChoise, computerChoice)
}




function playGame ( ) {
  const rpsButtons = document.querySelectorAll('.rpsButton')
 rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

 
  rpsButtons.forEach(rpsButton =>  {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)


}

function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoerDiv = document.getElementById('player-Score')


  resultDiv.innerText = ''
  handDiv.innerText = ''
  playerScoerDiv.innerText = ''
}

playGame()