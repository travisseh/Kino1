const hello = function(){
    console.log('hello')
}

const myInterval = setInterval(hello,1000)

myInterval()


function changeColor() {
    nIntervId = setInterval(flashText, 1000);
  }

  function flashText() {
    var oElem = document.getElementById('my_box');
    oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
    // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
  }