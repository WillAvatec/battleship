import { isAvailable } from './checkAvailable.js'
const MAX_BOATS = 10;

export function GameBoard(boardSize = 10){
    let board = new Array(boardSize).fill()
    .map(()=>Array(boardSize).fill(null));
    let shipPositions = []
    function getBoard(coord){
        if(coord){
            return board[coord[0]][coord[1]]
        }
        return board
    }

    function setShip(ship,coord){
        let [x, y] = coord;
        let size = ship.getSize();
        let isVertical = ship.isVertical;
        if(!isAvailable(coord,ship,board)) return 'invalid coordinates';
        if(!isVertical && size >= 1){
            for(let i=0; i < size ; i++){
                board[x][y+i] = 1
            }
        }
        if(isVertical && size >= 1){
            for(let i=0; i < size ; i++){
                board[x+i][y] = 1
            }
        }
        shipPositions.push({start:{x,y},ship})
        return board
    }

    function receiveAttack(coord){
        let [x,y] = coord;
        let value = '-';
        if(board[x][y] === 1){
            let damaged = findBoat(coord).hit();
            value = 'x'
        }
        board[x][y] = value;

        return value
    }

    function findBoat(coord){
        let [x,y] = coord;
        let result = shipPositions.find(ship => checkBoatPosition(ship,coord))
        return result.ship
    }

    // {start:{x,y},ship}
    function checkBoatPosition(set, coord){
        let [x,y] = coord; // 1 - 3
        let [m,n] = [set.start.x,set.start.y] // 1 - 1
        let length = set.ship.getSize(); //3
        let result = false;
        for(let i=0; i < length ;i++){
            if(set.ship.isVertical && m+i === x) return result = true;
            if(!set.ship.isVertical && n+i === y) return result = true;
        }
        return result
    }

    function AreAllSunked(){
        //Check if the board is full of boats
        let counter = 0;
        if(shipPositions.length > 0){
            for(let obj of shipPositions){
                if(obj.ship.isSunk()) counter+= 1;
            }
        }
        return counter === shipPositions.length
    }

    return {
        getBoard,
        setShip,
        receiveAttack,
        AreAllSunked
    }
}