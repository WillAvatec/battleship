export default class Player {
  constructor(name = 'Player1') {
    this.name = name;
    this.record = [];
  }

  attackTo(coord, board) {
    const [x, y] = coord;
    if (this.record.find((obj) => obj.row === x && obj.column === y)) return false;
    this.record.push({ row: x, column: y });
    return board.receiveAttack(coord);
  }

  randomAttack(board) {
    if (this.record.length === 100) return false;
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);

    while (this.hasAlreadyHit(row, column)) {
      row = Math.floor(Math.random() * 10);
      column = Math.floor(Math.random() * 10);
    }

    this.attackTo([row, column], board);

    return true;
  }

  hasAlreadyHit(row, column) {
    for (let i = 0; i < this.record.length; i += 1) {
      if (
        this.record[i].row === row
          && this.record[i].column === column
      ) {
        return true;
      }
    }
    return false;
  }
}
