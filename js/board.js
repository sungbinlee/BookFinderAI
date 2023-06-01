document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];
    let gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // 2D array representing the board

    let currentPlayer = 'X';
    let gameEnded = false;

    // Create the game board
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => {
                if (!gameEnded && gameBoard[i][j] === 0) {
                    cell.innerText = currentPlayer;
                    gameBoard[i][j] = currentPlayer === 'X' ? 1 : -1;
                    // checkForWin();
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    if (!gameEnded) {
                        // makeAIMove();
                        // checkForWin();
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    }

                    const userInput = {
                        role: 'user',
                        content: `User INPUT: action: start, board:${JSON.stringify(gameBoard)}.`
                    };

                    // Send userInput to the AI
                    // Example of sending userInput to the AI:
                    sendToAI(userInput);
                }
            });
            board.appendChild(cell);
            cells.push(cell);
        }
    }
});
