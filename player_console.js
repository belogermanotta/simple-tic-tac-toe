const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputPlayer1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter name for Player 1: ', (answer) => {
            resolve(answer);
        });
    })
}

const inputPlayer2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter name for Player 2: ', (answer) => {
            resolve(answer);
        });
    })
}

const inputBoardSize = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter board size (3-5): ', (answer) => {
            resolve(answer);
        });
    })
}

const inputPlayerMove = (playerName, symbol) => {
    return new Promise((resolve, reject) => {
        rl.question(`${playerName}, choose a box to place an '${symbol}' into: `, (answer) => {
            resolve(answer);
        });
    })
}

module.exports = {
    boardSize: async () => {
        return await inputBoardSize();
    },
    player: async () => {
        const player1 = await inputPlayer1();
        const player2 = await inputPlayer2();
        return { 'player1': player1, 'player2': player2 };
    },
    move: async (playerName, symbol) => {
        return await inputPlayerMove(playerName, symbol);
    },
    close: () => {
        rl.close();
    },
};
