export function GameBoard(boardSize = 10){
    let board = new Array(boardSize)
    .fill()
    .map(()=>Array(boardSize).fill(null));

    function getBoard(coord){
        if(coord){
            return board[coord[0]][coord[1]]
        }
        return board
    }

    function setValueInBoard(coord){
        let [i,j] = coord;
        return board[i][j]
    }

    // Comprobar el tamaño del barco                                ✔️
    // Comprobar si es horizontal o vertical                        ✔️
    // Comprobar que las coordenadas sean validas                   ✔️
        // ==> Si no es valido: return 'invalid place'              
    // Colocar en el board, dependiendo de su orientación(if size === 1)           
        // ==> Si es horizontal: ocupara espacio en un solo array   
        // ==> Si es vertical:  ocupara espacio en multiples arrays 

        
    function setShip(ship,coord){
        let [x, y] = coord;
        let size = ship.getSize();
        let isVertical = ship.isVertical;
        if(!isAvailable(coord)) return 'invalid coordinates';
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

    function isAvailable(coord){
        let [x, y] = coord;
        let limit = boardSize;
        let isInsideBoard = ((x >= 0 && x < limit) && (y >= 0 && y < limit));
        let isOcupied = false;

        return (isInsideBoard && !isOcupied)
    }

    return {
        getBoard,
        setShip
    }
}