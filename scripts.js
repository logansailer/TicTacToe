const p1 = Player('Player 1', 'X');
const p2 = Player('Player 2', 'O');

const GameBoard = (() => {
    //creates initial board
    let board =  ['','','','','','','','',''];

    const getBoard = () => board;

    //resets board to blank
    const resetBoard = () => {
        board = ['','','','','','','','',''];
    };

    //checks if cell is empty
    const isEmpty = (index) => board[index] === '';

    //places mark for appropriate player on board
    const placePiece = (piece, index) => {
        if(isEmpty(index)) {
            board[index] = piece;
            return true;
        } else {
            return false;
        }
    }

    //function to check for win/tie
    const checkForWin = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]];
        for (let i of winningCombos) {
            if (i) {}
        } return false;
    }
    
    return { getBoard, resetBoard, isEmpty, placePiece, checkForWin };
})();

//creates player
function Player (name, piece) {
    return { name, piece }
};

const GameController = (() => {
    let currentPlayer = p1;
    let winner = false;

    const switchPlayer = () => {
        currentPlayer = (currentPlayer === p1) ? p2 : p1;
    }
    //places piece in clicked tile, then checks if that move wins game. If not, switches player
    const move = (index) => {
        if(!winner && GameBoard.isEmpty(index)) {
            GameBoard.placePiece(currentPlayer.piece, index);
            winner = GameBoard.checkForWin()
            if (winner && winner != 'tie') {
                winner = currentPlayer;
            }
            switchPlayer()
        }
    }

    const getWinner = () => winner;

    return {switchPlayer, move, getWinner}
})();

const makeBoard = () => {
    const board = document.querySelector('#board');
    board.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = GameBoard.getBoard()[i];

        cell.addEventListener('click', () => {
            if(!GameController.getWinner() && GameBoard.isEmpty(i)) {
                GameController.move(i);
                makeBoard()
            }
        })
        board.appendChild(cell);
    }
};

makeBoard()