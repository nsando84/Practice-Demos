
// Game Styling //

const rootDiv = $('#root');
const wrapperDiv = $('<div>');
const gameStartDiv = $('<div>');
const gameStartInfo = $('<div>')
const gameStartButton = $('<button>');


$(rootDiv).css({
    'textAlign': 'center',
    'fontSize': '26px',
    'padding': '20px'
}).text('Tic Tac Toe');

$(wrapperDiv).css({
    'margin': 'auto',
    'width': '400px',
    'height': '400px',
    'marginTop': '20px',
    'border': '1px solid black',
    'display': 'flex',
    'flexWrap': 'wrap'
});

$(wrapperDiv).appendTo(rootDiv);

let gameBox;
for (let i = 1; i < 10; i++) {
    gameBox = $('<div>', {
        id: i,
        class: 'gameBox',
        style: `
            border: 1px solid black;
            width: 30%;
            height: 30%;
            margin: auto    
        `
    });
    gameBox.appendTo(wrapperDiv);
};



$(gameStartDiv).appendTo(rootDiv);
gameStartDiv.css({
    'marginTop': '25px'
});

$(gameStartInfo).appendTo(gameStartDiv)
gameStartInfo.css({
    'height': '50px',
    'fontSize': '16px'  
})

$(gameStartButton).appendTo(gameStartDiv);

$(gameStartButton).css({
    'padding': '5px 10px',
    'fontSize': '15px',
    'backgroundColor': 'white',
    'border': '1px solid black'
}).text('Start Game');



// Game Start Logic //

const winningCombinations = [
    [123],[456],[789],
    [147],[258],[369],
    [159],[357]
];

const playerX = {
    gamePiece: 'x',
    pickArray: [],
};

const playerO = {
    gamePiece: 'o',
    pickArray: [],
};

const startGame = () => {

    let playersTurn;
    
    const firstTurnRandom = Math.floor(Math.random() * Math.floor(2))
    if (firstTurnRandom === 0) {
        playersTurn = 'X'
    } else {
        playersTurn = 'O'
    }

    const playerInstruction = (playersTurn) => {
        gameStartInfo.text(`${playersTurn}'s turn.`)
    }
    
    playerInstruction(playersTurn)
     
    $('.gameBox').click(e => {
        const boxColor = playersTurn === 'X' ? 'lavender' : 'papayawhip'
        
        $(`#${e.target.id}`).css({
            'backgroundColor': boxColor,
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'fontSize': '108px'
        }).text(playersTurn)

        if (playersTurn === 'X') {
            playersTurn = 'O'
        } else {
            playersTurn = 'X'
        }

        playerInstruction(playersTurn)
    })

    
};


$(gameStartButton).click(() => {
    startGame()
});


