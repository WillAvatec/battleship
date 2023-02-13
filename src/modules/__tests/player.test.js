import GameBoard from '../gameboard.js';
import Player from '../player.js';

let player;
beforeEach(() => {
  player = new Player();
});

describe('Testing Player Class', () => {
  test('default name for player', () => {
    expect(player.name).toBe('Player1');
  });
  it('should change a name if passed', () => {
    player = new Player('Rodrigo');
    expect(player.name).toBe('Rodrigo');
  });
  it('should have a record of past atttacks', () => {
    expect(player.record).toBeInstanceOf(Array);
  });
});

describe('Testing attacks to board', () => {
  it('should attack to a board', () => {
    const coordenadas = [1, 1];
    const board = GameBoard();
    expect(player.attackTo(coordenadas, board)).toBe(true);
  });
  it('should register an attack into the record', () => {
    const coordenadas = [1, 1];
    const board = GameBoard();
    player.attackTo(coordenadas, board);
    expect(player.record.length).toBe(1);
  });
  it("should hit randomly and don't hit the same spot twice.", () => {
    const board = GameBoard();
    for (let i = 0; i < 100; i += 1) {
      player.randomAttack(board);
    }
    expect(player.record.length).toBe(100);
  });
});
