import isAvailable from './checkAvailable.js';

export default function GameBoard(boardSize = 10) {
  const board = new Array(boardSize).fill()
    .map(() => Array(boardSize).fill(null));
  const shipPositions = [];
  function getBoard(coord) {
    if (coord) {
      return board[coord[0]][coord[1]];
    }
    return board;
  }

  function setShip(ship, coord) {
    const [x, y] = coord;
    const size = ship.getSize();
    const { isVertical } = ship;
    if (!isAvailable(coord, ship, board)) return 'invalid coordinates';
    if (!isVertical && size >= 1) {
      for (let i = 0; i < size; i += 1) {
        board[x][y + i] = 1;
      }
    }
    if (isVertical && size >= 1) {
      for (let i = 0; i < size; i += 1) {
        board[x + i][y] = 1;
      }
    }
    shipPositions.push({ start: { x, y }, ship });
    return board;
  }

  // {start:{x,y},ship}
  function checkBoatPosition(set, coord) {
    const [x, y] = coord; // 1 - 3
    const [m, n] = [set.start.x, set.start.y]; // 1 - 1
    const length = set.ship.getSize(); // 3
    let result = false;
    for (let i = 0; i < length; i += 1) {
      if (set.ship.isVertical && m + i === x) {
        result = true;
        return result;
      }
      if (!set.ship.isVertical && n + i === y) {
        result = true;
        return result;
      }
    }
    return result;
  }

  function findBoat(coord) {
    const result = shipPositions.find((ship) => checkBoatPosition(ship, coord));
    return result.ship;
  }

  function receiveAttack(coord) {
    const [x, y] = coord;
    let value = '-';
    if (board[x][y] === 1) {
      findBoat(coord).hit();
      value = 'x';
    }
    board[x][y] = value;

    return value;
  }
  function AreAllSunked() {
    // Check if the board is full of boats
    let counter = 0;
    if (shipPositions.length > 0) {
      shipPositions.forEach((obj) => {
        if (obj.ship.isSunk()) counter += 1;
      });
      return counter === shipPositions.length;
    }
  }

  return {
    getBoard,
    setShip,
    receiveAttack,
    AreAllSunked,
  };
}
