
var input = require('./player_console')
var board = require('./board')

const printResult = (status) => {
    switch (status) {
        case -1:
            process.stdout.write("It's a draw\n");
            break;
        case 1:
            process.stdout.write("Player 1 win\n");
            break;
        case 2:
            process.stdout.write("Player 2 win\n");
            break;
    }
}

const main = async () => {
    const player = await input.player();
    const size = await input.boardSize();

    let currentPlayer = player.player1;
    let states = [], rowCounter = [], colCounter = [];
    let diagLeft = 0, diagRight = 0, status = 0, countMove = 0;

    while (status == 0) {
        board.print(states, size);
        const symbol = currentPlayer == player.player1 ? 'x' : 'o';
        const move = await input.move(currentPlayer, symbol);
        if (states[move - 1] != undefined) {
            process.stdout.write("Invalid move, please try again \n");
            continue;
        }

        let state = currentPlayer == player.player1 ? 1 : -1;
        states[move - 1] = state;
        let row = Math.floor((move - 1) / size);
        let col = (move - 1) % size;

        rowCounter[row] = rowCounter[row] == null ? 0 + state : rowCounter[row] + state;
        colCounter[col] = colCounter[col] == null ? 0 + state : colCounter[col] + state;

        if (row == col) diagLeft += state;
        if (row == size - col - 1) diagRight += state;
        if (rowCounter[row] == 3 || colCounter[col] == 3 || diagLeft == 3 || diagRight == 3) {
            status = 1;
            break;
        }
        if (rowCounter[row] == -3 || colCounter[col] == -3 || diagLeft == -3 || diagRight == -3) {
            status = 2;
            break;
        }

        currentPlayer = currentPlayer == player.player1 ? player.player2 : player.player1;
        countMove++;
        if (countMove == size * size) {
            status = -1;
            break;
        }
    }

    board.print(states, size);
    printResult(status);

    input.close();
}

main()

