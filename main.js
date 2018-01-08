console.log('js connected');
//Grab main tag from html
var main = document.getElementsByTagName('main')[0];
//create game board variable and append to main
var gameBoard = document.createElement('div');
gameBoard.classList.add('grid');
main.appendChild(gameBoard);


//Create vaiables board and two players as well as player classes
var grid = [[],[],[],[],[],[],[]];

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
    (cell[i].dataset.column = i % 7);
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
grid[0].push(firstColumn);
grid[1].push(secondColumn);
grid[2].push(thirdColumn);
grid[3].push(fourthColumn);
grid[4].push(fifthColumn);
grid[5].push(sixthColumn);
grid[6].push(seventhColumn);

// for (var i = 0; i < grid.length; i++) {
//   grid.foreach(function () {
//     grid.addEventListener('click', function() {
//     console.log('hey')
//   })
// }


for (var i = 0; i < 6; i++) {
  firstColumn[i].addEventListener('click', dropDisc)
}

function dropDisc() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDisc
  }
}


// var $aColumn = $('div[data-column]');


// for (var i =0; i < grid.length; i++) {
//   grid[i].classList.add('column', i)
// }
// grid.forEach(addEventListener('click', function() {
//   console.log('hey')
// }))

for (var i = 0; i < 6; i++) {
  secondColumn[i].addEventListener('click', dropDiscTwo)
}
function dropDiscTwo() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDiscTwo
  }
}

for (var i = 0; i < 6; i++) {
  thirdColumn[i].addEventListener('click', dropDiscThree)
}
function dropDiscThree() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDiscThree
  }
}

for (var i = 0; i < 6; i++) {
  fourthColumn[i].addEventListener('click', dropDiscFour)
}
function dropDiscFour() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDiscFour
  }
}

for (var i = 0; i < 6; i++) {
  fifthColumn[i].addEventListener('click', dropDiscFive)
}
function dropDiscFive() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDiscFive
  }
}

for (var i = 0; i < 6; i++) {
  sixthColumn[i].addEventListener('click', dropDiscSix)
}
function dropDiscSix() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDiscSix
  }
}

for (var i = 0; i < 6; i++) {
  seventhColumn[i].addEventListener('click', dropDiscSeven)
}
function dropDiscSeven() {
  playerMoves += 1;
  //console.log(playerMoves);
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
    } return dropDiscSeven
  }
}
