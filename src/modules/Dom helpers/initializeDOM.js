/* eslint-disable import/extensions */
import renderBoard from './renderBoard.js';

function initializeBoards(boardSize) {
  // References to static elements in the DOM
  const playerBoard = document.querySelector('#player-board');
  const aiBoard = document.querySelector('#computer-board');
  // Rendering boards into the DOM
  renderBoard(boardSize, playerBoard);
  renderBoard(boardSize, aiBoard);
}

function domHelper(tag, ...children) {
  const element = document.createElement(tag);
  if (children) children.forEach((child) => element.appendChild(child));
  return element;
}

function setFooter() {
  const body = document.querySelector('body');
  const p = domHelper('p');
  const img = domHelper('img');
  const a = domHelper('a', img);
  const footer = domHelper('footer', p, a);
  p.innerHTML = 'Developed by avatec2312.';
  img.src = '../src/assets/github-logo.svg';
  a.href = 'https://github.com/WillAvatec/battleship';
  body.appendChild(footer);
}

export default function initializeDOM() {
  initializeBoards(10);
  setFooter();
}
