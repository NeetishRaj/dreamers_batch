/**
 * Write a function in JS to store the chess pieces of a chess board.
 * Given: Chess board is 2D array of size 8 x 8
 * Also print the chess board in the console using console.log
 * 
 * Black King = BK  (Raja)
 * Black Queen = BQ (Raani)
 * Black Knight = BN (Ghoda)
 * Black Rook = BR (Haathi)
 * Black Bishop = BB (Oot)
 * Black Pawn = BP (sipahi)
 * 
 * 
 * White King = WK  (Raja)
 * White Queen = WQ (Raani)
 * White Knight = WN (Ghoda)
 * White Rook = WR (Haathi)
 * White Bishop = WB (Oot)
 * White Pawn = WP (sipahi)
 * 
 * const board = [
 *      A[1, 2, 3, 4, , 5, 6, 7, 8],
 *      B[1, 2, 3, 4, , 5, 6, 7, 8],
 *      ,
 *  
 *      ,
 *      H[1, 2, 3, 4, , 5, 6, 7, 8]
 * ]
 * 
 * 
 * 
 * 
 * 
 */


const board = [
    ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
    ['WR', 'WN', 'W', 'WQ', 'WK', 'W', 'WN', 'WR'],
]

for (let row = 0; row < 8; row++) {
    let row_str = ''; 

    for (let piece = 0; piece < 8; piece++) {
        row_str += board[row][piece] + '\t';
    }

    console.log(row_str);
}