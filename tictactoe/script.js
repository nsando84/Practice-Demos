const rootDiv = $('#root')
const wrapperDiv = $('<div>')

$(rootDiv).css({
    'textAlign': 'center',
    'fontSize': '26px',
    'padding': '20px'
}).text('Tic Tac Toe')

$(wrapperDiv).css({
    'margin': 'auto',
    'width': '400px',
    'height': '400px',
    'marginTop': '20px',
    'border': '1px solid black',
    'display': 'flex',
    'flexWrap': 'wrap'
})

$(wrapperDiv).appendTo(rootDiv)

for (let i = 1; i < 10; i++) {
    const gameBox = $('<div>', {
        id: i,
        style: `
            border: 1px solid black;
            width: 30%;
            height: 30%;
            margin: auto    
        `
    })
    gameBox.appendTo(wrapperDiv)
}
