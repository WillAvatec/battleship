/* eslint-disable import/extensions */
import './styles.css';
import initialize from './modules/Dom helpers/initializeDOM.js';
import {
  player1,
  computer,
  playerBoard,
  enemyBoard,
} from './modules/initializeData.js';
import cellListener from './modules/Dom helpers/cellListener.js';
import Ship from './modules/ship.js';

function attackEnemyBoard(cells) {
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      cellListener(cell, player1, enemyBoard);
    }, { once: true });
  });
}

const ship = Ship(3);
ship.isVertical = true;
enemyBoard.setShip(ship, [7, 0]);

initialize();

const enemyBoardCells = document.querySelectorAll('#computer-board .cells');
attackEnemyBoard(enemyBoardCells, player1.name);
