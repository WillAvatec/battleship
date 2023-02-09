import GameBoard from './gameboard'
import Ship from './ship'


describe('testing Gameboard Instance array',()=>{
    let mapa;
    beforeEach(()=>{
        mapa = new GameBoard()
    })

    it.only('should have a 2D array working as the board',()=>{
        expect(typeof mapa.getBoard()).toBe('array');
    })

    it('should have a default grid of 10x10 if no one assigned',()=>{
        expect(mapa.getBoard()).toBe(10);
        mapa = new GameBoard(15);
        expect(mapa.getBoard()).toBe(15);
    })
})

describe('testing setShip method',()=>{
    let mapa;
    let boat = new Ship();
    let coord = [0,0];
    beforeEach(()=>{
        mapa = new GameBoard();
    })

    it('should return array',()=>{
        expect(typeof mapa.setShip(boat, coord)).toBe('array');
    })

    it('should mutate board property',()=>{
        expect(mapa.setShip(boat, coord)).toNotEqual(mapa.getBoard());
    })

    it('should set ship on given coordinates',()=>{
        expect(mapa.setShip(boat, coord)).toBe(mapa)
    })

    it('should only set ship if space available',()=>{
        expect(mapa.setShip(boat, coord))
    })
})
