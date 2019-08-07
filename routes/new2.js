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



//array of reverse pyramid: 

var reversePyramid = ["Incline Barbell Bench Press", "Flat Dumbbell Bench Press", "Incline Dumbbell Curls", "Rope Hammer Curls", "Bulgarian Split Squats", "Romanian Deadlifts", "Leg Extensions", "Standing Barbell Press", "Weighted Chin-ups", "Seated Cable Rows",  "Flat Barbell Bench Press", "Hip Thrusts", "Weighted Dips", "Front Squats", "Reverse Lunges", "Weighted Pull-ups"]

var standardPyramid = ["Hanging Weighted Knee Raises", "Sumo Deadlift Squats", "Dumbbell Forward Lunges", "Lying Leg Raises", "Lat Pull Downs", "Pushups", "Cable Rows", "Goblet Box Squats", "Step-Ups", "Alternating Dumbbell Curls", "Hanging Knee Raises"]

var hold= ["Plank Hold", "Hip Bridge Hold", "Side Plank Hold"]

var restPause = ["Lateral Raises"]

var standardAndReverse = ["Seated Dumbbell Shoulder Press", "Lateral Raises", "Incline Dumbbell Bench Press", "Bent Over Flyes", "Triceps Rope Pushdown"]