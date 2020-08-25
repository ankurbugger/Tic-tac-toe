//restar button

var restart= document.querySelector("#b");


//grab all the squares
var squares=document.querySelectorAll('td');
//clear all the squares
function clearSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }
}
restart.addEventListener('click',clearSquares);

//using this keyword

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent=== 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker);
}
//check the square marker
//basic method

/* var cell11=document.querySelector('#one');

cell11.addEventListener('click',function(){

if (cell11.textContent === '') {
  cell11.textContent= 'X';

}else if (cell11.textContent === 'X') {
  cell11.textContent = 'O';

}else {
  cell11.textContent = '';
}
})


//for celltwo
var cell12=document.querySelector('#two')

cell12.addEventListener('click',function(){
  if (cell12.textContent === '') {
    cell12.textContent = 'X';
  }else if (cell12.textContent=== 'X') {
    cell12.textContent = 'O';
  }else {
    cell12.textContent = '';
  }
})


var cell13=document.querySelector('#three')

cell13.addEventListener('click',function(){
  if (cell13.textContent === '') {
    cell13.textContent = 'X';
  }else if (cell13.textContent=== 'X') {
    cell13.textContent = 'O';
  }else {
    cell13.textContent = '';
  }
})


var cell21=document.querySelector('#one1')

cell21.addEventListener('click',function(){
  if (cell21.textContent === '') {
    cell21.textContent = 'X';
  }else if (cell21.textContent=== 'X') {
    cell21.textContent = 'O';
  }else {
    cell21.textContent = '';
  }
})


var cell22=document.querySelector('#two1')

cell22.addEventListener('click',function(){
  if (cell22.textContent === '') {
    cell22.textContent = 'X';
  }else if (cell22.textContent=== 'X') {
    cell22.textContent = 'O';
  }else {
    cell22.textContent = '';
  }
})


var cell23=document.querySelector('#three1')

cell23.addEventListener('click',function(){
  if (cell23.textContent === '') {
    cell23.textContent = 'X';
  }else if (cell23.textContent=== 'X') {
    cell23.textContent = 'O';
  }else {
    cell23.textContent = '';
  }
})


var cell31=document.querySelector('#one2')

cell31.addEventListener('click',function(){
  if (cell31.textContent === '') {
    cell31.textContent = 'X';
  }else if (cell31.textContent=== 'X') {
    cell31.textContent = 'O';
  }else {
    cell31.textContent = '';
  }
})


var cell32=document.querySelector('#two2')

cell32.addEventListener('click',function(){
  if (cell32.textContent === '') {
    cell32.textContent = 'X';
  }else if (cell32.textContent=== 'X') {
    cell32.textContent = 'O';
  }else {
    cell32.textContent = '';
  }
})


var cell33=document.querySelector('#three2')

cell33.addEventListener('click',function(){
  if (cell33.textContent === '') {
    cell33.textContent = 'X';
  }else if (cell33.textContent=== 'X') {
    cell33.textContent = 'O';
  }else {
    cell33.textContent = '';
  }
})
*/
//for loop to add event listener to all the squares
