import * as gpt from "./chatgpt_interface.js";

document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];
    let gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // 게임판 

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

                    const userInput = {
                        role: 'user',
                        content: `User INPUT: action: start, board:${JSON.stringify(gameBoard)}.`
                    };

                    if (!gameEnded) {
                        makeAIMove(userInput);
                        // checkForWin();
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    }

                    // Send userInput to the AI
                    // Example of sending userInput to the AI:
                }
            });
            board.appendChild(cell);
            cells.push(cell);
        }
    }

    // // Check if there is a winner
    // function checkForWin() {
    //     // ...
    //     // Remaining code remains the same
    // }


    // Make a move for the AI opponent
    function makeAIMove(userInput) {

        gpt.sendToAI(userInput).then(res => {
            console.log(res);

            const aiResponse = res;

            // Update the game board based on the AI's response
            gameBoard = aiResponse.board;

            // Display the AI's move on the game board
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (gameBoard[i][j] !== 0) {
                        cells[i * 3 + j].innerText = gameBoard[i][j] === -1 ? 'O' : 'X';
                    }
                }
            }

            // Announce the result from the AI's response
            if (aiResponse.action === "end") {
                gameEnded = true;
                alert(aiResponse.message);
                resetBoard();
            } else {
                alert(aiResponse.message);
            }
        });
    }
});
