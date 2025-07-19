class GameManager{
    constructor(gameContainer,gameboardID = "board",currentPlayer = 'X', isMultiplayer = false){
        this.gameContainer = gameContainer;
        this.gameboard = gameContainer.querySelector("#" + gameboardID);
        this.cells = [];
        this.isMultiplayer = isMultiplayer;
        this.currentPlayer = currentPlayer;
    }
    createBoard(){
        this.gameboard.innerHTML = '';
        this.cells = [];
        for (let i = 0; i < 9; i++){
            const cell = document.createElement('div');
            cell.classList.add('board-cell');
            this.gameboard.appendChild(cell)
            this.cells.push(cell)
        }
    }
    move(player,cellNo,restartGame = true){
        const cell = this.cells[cellNo]
        if (player != this.currentPlayer || cell.textContent != '') return;

        cell.textContent = this.currentPlayer;

        if (this.checkWin()){
            if(restartGame) 
                if (confirm(`${this.currentPlayer} wins!. do you want to play again`)) this.restartGame();
        }
        else if (this.checkDraw()) {
            if(restartGame) 
                if (confirm(`its a draw. do you want to play again`))  this.restartGame();
        }
        else {
            this.currentPlayer = (this.currentPlayer == 'X' )? 'O' : 'X';
        }
    }
    checkWin(){
        const winPatterns = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        return winPatterns.some(pattern =>
            pattern.every(index => this.cells[index].textContent === this.currentPlayer)
        );
    }
    checkDraw(){
        return cells.every(c => c.textContent != '')
    }
    restartGame() {
        this.currentPlayer = 'X';
        this.createBoard();
    }

}

export { GameManager };