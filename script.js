var box = document.getElementById('cube'); 

box.style.backgroundColor = 'blue';
box.style.left = '100px';

console.log(box);

function RedCub () {
var start = Date.now(); // сохранить время начала

var timer = setInterval(function() {
  // вычислить сколько времени прошло с начала анимации
  var timePassed = Date.now() - start;

  if (timePassed >= 5000) {
    clearInterval(timer); // конец через 2 секунды
    return;
  }

  // рисует состояние анимации, соответствующее времени timePassed
  draw(timePassed);

}, 20);

// в то время как timePassed идёт от 0 до 2000
// left принимает значения от 0 до 400px
function draw(timePassed) {
  box.style.left = timePassed / 5 - 45 + 'px';
}
};


RedCub();
