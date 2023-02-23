function isAvailable(coord, s, b) {
  const [x, y] = coord;
  const vert = s.isVertical;
  const max = b.length;
  let isOccupied = false;
  const size = s.getSize();
  const isInsideBoard = ((x >= 0 && x < max) && (y >= 0 && y < max));
  const couldOverflow = b?.[x + size] === undefined && b?.[x]?.[y + size] === undefined;
  if (isInsideBoard) {
    for (let i = 0; i < s.getSize(); i += 1) {
      if (vert && !isOccupied) {
        isOccupied = b[x][y + i] === 1;
      }
      if (!vert && !isOccupied) {
        isOccupied = b[x + i][y] === 1;
      }
    }
  }
  return (isInsideBoard && !isOccupied && !couldOverflow);
}
