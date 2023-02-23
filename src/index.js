/* eslint-disable import/extensions */
import initialize from './modules/Dom helpers/initializeDOM.js';
import './styles.css';
import {
  player1, computer, playerBoard, enemyBoard,
} from './modules/initializeData.js';
import Ship from './modules/ship.js';

function attackEnemyBoard(cells) {
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      // Attack enemy Board
      player1.attackTo([cell.parentNode.dataset.row, cell.dataset.column, cell], enemyBoard);
      // Render it on the DOM
    });
  });
}
enemyBoard.setShip(Ship(3), [0, 0]);
initialize();

const enemyBoardCells = document.querySelectorAll('#computer-board .cells');
attackEnemyBoard(enemyBoardCells, player1.name);
