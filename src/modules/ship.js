export default function Ship (size = 1) {
    let length = size;
    let sunked = false;
    let hits = 0;
    let isVertical = false

    function hit(damage = 1){
        if(hits < length) return hits += damage
    }
    function getSize(){
        return length;
    }
    function isSunk(){
        if(hits >= length) sunked = true;
        return sunked;
    }
    return {
        isSunk,
        hit,
        getSize,
        isVertical
    }
}