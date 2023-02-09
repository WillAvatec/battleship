import { GameBoard } from './gameboard'
import Ship from './ship'


describe('testing Gameboard Instance array',()=>{
    let mapa;
    beforeEach(()=>{
        mapa = new GameBoard()
    })

    it('should have a 2D array working as the board',()=>{
        expect(mapa.getBoard()).toBeInstanceOf(Array);
    })

    it('should have a default grid of 10x10 if no one assigned',()=>{
        expect(mapa.getBoard()).toHaveLength(10);
        mapa = new GameBoard(15);
        expect(mapa.getBoard()).toHaveLength(15);
    })
})

describe('testing setShip method',()=>{
    let mapa;
    let boat = new Ship();
    let coord = [0,0];
    let prevState;
    beforeEach(()=>{
        mapa = new GameBoard();
        prevState = [...mapa.getBoard()]
    })

    it('should return array',()=>{
        expect(mapa.setShip(boat, coord)).toBeInstanceOf(Array);
    })

    it('should mutate private board property',()=>{
        expect(mapa.setShip(boat, coord)).not.toBe(prevState);
    })

    it('should set ship on coordinates with boat{size:1}',()=>{
        mapa.setShip(boat, coord);
        expect(mapa.getBoard(coord)).toBe(1)
    })

    it('should only set ship if space available',()=>{
        expect(mapa.setShip(boat, coord))
    })
})
