import { GameManager } from './gameManager.js';

const gameContainer = document.getElementById('gameContainer');
const statusDiv = document.getElementById('status');
const game = new GameManager(gameContainer);

game.createBoard();