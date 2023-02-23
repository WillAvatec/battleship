/* eslint-disable no-undef */
import GameBoard from '../gameboard.js';
import Ship from '../ship.js';

let mapa;
let boat;
const coord = [0, 0];

beforeEach(() => {
  mapa = GameBoard();
  boat = Ship();
});

describe('testing Gameboard Instance array', () => {
  it('should have a 2D array working as the board', () => {
    expect(mapa.getBoard()).toBeInstanceOf(Array);
  });

  it('should have a default grid of 10x10 if no one assigned', () => {
    expect(mapa.getBoard()).toHaveLength(10);
    mapa = new GameBoard(15);
    expect(mapa.getBoard()).toHaveLength(15);
  });
});

describe('testing setShip method', () => {
  beforeEach(() => {
    boat = new Ship(3);
  });
  it('should return array', () => {
    expect(mapa.setShip(boat, coord)).toBeInstanceOf(Array);
  });

  it('should set ship{size:3} on horizontal', () => {
    mapa.setShip(boat, coord);
    for (let i = 0; i < boat.getSize(); i += 1) {
      expect(mapa.getBoard([coord[0], coord[1] + i])).toBe(1);
    }
  });

  it('should set ship{size:3 in vertical', () => {
    boat.isVertical = true;
    mapa.setShip(boat, coord);
    for (let j = 0; j < boat.getSize(); j += 1) {
      expect(mapa.getBoard([coord[0] + j, coord[1]])).toBe(1);
    }
  });

  it('should only set ship if coords are correct', () => {
    const coord = [-50, -10];
    expect(mapa.setShip(boat, coord)).toBe('invalid coordinates');
  });

  it('should return invalid if place is occupied', () => {
    mapa.setShip(boat, coord);
    expect(mapa.setShip(boat, [0, 2])).toBe('invalid coordinates');
  });
});

describe('Testing receiving attacks', () => {
  it('should have a receive attack method', () => {
    expect(mapa).toHaveProperty('receiveAttack');
  });
  it('should return "-" if space was empty', () => {
    expect(mapa.receiveAttack(coord)).toBe('-');
  });
  it('should return "x" if hitted a boat', () => {
    mapa.setShip(new Ship(3), [1, 1]);
    expect(mapa.receiveAttack([1, 3])).toBe('x');
  });
  it('should increment hits prop of ship hitted', () => {
    mapa.setShip(boat, coord);
    mapa.receiveAttack(coord);
    expect(boat.isSunk()).toHaveProperty('hits', 1);
  });
});
