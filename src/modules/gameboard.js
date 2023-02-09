export function GameBoard(size = 10){
    let board = new Array(size)
    .fill()
    .map(()=>Array(size).fill(null));

    function getBoard(coord){
        if(coord){
            return board[coord[0]][coord[1]]
        }
        return board
    }

    function setShip(ship,coord){
        let size = ship.getSize();
        if(!board[coord[0]][coord[1]]){
            board[coord[0]][coord[1]] = 1;
        }
        return board
    }

    return {
        getBoard,
        setShip
    }
}