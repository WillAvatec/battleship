function createMarker(text) {
  const marker = document.createElement('div');
  marker.className = 'marker';
  marker.textContent = text;
  return marker;
}

function createRow(rowNumber) {
  const row = document.createElement('div');
  row.setAttribute('class', 'rows');
  row.dataset.row = rowNumber;
  return row;
}

function createCell(columnNumber) {
  const cell = document.createElement('div');
  cell.setAttribute('class', 'cells');
  cell.dataset.column = columnNumber;
  return cell;
}

/* function appendListeners(cells) {
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      console.log([cell.parentNode().dataset.row, cell.dataset.column]);
    });
  });
} */

// This renders a board in the DOM(Is not related to the GameBoard function yet)
export default function renderBoard(size, parent) {
  for (let i = 0; i < size; i += 1) {
    const row = createRow(i);
    row.appendChild(createMarker(i));
    for (let j = 0; j < size; j += 1) {
      const cell = createCell(j);
      row.appendChild(cell);
    }
    parent.appendChild(row);
  }
}
