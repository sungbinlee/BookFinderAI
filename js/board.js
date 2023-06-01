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
                    checkForWin();
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

                    const userInput = {
                        role: 'user',
                        content: `User INPUT: action: start, board:${JSON.stringify(gameBoard)}.`
                    };

                    if (!gameEnded) {
                        makeAIMove(userInput);
                        checkForWin();
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
    function checkForWin() {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] !== 0 && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
                gameEnded = true;
                announceWinner(gameBoard[i][0]);
                return;
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (gameBoard[0][j] !== 0 && gameBoard[0][j] === gameBoard[1][j] && gameBoard[0][j] === gameBoard[2][j]) {
                gameEnded = true;
                announceWinner(gameBoard[0][j]);
                return;
            }
        }

        // Check diagonals
        if (gameBoard[0][0] !== 0 && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
            gameEnded = true;
            announceWinner(gameBoard[0][0]);
            return;
        }
        if (gameBoard[0][2] !== 0 && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
            gameEnded = true;
            announceWinner(gameBoard[0][2]);
            return;
        }

        // Check for a tie
        if (!gameBoard.flat().includes(0)) {
            gameEnded = true;
            announceTie();
            return;
        }
    }

    function announceWinner(player) {
        if (player === 1) {
            alert("당신이 승리했습니다!");
        } else {
            alert("Chat GPT가 이겼네요!");
        }
        // resetBoard();
    }

    // Announce a tie
    function announceTie() {
        alert("비겼습니다");
        // resetBoard();
    }


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
            if (gameEnded === true) {
                alert(aiResponse.message);
                // resetBoard();
            } else {
                alert(aiResponse.message);
            }
        });
    }
});
