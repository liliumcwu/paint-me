/* Author: Lily Wu
   Date: June 9, 2017 */

const $grid = document.querySelector('#grid');
const $redBox = document.querySelector('#redBox');
const $blueBox = document.querySelector('#blueBox');
const $yellowBox = document.querySelector('#yellowBox');


// const $square = document.querySelector('.square');

var numRows = 3;
var numCols = 4;
var squareWidth = 90 / numCols;
console.log('width: ' + squareWidth + '%;');


function drawGrid(numRows, numCols) {
  for (var r = 1; r <= numRows; r++) {
    var $row = document.createElement('div');
    $row.className= 'row clearfix';
    for (var c = 1; c <= numCols; c++) {
      var $square = document.createElement('div');
      $square.className = 'square';
      $square.style.width = squareWidth + '%';
      $row.appendChild($square);
    }
    $grid.appendChild($row);
  }
}

function colorGrid(color) {
  console.log('color is ' + color);
  var $squareNodes = document.getElementsByClassName('square');
  console.log('$squareNodes.length is ' + $squareNodes.length);
  for (var i = 0; i < $squareNodes.length; i++) {
    $squareNodes[i].addEventListener('click', function() { $squareNodes[i].style.backgroundColor = color; });
  }
}

// function colorSquare($theSquare, color) {
//   $theSquare.style.backgroundColor = color;
// }

drawGrid(numRows, numCols);

$redBox.addEventListener('click', colorGrid.bind(this, 'red'));
$blueBox.addEventListener('click', colorGrid.bind(this, 'blue'));
$yellowBox.addEventListener('click', colorGrid.bind(this, 'yellow'));



