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

  function isAvailable(coord, s, b) {
    const [x, y] = coord;
    const vert = s.isVertical;
    const max = b.length;
    let isOccupied = false;
    const size = s.getSize();
    const isInsideBoard = ((x >= 0 && x < max) && (y >= 0 && y < max));
    const couldOverflow = b?.[x + size] === undefined && b?.[x]?.[y + size] === undefined;
    if (isInsideBoard) {
      for (let i = 0; i < s.getSize(); i += 1) {
        if (vert && !isOccupied) {
          isOccupied = b[x][y + i] === 1;
        }
        if (!vert && !isOccupied) {
          isOccupied = b[x + i][y] === 1;
        }
      }
    }
    return (isInsideBoard && !isOccupied && !couldOverflow);
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
    const [row, column] = coord; // 0 - 0
    const [startX, startY] = [set.start.x, set.start.y]; // 0 - 2 * Ship Starting position
    const length = set.ship.getSize(); // 3
    let result = false;
    for (let i = 0; i < length; i += 1) {
      if (set.ship.isVertical && startX + i === +row) {
        result = true;
        break;
      }
      if (!set.ship.isVertical && startY + i === +column) {
        result = true;
        break;
      }
    }
    return result;
  }

  function findBoat(coord) {
    const result = shipPositions.find((ship) => checkBoatPosition(ship, coord));
    if (result) return result.ship;
    return false;
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
