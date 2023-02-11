import { isAvailable } from './checkAvailable.js'

export function GameBoard(boardSize = 10){
    let board = new Array(boardSize).fill()
    .map(()=>Array(boardSize).fill(null));
    let limit = boardSize;

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
        if(size === 1) board[x][y] = 1;
        if(!isVertical && size > 1){
            for(let i=0; i < size ; i++){
                board[x][y+i] = 1
            }
        }
        if(isVertical && size > 1){
            for(let i=0; i < size ; i++){
                board[x+i][y] = 1
            }
        }
        return board
    }

    function receiveAttack(){

    }

    return {
        getBoard,
        setShip,
        receiveAttack
    }
}