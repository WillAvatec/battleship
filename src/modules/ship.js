export default function Ship (size) {
    let length = size;
    let sunked = false;
    let hits = 0;

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
        getSize
    }
}