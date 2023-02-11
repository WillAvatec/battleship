import { GameBoard } from './gameboard.js'
import Ship from './ship.js'


describe('testing Gameboard Instance array',()=>{
    let mapa;
    beforeEach(()=>{
        mapa = new GameBoard();
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
    let boat;
    let coord = [0,0];
    beforeEach(()=>{
        mapa = new GameBoard();
        boat = new Ship(1);
    })

    it('should return array',()=>{
        expect(mapa.setShip(boat, coord)).toBeInstanceOf(Array);
    })

    it('should set ship{size:3} on horizontal',()=>{
        boat = new Ship(3);
        let coord = [0,0]
        mapa.setShip(boat,coord);
        for(let i=0; i < boat.getSize() ;i++){
            expect(mapa.getBoard([coord[0]+i,coord[1]])).toBe(1)
        }
    })

    it('should set ship{size:3 in vertical',()=>{
        boat = new Ship(3);
        boat.isVertical = true;
        let coord = [0,0]
        mapa.setShip(boat,coord);
        for(let j=0; j < boat.getSize() ;j++){
            expect(mapa.getBoard([coord[0],coord[1]+j])).toBe(1)
        }
    })

    it('should only set ship if coords are correct',()=>{
        boat = new Ship(3);
        let coord = [-50,-10]
        expect(mapa.setShip(boat,coord)).toBe('invalid coordinates')
    })

    it('should return invalid if place is occupied',()=>{
        coord = [1,1];
        mapa.setShip(boat, coord);
        boat = new Ship(3);
        expect(mapa.setShip(boat,[0,1])).toBe('invalid coordinates')
    })
})
