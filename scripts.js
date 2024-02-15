//factory to create board IIFE
//factory to keep score using play 1 name and pkayer 2 name
//randomizer to see who goes first
//How it should work: CP picks random empty space, player picks empty space.
//when x or o placed, index into array and place x or o

//things to consider: cant pick taken space, how to evaluate win conditions

const gameBoard = (function () {
    //creates initial board
    const board = () => {
        ['','','','','','','','',''];
    }

    //resets board to blank
    const resetBoard = (function () {
        board = ['','','','','','','','',''];
    })

    //checks if cell is empty
    const isEmpty = (i) => board(i) === '';

    //places mark for appropriate player on board
    const placePiece = (piece, i) => {
        if(isEmpty[i]) { //i should maybe be wrapped in parenthesis?
            board[i] = piece;
            return true;
        } else {
            return false;
        }
    }

    //function to check for win/tie
    
    return { board, resetBoard, isEmpty, placePiece };
})();

function player (name, piece) {
    return { name, piece }
};

function gameController() {
    let playerOne = "Player One";
    let playerTwo = "PLayer Two";


};

console.log(gameBoard.board)

