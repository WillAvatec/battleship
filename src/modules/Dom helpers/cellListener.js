export default function cellListener(cell, player, board) {
  // Attack enemy Board
  const element = cell;
  const value = player.attackTo(
    [cell.parentNode.dataset.row,
      cell.dataset.column,
      cell],
    board,
  );
    // Render it on the DOM
  if (value === '☒') {
    element.style.backgroundColor = '#fecaca';
    element.style.color = '#ef4444';
  } else {
    element.style.backgroundColor = '#9292a7';
    element.style.color = '#9f9fb';
    element.style.fontSize = '2rem';
  }
  element.appendChild(document.createTextNode(value));
}
