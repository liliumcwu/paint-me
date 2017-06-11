/* Author: Lily Wu
   Date: June 10, 2017 */

const $grid = document.querySelector('#grid');
const $redBox = document.querySelector('#redBox');
const $blueBox = document.querySelector('#blueBox');
const $yellowBox = document.querySelector('#yellowBox');
const $clearButton = document.querySelector('#clearButton');
const $squareNodes = document.getElementsByClassName('square');
const $newGridButton = document.querySelector('#newGridButton');
const $dialog = document.querySelector('#dialog');
const colors = ['red', 'blue', 'yellow'];

drawGrid(3, 4);

function drawGrid(numRows, numCols) {
  numRows = Number(numRows);
  numCols = Number(numCols);

  if (!Number.isInteger(numRows) || numRows <= 0) {
    alert('Invalid height. Please enter an integer greater than 0.');
    return false;
  }
  if (!Number.isInteger(numCols) || numCols <= 0) {
    alert('Invalid width. Please enter an integer greater than 0.');
    return false;
  }
  while ($dialog.firstChild)
    $dialog.removeChild($dialog.firstChild);

  var squareWidth = 90 / numCols;
  for (var r = 1; r <= numRows; r++) {
    var $row = document.createElement('div');
    $row.className = 'gridRow clearfix';

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
  var boxId = color + 'Box';
  var bla = document.getElementById(boxId).style.borderWidth = '5px';
  for (var j = 0; j < 3; j++) {
    if (color !== colors[j]) document.getElementById(colors[j] + 'Box').style.borderWidth = '2px';
  }
  for (var i = 0; i < $squareNodes.length; i++)
    $squareNodes[i].addEventListener('click', function(event) { event.target.style.backgroundColor = color; });
}

function clearGrid() {
  for (var i = 0; i < $squareNodes.length; i++)
    $squareNodes[i].style.backgroundColor = 'white';
  for (var j = 0; j < 3; j++) {
    document.getElementById(colors[j] + 'Box').style.borderWidth = '2px';
  }
}

function makeNewGrid() {
  while ($grid.firstChild)
    $grid.removeChild($grid.firstChild);

  var $heightText = document.createElement('p');
  $heightText.innerHTML = 'Height of new grid: ';
  var $heightPrompt = document.createElement('input');
  var $widthText = document.createElement('p');
  $widthText.innerHTML = 'Width of new grid: ';
  var $widthPrompt = document.createElement('input');
  var $enterButton = document.createElement('button');
  $enterButton.innerHTML = 'Enter';
  $dialog.appendChild($heightText);
  $dialog.appendChild($heightPrompt);
  $dialog.appendChild($widthText);
  $dialog.appendChild($widthPrompt);
  $dialog.appendChild($enterButton);
  // $enterButton.addEventListener('click', drawGrid($heightPrompt.value, $widthPrompt.value));
  // $enterButton.onclick = drawGrid($heightPrompt.value, $widthPrompt.value);
  $enterButton.onclick = function () {drawGrid($heightPrompt.value, $widthPrompt.value)};

}

$redBox.addEventListener('click', colorGrid.bind(this, 'red'));
$blueBox.addEventListener('click', colorGrid.bind(this, 'blue'));
$yellowBox.addEventListener('click', colorGrid.bind(this, 'yellow'));
$clearButton.addEventListener('click', clearGrid);
$newGridButton.addEventListener('click', makeNewGrid);


