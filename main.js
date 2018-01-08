console.log('js connected');

//Grab main tag from html and attach the game board with a class 'grid'
var main = document.getElementsByTagName('main')[0];
var gameBoard = document.createElement('div');
gameBoard.classList.add('grid');
main.appendChild(gameBoard);

//Our game board grid is an arrays of 7 arrays/columns
var grid = [[],[],[],[],[],[],[]];

//make our game board
function makeBoard() {
  //make 6 rows and assign row class
  for (var i = 0; i < 6; i++) {
    var row = document.createElement('div');
    row.classList.add('row', i);
    //put 7 cells in each row div and assign class cell and empty
    for (k = 0; k < 7; k++) {
      var cell = document.createElement('div');
      cell.classList.add('cell', 'empty');
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

//this will assign each cell a data-set 'column'
function assignColumnNumber(e) { 
  //add data params
  for (var i = 0; i < cell.length; i++) {
    cell[i].dataset.column = i % 7;
    cell[i].dataset.cell = i;
  }  
} 
assignColumnNumber();


var playerMoves = 0;

var firstColumn = document.querySelectorAll('[data-column="0"]');
var secondColumn = document.querySelectorAll('[data-column="1"]');
var thirdColumn = document.querySelectorAll('[data-column="2"]');
var fourthColumn = document.querySelectorAll('[data-column="3"]');
var fifthColumn = document.querySelectorAll('[data-column="4"]');
var sixthColumn = document.querySelectorAll('[data-column="5"]');
var seventhColumn = document.querySelectorAll('[data-column="6"]');
var allColumns = {firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn, seventhColumn}
// grid[0].push(firstColumn);
// grid[1].push(secondColumn);
// grid[2].push(thirdColumn);
// grid[3].push(fourthColumn);
// grid[4].push(fifthColumn);
// grid[5].push(sixthColumn);
// grid[6].push(seventhColumn);




//The following contains all the code for dropping a disc for each seperate column

for (var i = 0; i < 6; i++) {
  firstColumn[i].addEventListener('click', dropDisc)
}
function dropDisc() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (firstColumn[i].classList.contains('empty') === true) {
        firstColumn[i].classList.replace('empty', 'yellow')
      }  else if (firstColumn[i-1].classList.contains('empty') === true) {
        firstColumn[i-1].classList.replace('empty', 'yellow')
      } else if (firstColumn[i-2].classList.contains('empty') === true) {
        firstColumn[i-2].classList.replace('empty', 'yellow')
      } else if (firstColumn[i-3].classList.contains('empty') === true) {
        firstColumn[i-3].classList.replace('empty', 'yellow')
      } else if (firstColumn[i-4].classList.contains('empty') === true) {
        firstColumn[i-4].classList.replace('empty', 'yellow')
      } else if (firstColumn[i-5].classList.contains('empty') === true) {
        firstColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (firstColumn[i].classList.contains('empty') === true) {
        firstColumn[i].classList.replace('empty', 'red')
      }  else if (firstColumn[i-1].classList.contains('empty') === true) {
        firstColumn[i-1].classList.replace('empty', 'red')
      } else if (firstColumn[i-2].classList.contains('empty') === true) {
        firstColumn[i-2].classList.replace('empty', 'red')
      } else if (firstColumn[i-3].classList.contains('empty') === true) {
        firstColumn[i-3].classList.replace('empty', 'red')
      } else if (firstColumn[i-4].classList.contains('empty') === true) {
        firstColumn[i-4].classList.replace('empty', 'red')
      } else if (firstColumn[i-5].classList.contains('empty') === true) {
        firstColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDisc
  }  
}

// Messy! all the other columns
for (var i = 0; i < 6; i++) {
  secondColumn[i].addEventListener('click', dropDiscTwo)
}
function dropDiscTwo() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (secondColumn[i].classList.contains('empty') === true) {
        secondColumn[i].classList.replace('empty', 'yellow')
      }  else if (secondColumn[i-1].classList.contains('empty') === true) {
        secondColumn[i-1].classList.replace('empty', 'yellow')
      } else if (secondColumn[i-2].classList.contains('empty') === true) {
        secondColumn[i-2].classList.replace('empty', 'yellow')
      } else if (secondColumn[i-3].classList.contains('empty') === true) {
        secondColumn[i-3].classList.replace('empty', 'yellow')
      } else if (secondColumn[i-4].classList.contains('empty') === true) {
        secondColumn[i-4].classList.replace('empty', 'yellow')
      } else if (secondColumn[i-5].classList.contains('empty') === true) {
        secondColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (secondColumn[i].classList.contains('empty') === true) {
        secondColumn[i].classList.replace('empty', 'red')
      }  else if (secondColumn[i-1].classList.contains('empty') === true) {
        secondColumn[i-1].classList.replace('empty', 'red')
      } else if (secondColumn[i-2].classList.contains('empty') === true) {
        secondColumn[i-2].classList.replace('empty', 'red')
      } else if (secondColumn[i-3].classList.contains('empty') === true) {
        secondColumn[i-3].classList.replace('empty', 'red')
      } else if (secondColumn[i-4].classList.contains('empty') === true) {
        secondColumn[i-4].classList.replace('empty', 'red')
      } else if (secondColumn[i-5].classList.contains('empty') === true) {
        secondColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDiscTwo
  }
}

for (var i = 0; i < 6; i++) {
  thirdColumn[i].addEventListener('click', dropDiscThree)
}
function dropDiscThree() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (thirdColumn[i].classList.contains('empty') === true) {
        thirdColumn[i].classList.replace('empty', 'yellow')
      }  else if (thirdColumn[i-1].classList.contains('empty') === true) {
        thirdColumn[i-1].classList.replace('empty', 'yellow')
      } else if (thirdColumn[i-2].classList.contains('empty') === true) {
        thirdColumn[i-2].classList.replace('empty', 'yellow')
      } else if (thirdColumn[i-3].classList.contains('empty') === true) {
        thirdColumn[i-3].classList.replace('empty', 'yellow')
      } else if (thirdColumn[i-4].classList.contains('empty') === true) {
        thirdColumn[i-4].classList.replace('empty', 'yellow')
      } else if (thirdColumn[i-5].classList.contains('empty') === true) {
        thirdColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (thirdColumn[i].classList.contains('empty') === true) {
        thirdColumn[i].classList.replace('empty', 'red')
      }  else if (thirdColumn[i-1].classList.contains('empty') === true) {
        thirdColumn[i-1].classList.replace('empty', 'red')
      } else if (thirdColumn[i-2].classList.contains('empty') === true) {
        thirdColumn[i-2].classList.replace('empty', 'red')
      } else if (thirdColumn[i-3].classList.contains('empty') === true) {
        thirdColumn[i-3].classList.replace('empty', 'red')
      } else if (thirdColumn[i-4].classList.contains('empty') === true) {
        thirdColumn[i-4].classList.replace('empty', 'red')
      } else if (thirdColumn[i-5].classList.contains('empty') === true) {
        thirdColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDiscThree
  }
}

for (var i = 0; i < 6; i++) {
  fourthColumn[i].addEventListener('click', dropDiscFour)
}
function dropDiscFour() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (fourthColumn[i].classList.contains('empty') === true) {
        fourthColumn[i].classList.replace('empty', 'yellow')
      }  else if (fourthColumn[i-1].classList.contains('empty') === true) {
        fourthColumn[i-1].classList.replace('empty', 'yellow')
      } else if (fourthColumn[i-2].classList.contains('empty') === true) {
        fourthColumn[i-2].classList.replace('empty', 'yellow')
      } else if (fourthColumn[i-3].classList.contains('empty') === true) {
        fourthColumn[i-3].classList.replace('empty', 'yellow')
      } else if (fourthColumn[i-4].classList.contains('empty') === true) {
        fourthColumn[i-4].classList.replace('empty', 'yellow')
      } else if (fourthColumn[i-5].classList.contains('empty') === true) {
        fourthColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (fourthColumn[i].classList.contains('empty') === true) {
        fourthColumn[i].classList.replace('empty', 'red')
      }  else if (fourthColumn[i-1].classList.contains('empty') === true) {
        fourthColumn[i-1].classList.replace('empty', 'red')
      } else if (fourthColumn[i-2].classList.contains('empty') === true) {
        fourthColumn[i-2].classList.replace('empty', 'red')
      } else if (fourthColumn[i-3].classList.contains('empty') === true) {
        fourthColumn[i-3].classList.replace('empty', 'red')
      } else if (fourthColumn[i-4].classList.contains('empty') === true) {
        fourthColumn[i-4].classList.replace('empty', 'red')
      } else if (fourthColumn[i-5].classList.contains('empty') === true) {
        fourthColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDiscFour
  }
}

for (var i = 0; i < 6; i++) {
  fifthColumn[i].addEventListener('click', dropDiscFive)
}
function dropDiscFive() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (fifthColumn[i].classList.contains('empty') === true) {
        fifthColumn[i].classList.replace('empty', 'yellow')
      }  else if (fifthColumn[i-1].classList.contains('empty') === true) {
        fifthColumn[i-1].classList.replace('empty', 'yellow')
      } else if (fifthColumn[i-2].classList.contains('empty') === true) {
        fifthColumn[i-2].classList.replace('empty', 'yellow')
      } else if (fifthColumn[i-3].classList.contains('empty') === true) {
        fifthColumn[i-3].classList.replace('empty', 'yellow')
      } else if (fifthColumn[i-4].classList.contains('empty') === true) {
        fifthColumn[i-4].classList.replace('empty', 'yellow')
      } else if (fifthColumn[i-5].classList.contains('empty') === true) {
        fifthColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (fifthColumn[i].classList.contains('empty') === true) {
        fifthColumn[i].classList.replace('empty', 'red')
      }  else if (fifthColumn[i-1].classList.contains('empty') === true) {
        fifthColumn[i-1].classList.replace('empty', 'red')
      } else if (fifthColumn[i-2].classList.contains('empty') === true) {
        fifthColumn[i-2].classList.replace('empty', 'red')
      } else if (fifthColumn[i-3].classList.contains('empty') === true) {
        fifthColumn[i-3].classList.replace('empty', 'red')
      } else if (fifthColumn[i-4].classList.contains('empty') === true) {
        fifthColumn[i-4].classList.replace('empty', 'red')
      } else if (fifthColumn[i-5].classList.contains('empty') === true) {
        fifthColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDiscFive
  }
}

for (var i = 0; i < 6; i++) {
  sixthColumn[i].addEventListener('click', dropDiscSix)
}
function dropDiscSix() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (sixthColumn[i].classList.contains('empty') === true) {
        sixthColumn[i].classList.replace('empty', 'yellow')
      }  else if (sixthColumn[i-1].classList.contains('empty') === true) {
        sixthColumn[i-1].classList.replace('empty', 'yellow')
      } else if (sixthColumn[i-2].classList.contains('empty') === true) {
        sixthColumn[i-2].classList.replace('empty', 'yellow')
      } else if (sixthColumn[i-3].classList.contains('empty') === true) {
        sixthColumn[i-3].classList.replace('empty', 'yellow')
      } else if (sixthColumn[i-4].classList.contains('empty') === true) {
        sixthColumn[i-4].classList.replace('empty', 'yellow')
      } else if (sixthColumn[i-5].classList.contains('empty') === true) {
        sixthColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (sixthColumn[i].classList.contains('empty') === true) {
        sixthColumn[i].classList.replace('empty', 'red')
      }  else if (sixthColumn[i-1].classList.contains('empty') === true) {
        sixthColumn[i-1].classList.replace('empty', 'red')
      } else if (sixthColumn[i-2].classList.contains('empty') === true) {
        sixthColumn[i-2].classList.replace('empty', 'red')
      } else if (sixthColumn[i-3].classList.contains('empty') === true) {
        sixthColumn[i-3].classList.replace('empty', 'red')
      } else if (sixthColumn[i-4].classList.contains('empty') === true) {
        sixthColumn[i-4].classList.replace('empty', 'red')
      } else if (sixthColumn[i-5].classList.contains('empty') === true) {
        sixthColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDiscSix
  }
}

for (var i = 0; i < 6; i++) {
  seventhColumn[i].addEventListener('click', dropDiscSeven)
}
function dropDiscSeven() {
  playerMoves += 1;
  for (var i = 5; i >= 0; i--) {
    if (playerMoves % 2 === 1) {
      if (seventhColumn[i].classList.contains('empty') === true) {
        seventhColumn[i].classList.replace('empty', 'yellow')
      }  else if (seventhColumn[i-1].classList.contains('empty') === true) {
        seventhColumn[i-1].classList.replace('empty', 'yellow')
      } else if (seventhColumn[i-2].classList.contains('empty') === true) {
        seventhColumn[i-2].classList.replace('empty', 'yellow')
      } else if (seventhColumn[i-3].classList.contains('empty') === true) {
        seventhColumn[i-3].classList.replace('empty', 'yellow')
      } else if (seventhColumn[i-4].classList.contains('empty') === true) {
        seventhColumn[i-4].classList.replace('empty', 'yellow')
      } else if (seventhColumn[i-5].classList.contains('empty') === true) {
        seventhColumn[i-5].classList.replace('empty', 'yellow')
      } else {
        alert('Column full, try a different one!')
      }
    } else if (playerMoves % 2 === 0) {
      if (seventhColumn[i].classList.contains('empty') === true) {
        seventhColumn[i].classList.replace('empty', 'red')
      }  else if (seventhColumn[i-1].classList.contains('empty') === true) {
        seventhColumn[i-1].classList.replace('empty', 'red')
      } else if (seventhColumn[i-2].classList.contains('empty') === true) {
        seventhColumn[i-2].classList.replace('empty', 'red')
      } else if (seventhColumn[i-3].classList.contains('empty') === true) {
        seventhColumn[i-3].classList.replace('empty', 'red')
      } else if (seventhColumn[i-4].classList.contains('empty') === true) {
        seventhColumn[i-4].classList.replace('empty', 'red')
      } else if (seventhColumn[i-5].classList.contains('empty') === true) {
        seventhColumn[i-5].classList.replace('empty', 'red')
      } else {
        alert('Column full, try a different one!')
      } 
    } checkForWin ();
      return dropDiscSeven
  } 
}

//check win logic...
function checkForWin () {
  //Check each row for a win
  function checkRow () {
    for (var j = 0; j < 6; j++) {
      for (var i = 0; i < 4; i++) {
        if (row[j].childNodes[i].classList.contains('red')
          && row[j].childNodes[i+1].classList.contains('red')
          && row[j].childNodes[i+2].classList.contains('red')
          && row[j].childNodes[i+3].classList.contains('red')) {
          redWins()
        } else if (row[j].childNodes[i].classList.contains('yellow')
          && row[j].childNodes[i+1].classList.contains('yellow')
          && row[j].childNodes[i+2].classList.contains('yellow')
          && row[j].childNodes[i+3].classList.contains('yellow')) {
          yellowWins()
        }
      }
    }
  }
  checkRow();

  //Check each column for a win
  function checkCol() {
    for (var j = 0; j < 7; j++) {
      for (var i = 0; i < 3; i++) {
        if (row[i].childNodes[j].classList.contains('red')
          && row[i+1].childNodes[j].classList.contains('red')
          && row[i+2].childNodes[j].classList.contains('red')
          && row[i+3].childNodes[j].classList.contains('red')) {
          redWins()
        } else if (row[i].childNodes[j].classList.contains('yellow')
          && row[i+1].childNodes[j].classList.contains('yellow')
          && row[i+2].childNodes[j].classList.contains('yellow')
          && row[i+3].childNodes[j].classList.contains('yellow')) {
          yellowWins()
        }
      }
    }
  }
  checkCol();

  //check the diagonals going down to the right for a win
  function checkDiagDownRight() {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        if (row[j].childNodes[i].classList.contains('red')
          && row[j+1].childNodes[i+1].classList.contains('red')
          && row[j+2].childNodes[i+2].classList.contains('red')
          && row[j+3].childNodes[i+3].classList.contains('red')) {
          redWins()
        } else if (row[j].childNodes[i].classList.contains('yellow')
          && row[j+1].childNodes[i+1].classList.contains('yellow')
          && row[j+2].childNodes[i+2].classList.contains('yellow')
          && row[j+3].childNodes[i+3].classList.contains('yellow')) {
          yellowWins()
        }
      }
    } 
  }
  checkDiagDownRight();

  //check the diagonals going up to the right for a win
  function checkDiagUpRight() {
    for (var j = 3; j < 6; j++) {
      for (var i = 0; i < 4; i++) {
        if (row[j].childNodes[i].classList.contains('red')
          && row[j-1].childNodes[i+1].classList.contains('red')
          && row[j-2].childNodes[i+2].classList.contains('red')
          && row[j-3].childNodes[i+3].classList.contains('red')) {
          redWins()
        } else if (row[j].childNodes[i].classList.contains('yellow')
          && row[j-1].childNodes[i+1].classList.contains('yellow')
          && row[j-2].childNodes[i+2].classList.contains('yellow')
          && row[j-3].childNodes[i+3].classList.contains('yellow')) {
          yellowWins()
        }
      }
    } 
  }
  checkDiagUpRight();

  //If the board is full alert it's a draw
  function checkForDraw() {
    if (playerMoves === 42) {
      tieGame()
    }
  }
  checkForDraw();
}

var footer = document.getElementsByTagName('footer');

function redWins() {
  var banner = document.createElement('div');
  banner.innerText = "Red Wins!!!";
  banner.classList.add('banner', 'redBanner');
  footer[0].appendChild(banner);
}

function yellowWins() {
  var banner = document.createElement('div');
  banner.innerText = "Yellow Wins!!!";
  banner.classList.add('banner', 'yellowBanner');
  footer[0].appendChild(banner);
}

function tieGame() {
  var banner = document.createElement('div');
  banner.innerText = "Tie Game";
  banner.classList.add('banner', 'drawBanner');
  footer[0].appendChild(banner);
}
