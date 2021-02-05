
const gameLoop = (choose) => {
    const picks = ['rock', 'paper', 'scissors']
    const computerChoose = picks[Math.floor(Math.random() * 3)];
    const usersChoose = choose;

    if (computerChoose === usersChoose) {
        return alert(`Computer picked ${computerChoose}. Game is tie.`)
    }

    if (usersChoose === 'rock' && computerChoose === 'scissors' ||
        usersChoose === 'paper' && computerChoose === 'rock' ||
        usersChoose === 'scissors' && computerChoose === 'paper') {
        return alert(`Computer picked ${computerChoose}. You won!!`)
    }

    return alert(`Computer picked ${computerChoose}. You lose :(`)

}

const gameStart = () => {
    alert('Computer wants to play rock paper scissors')

    let choose = prompt('type rock, paper, scissors to choose!')
    choose = choose.toLowerCase().trim()

    if (choose === null) {
        alert('Good bye.')
    } else if (choose === 'rock' || choose === 'paper' || choose === 'scissors') {
        gameLoop(choose)
    } else {
        gameStart()
    }

}

gameStart()
