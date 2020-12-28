
// Game Styling //

const rootDiv = $('#root');
const wrapperDiv = $('<div>');
const gameStartDiv = $('<div>');
const gameStartMessage = $('<div>')
const gameStartInfo = $('<div>');
const gameStartButton = $('<button>');
const gameResetButton = $('<button>')

rootDiv.css({
    'textAlign': 'center',
    'fontSize': '26px',
    'padding': '20px'
}).text('Tic Tac Toe');

wrapperDiv.css({
    'margin': 'auto',
    'width': '400px',
    'height': '400px',
    'marginTop': '20px',
    'border': '1px solid black',
    'display': 'flex',
    'flexWrap': 'wrap'
});

wrapperDiv.appendTo(rootDiv);

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



gameStartDiv.appendTo(rootDiv);
gameStartDiv.css({
    'marginTop': '25px'
});

gameStartInfo.appendTo(gameStartDiv)
gameStartInfo.css({
    'height': '50px',
    'fontSize': '16px'  
});

gameStartButton.appendTo(gameStartDiv);

gameStartButton.css({
    'padding': '5px 10px',
    'fontSize': '15px',
    'backgroundColor': 'white',
    'border': '1px solid black'
}).text('Start Game');

gameResetButton.css({
    'padding': '5px 10px',
    'fontSize': '15px',
    'backgroundColor': 'white',
    'border': '1px solid black'
}).text('Reset Game');

gameResetButton.click(() => {
    location.reload()
});

gameStartMessage.appendTo(gameStartDiv)
gameStartMessage.css({
    'marginTop': '10px',
    'fontSize': '12px',
    'color': 'red'
});

// Game Start Logic //

gameStartInfo.text('Click on Start Game to play.');

let isGameCurrent; 

const winningCombinations = [
    [123],[456],[789],
    [147],[258],[369],
    [159],[357]
];

const playerX = {
    pickArray: [],
};

const playerO = {
    pickArray: [],
};

const startGame = () => {

    let playersTurn;
    
    const firstTurnRandom = Math.floor(Math.random() * Math.floor(2));
    if (firstTurnRandom === 0) {
        playersTurn = 'X';
    } else {
        playersTurn = 'O';
    };

    const playerInstruction = playersTurn => {
        gameStartInfo.text(`${playersTurn}'s turn.`);
    };
    
    playerInstruction(playersTurn);
    
    const runWin = (player, winningNum) => {
        $('.gameBox').unbind('click');
        for (let i = 0; i < 3; i++) {
            $(`#${winningNum[i]}`).css({
                'backgroundColor': 'lightgreen'
            });
        };

        
        gameStartInfo.css({
            'fontSize': '24px',
            'color': 'light'
        });

        gameStartInfo.text(`${player}'s won!!`);

        gameResetButton.appendTo(gameStartDiv)

    };

    const checkWin = (player, idOfBox) => {
        let resultCheck = false;

        const workCombinations = (playerArray) => {
            const result = [];
            const combos = (prefix, playerArray) => {
              for (let i = 0; i < playerArray.length; i++) {
                  const resultRound = prefix + playerArray[i]
                  if (resultRound.length === 3) {
                      result.push((prefix + playerArray[i]).split('').sort().join(''));
                  };
                  combos(prefix + playerArray[i], playerArray.slice(i + 1));
              };
            };

            combos('', playerArray);

            result.map(num => {
              winningCombinations.map(e => {
                  if (e[0] == num) {
                    runWin(player, num);
                    resultCheck = true;
                  };
              });
            });
            
        };

        if (player === 'X') {
            playerX.pickArray.push(idOfBox);
            if (playerX.pickArray.length > 2) {
                workCombinations(playerX.pickArray);
            }
        } else {
            playerO.pickArray.push(idOfBox);
            if (playerO.pickArray.length > 2) {
                workCombinations(playerO.pickArray);
            };      
        };
    
        return resultCheck;
    };

    $('.gameBox').click(e => {
        
        if ($(`#${e.target.id}`).text()) {
            gameStartMessage.text('Please pick another box.');
            return;
        } else {
            gameStartMessage.text('');
        };

        const boxColor = playersTurn === 'X' ? 'lavender' : 'papayawhip';
        
        $(`#${e.target.id}`).css({
            'backgroundColor': boxColor,
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'fontSize': '108px'
        }).text(playersTurn);

        if (!checkWin(playersTurn, e.target.id)) {
            if (playersTurn === 'X') {
                playersTurn = 'O';
            } else {
                playersTurn = 'X';
            };
            return playerInstruction(playersTurn);
        };     
    });    
};



// Init function //

gameStartButton.click(() => {
    if (isGameCurrent) {
        return gameStartMessage.text('Game already started');
    };

    startGame();
    isGameCurrent = true;
});


