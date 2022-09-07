const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
//pega os botões rock, paper scissors
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoice.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', e => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
  })
)

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 //ou você pode usar possibleChoice.lenght
  console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }

  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }

  if (randomNumber === 3) {
    computerChoice = 'paper'
  }

  computerChoiceDisplay.innerHTML = computerChoice
}
