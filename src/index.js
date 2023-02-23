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
      const element = cell;
      const value = player1.attackTo(
        [cell.parentNode.dataset.row,
          cell.dataset.column,
          cell],
        enemyBoard,
      );
      // Render it on the DOM
      element.appendChild(document.createTextNode(value));
    });
  });
}
const ship = Ship(3);
ship.isVertical = true;
enemyBoard.setShip(ship, [7, 0]);

initialize();

const enemyBoardCells = document.querySelectorAll('#computer-board .cells');
attackEnemyBoard(enemyBoardCells, player1.name);
