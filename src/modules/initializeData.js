/* eslint-disable import/extensions */
import Player from './player.js';
import GameBoard from './gameboard.js';

const player1 = new Player();
const computer = new Player('computer');
const isGameOver = false;
const playerBoard = GameBoard();
const enemyBoard = GameBoard();

export {
  player1,
  computer,
  isGameOver,
  playerBoard,
  enemyBoard,
};
