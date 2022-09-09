class Chess {
    constructor() {
        this.board = [];
    }

    // Set winner is a private method
    #set_winner() {
        console.log('Black is declared winner');
    }

    start_game() {
        console.log("starting a game");
    }

    get_pieces_count() {
        return 32;
    }

    whose_turn() {
        return 'white';
    }
}