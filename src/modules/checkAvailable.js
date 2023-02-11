export function isAvailable(coord,s,b){
let [x, y] = coord;
let vert = s.isVertical;
let max = b.length;
let isOccupied = false;
let size = s.getSize();
let isInsideBoard = ((x >= 0 && x < max) && (y >= 0 && y < max));
let couldOverflow = b?.[x + size] === undefined && b?.[x]?.[y+size] === undefined;
if(isInsideBoard){
    for(let i=0; i< s.getSize() ;i++){
        if(vert && !isOccupied){
            b[x][y+i] === 1 ? isOccupied = true : isOccupied = false;
        }
        if(!vert && !isOccupied){
            b[x+i][y] === 1 ? isOccupied = true : isOccupied = false;
        }
    }
}
//console.log({x,y,vert,size,max});
console.log({isInsideBoard,isOccupied,couldOverflow})

return (isInsideBoard && !isOccupied && !couldOverflow)
}