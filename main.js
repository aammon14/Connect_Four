console.log("js connected");

//Grab main tag from html and attach the game board with a class 'grid'
var main = document.getElementsByTagName("main")[0];
var gameBoard = document.createElement("div");
gameBoard.classList.add("grid");
main.appendChild(gameBoard);

//Our game board grid is an arrays of 7 arrays/columns
var grid = [[], [], [], [], [], [], []];

//make our game board
function makeBoard() {
  //make 6 rows and assign row class
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("div");
    row.classList.add("row", i);
    //put 7 cells in each row div and assign class cell and empty
    for (k = 0; k < 7; k++) {
      var cell = document.createElement("div");
      cell.classList.add("cell", "empty");
      row.appendChild(cell);
    }
    //attach our rows to the game board
    gameBoard.appendChild(row);
  }
}
//call makeBoard function to render our board
makeBoard();

var cell = document.getElementsByClassName("cell");
var row = document.getElementsByClassName("row");

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
var allColumns = [
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  fifthColumn,
  sixthColumn,
  seventhColumn
];

for (var i = 0; i < allColumns.length; i++) {
  var currentColumn = allColumns[i];
}

function addColumnListeners(column) {
  for (var i = 0; i < 6; i++) {
    column[i].addEventListener("click", dropDisc.bind(null, column));
  }
}

function removeColumnListeners(column) {
 for (var i = 0; i < 6; i++) {
    column[i].removeEventListener("click", dropDisc.bind(null, column));
 }
}

function addAllColumnListeners() {
  for (var i = 0; i < allColumns.length; i++) {
    addColumnListeners(allColumns[i]);
  }
}
addAllColumnListeners();

function dropDisc(column) {
  playerMoves += 1;
  var playerClass = playerMoves % 2 === 1 ? "yellow" : "red";
  for (var i = 5; i >= 0; i--) {
    if (column[i].classList.contains("empty") === true) {
      column[i].classList.replace("empty", playerClass);
      break;
    } else if (column[i - 1].classList.contains("empty") === true) {
      column[i - 1].classList.replace("empty", playerClass);
      break;
    } else if (column[i - 2].classList.contains("empty") === true) {
      column[i - 2].classList.replace("empty", playerClass);
      break;
    } else if (column[i - 3].classList.contains("empty") === true) {
      column[i - 3].classList.replace("empty", playerClass);
      break;
    } else if (column[i - 4].classList.contains("empty") === true) {
      column[i - 4].classList.replace("empty", playerClass);
      break;
    } else if (column[i - 5].classList.contains("empty") === true) {
      column[i - 5].classList.replace("empty", playerClass);
      removeColumnListeners();
      break;
    } else {
      alert("Column full, try a different one!");
      break;
    }
  }
  checkForWin();
  return dropDisc;
}

//check win logic...
function checkForWin() {
  //Check each row for a win
  function checkRow() {
    for (var j = 0; j < 6; j++) {
      for (var i = 0; i < 4; i++) {
        if (
          row[j].childNodes[i].classList.contains("red") &&
          row[j].childNodes[i + 1].classList.contains("red") &&
          row[j].childNodes[i + 2].classList.contains("red") &&
          row[j].childNodes[i + 3].classList.contains("red")
        ) {
          redWins();
        } else if (
          row[j].childNodes[i].classList.contains("yellow") &&
          row[j].childNodes[i + 1].classList.contains("yellow") &&
          row[j].childNodes[i + 2].classList.contains("yellow") &&
          row[j].childNodes[i + 3].classList.contains("yellow")
        ) {
          yellowWins();
        }
      }
    }
  }
  checkRow();

  //Check each column for a win
  function checkCol() {
    for (var j = 0; j < 7; j++) {
      for (var i = 0; i < 3; i++) {
        if (
          row[i].childNodes[j].classList.contains("red") &&
          row[i + 1].childNodes[j].classList.contains("red") &&
          row[i + 2].childNodes[j].classList.contains("red") &&
          row[i + 3].childNodes[j].classList.contains("red")
        ) {
          redWins();
        } else if (
          row[i].childNodes[j].classList.contains("yellow") &&
          row[i + 1].childNodes[j].classList.contains("yellow") &&
          row[i + 2].childNodes[j].classList.contains("yellow") &&
          row[i + 3].childNodes[j].classList.contains("yellow")
        ) {
          yellowWins();
        }
      }
    }
  }
  checkCol();

  //check the diagonals going down to the right for a win
  function checkDiagDownRight() {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        if (
          row[j].childNodes[i].classList.contains("red") &&
          row[j + 1].childNodes[i + 1].classList.contains("red") &&
          row[j + 2].childNodes[i + 2].classList.contains("red") &&
          row[j + 3].childNodes[i + 3].classList.contains("red")
        ) {
          redWins();
        } else if (
          row[j].childNodes[i].classList.contains("yellow") &&
          row[j + 1].childNodes[i + 1].classList.contains("yellow") &&
          row[j + 2].childNodes[i + 2].classList.contains("yellow") &&
          row[j + 3].childNodes[i + 3].classList.contains("yellow")
        ) {
          yellowWins();
        }
      }
    }
  }
  checkDiagDownRight();

  //check the diagonals going up to the right for a win
  function checkDiagUpRight() {
    for (var j = 3; j < 6; j++) {
      for (var i = 0; i < 4; i++) {
        if (
          row[j].childNodes[i].classList.contains("red") &&
          row[j - 1].childNodes[i + 1].classList.contains("red") &&
          row[j - 2].childNodes[i + 2].classList.contains("red") &&
          row[j - 3].childNodes[i + 3].classList.contains("red")
        ) {
          redWins();
        } else if (
          row[j].childNodes[i].classList.contains("yellow") &&
          row[j - 1].childNodes[i + 1].classList.contains("yellow") &&
          row[j - 2].childNodes[i + 2].classList.contains("yellow") &&
          row[j - 3].childNodes[i + 3].classList.contains("yellow")
        ) {
          yellowWins();
        }
      }
    }
  }
  checkDiagUpRight();

  //If the board is full alert it's a draw
  function checkForDraw() {
    if (playerMoves === 42) {
      tieGame();
    }
  }
  checkForDraw();
}

var footer = document.getElementsByTagName("footer");
var heading = document.getElementsByTagName("h1");

function redWins() {
  var banner = document.createElement("div");
  banner.innerText = "Red Wins!!!";
  banner.classList.add("banner", "redBanner");
  footer[0].appendChild(banner);
}

function yellowWins() {
  var banner = document.createElement("div");
  banner.innerText = "Yellow Wins!!!";
  banner.classList.add("banner", "yellowBanner");
  footer[0].appendChild(banner);
}

function tieGame() {
  var banner = document.createElement("div");
  banner.innerText = "Tie Game";
  banner.classList.add("banner", "drawBanner");
  footer[0].appendChild(banner);
}
