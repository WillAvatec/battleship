import { GameBoard } from './gameboard'
import Ship from './ship'


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
    let prevState;
    beforeEach(()=>{
        mapa = new GameBoard();
        boat = new Ship();
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
        let coord = [0,0]
        mapa.setShip(boat,coord);
        for(let i=0; i < boat.getSize() ;i++){
            expect(mapa.getBoard([coord[0],coord[1]]+i)).toBe(1)
        }
    })

    it('should only set ship if space available',()=>{
        expect(mapa.setShip(boat, coord))
    })
})
