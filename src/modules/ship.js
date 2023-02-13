export default function Ship(size = 1) {
  const length = size;
  let sunked = false;
  let hits = 0;
  const isVertical = false;

  function hit(damage = 1) {
    if (hits < length) {
      hits += damage;
    }
    return hits;
  }
  function getSize() {
    return length;
  }
  function isSunk() {
    sunked = hits >= length;
    return { sunked, hits };
  }
  return {
    isSunk,
    hit,
    getSize,
    isVertical,
  };
}
