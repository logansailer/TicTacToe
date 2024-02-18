//factory to create board IIFE
//factory to keep score using play 1 name and pkayer 2 name
//randomizer to see who goes first
//How it should work: CP picks random empty space, player picks empty space.
//when x or o placed, index into array and place x or o

//things to consider: cant pick taken space, how to evaluate win conditions

const GameBoard = (function () {
    //creates initial board
    let board = () => {
        ['','','','','','','','',''];
    };

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
        //return true for winner
    }
    
    return { board, resetBoard, isEmpty, placePiece };
})();

function Player (name, piece) {
    return { name, piece }
};

const GameController = (() => {
    let currentPlayer = p1;
    let winner = null;

    const switchPlayer = () => {
        if (currentPlayer = p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
    }

    const makeMove = (index) => {
        if(!winner && GameBoard.isEmpty(index)) {
            GameBoard.placePiece(currentPlayer.piece, index);
            winner = gameBoard.checkForWin()
            if (winner && winner != 'tie') {
                winnder = currentPlayer;
            }
            switchPlayer();
        }
    }
});

const p1 = Player('Player 1', 'X');
const p2 = Player('Player 2', 'O');

console.log(gameBoard.board)

