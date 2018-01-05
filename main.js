console.log('js connected');
//Grab main tag from html
var main = document.getElementsByTagName('main')[0];

//create game board variable and append to main
var gameBoard = document.createElement('div');
gameBoard.classList.add('grid');
main.appendChild(gameBoard);

//Create vaiables board and two players as well as player classes
var grid = {
  row: [],
  cols: [],
  //getRows: getRows,
  //getCols: getCols
};
var playerRed = 'redPlayer';
var playerYellow = 'yellowPlayer';
var playerRedClass = 'red';
var playerYellowClass = 'yellow';

//create out game board
function makeBoard() {
  //make 6 rows of divs and assign row class
  for (var i = 0; i < 6; i++) {
    var row = document.createElement('div');
    row.classList.add('row', i);
    //put 7 cell divs in each row div and assign cell class
    for (k = 0; k < 7; k++) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    //attach our rows to the game board
    gameBoard.appendChild(row);
  }
}
//call makeBoard function to render our board
makeBoard();

var cell = document.getElementsByClassName('cell');
var row = document.getElementsByClassName('row');
//this will assign each column a column class and column number
function assignColumnNumber() { 
  for (var i = 0; i < 42; i++) {
    if (i % 7 === 0) {
      cell[i].classList.add('column', 'one');
    } else if (i % 7 === 1) {
      cell[i].classList.add('column', 'two');
    } else if (i % 7 === 2) {
      cell[i].classList.add('column', 'three');
    } else if (i % 7 === 3) {
      cell[i].classList.add('column', 'four');
    } else if (i % 7 === 4) {
      cell[i].classList.add('column', 'five');
    } else if (i % 7 === 5) {
      cell[i].classList.add('column', 'six');
    } else if (i % 7 === 6) {
      cell[i].classList.add('column', 'seven');
    }
  }
}
assignColumnNumber();

//We need to add event listeners so that when a column is clicked
//a cell will drop to the bottom row

  //I need to first figure out how to grab a column in order to
  //add a listener to each column
var colOne = document.getElementsByClassName('one');
  for (var i = 0; i < 6; i++) {
    colOne[i].addEventListener('click', dropDisc)
  }


function dropDisc() {
    for (var i = 5; i >= 0; i--) {
      if (colOne[i].classList.contains('yellow') !== true) {
        colOne[i].classList.add('yellow');
      } else if (colOne[i].classList.contains('yellow') === true && colOne[i-1].classList.contains('yellow') !== true) {
        colOne[i-1].classList.add('yellow');
      } else if (colOne[i].classList.contains('yellow') === true && colOne[i-2].classList.contains('yellow') !== true) {
        colOne[i-2].classList.add('yellow');
      } else if (colOne[i].classList.contains('yellow') === true && colOne[i-3].classList.contains('yellow') !== true) {
        colOne[i-3].classList.add('yellow');
      } else if (colOne[i].classList.contains('yellow') === true && colOne[i-4].classList.contains('yellow') !== true) {
        colOne[i-4].classList.add('yellow');
      } else if (colOne[i].classList.contains('yellow') === true && colOne[i-5].classList.contains('yellow') !== true) {
        colOne[i-5].classList.add('yellow');
      } return dropDisc
    }   
}




