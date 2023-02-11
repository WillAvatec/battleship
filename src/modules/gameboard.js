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

/*     function setValueInBoard(coord){
        let [i,j] = coord;
        return board[i][j]
    } */

    function setShip(ship,coord){
        let [x, y] = coord;
        let size = ship.getSize();
        let isVertical = ship.isVertical;
        if(!isAvailable(coord,size)) return 'invalid coordinates';
        if(size === 1) board[x][y] = 1;
        if(!isVertical && size > 1){
            for(let i=0; i < size ; i++){
                board[x+i][y] = 1
            }
        }
        if(isVertical && size > 1){
            for(let i=0; i < size ; i++){
                board[x][y+i] = 1
            }
        }
        return board
    }

    function isAvailable(coord,s){
            //0, -1
        let [x, y] = coord;
        const isInsideBoard = ((x >= 0 && x < limit) && (y >= 0 && y < limit));
        let isOccupied = false;
        let couldOverflow = board?.[x + s]?.[y] && board?.[x]?.[y+s];

        return (isInsideBoard && !isOccupied && !couldOverflow)
    }

    return {
        getBoard,
        setShip
    }
}