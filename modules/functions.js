const express = require("express")
const _ = require("lodash")

function setsCreator(setsArray, repsArray, weightsArray) {
    for (let i = 0; i < repsArray.length; i++){
      setsArray.push(
        {
          reps: repsArray[i],
          weight: weightsArray[i]
        }
        )
    }
  }

function round(number, roundToNumber)
{
    return Math.round(number/roundToNumber)*roundToNumber;
}

//max weight thing

function maxWeightText (index){
  let percent = (10-index)*10 
  if (percent === 100){
    return (`max weight`)
  }else {
    return (`${percent}% max weight`)}
}


//LOGIC TEST FOR DISPLAY REPS AND WEIGHTS

//get these from database
const lastSetsReal = [
  {
    reps: 6,
    weight: 150 
  },
  {
    reps: 7,
    weight: 135
  },
  {
    reps: 8,
    weight: 120
  }
]

const templateSetsReal = [
  {
      low: 5,
      high: 6
  },
  {
      low: 6,
      high: 7
  },
  {
      low: 7,
      high: 8
  }
  ]

function sumLast(lastSets){
  let result = 0
  lastSets.forEach(function(set){
    result = result + set.reps
  })
  return result
}

function sumTemplate(templateSets){
  let result = 0
  templateSets.forEach(function(set){
    result = result + set.high
  })
  return result
}

function increaseWeight (templateSets, lastSets, type, weightIncrement) {
  for (let i = 0; i < templateSets.length; i++){
    
    switch (type) {
      case "Standard Pyramid":
        if (i === 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + weightIncrement
            }
            )
        } else if (i > 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: displaySets[i-1].weight
            }
            )
        } 
        break

      case "Standard Pyramid Tweaked":
        if (i < templateSets.length -1) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + weightIncrement
            }
            )
        } else {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: displaySets[i-1].weight - 5
            }
            )
        } 
        break

      case "Hold":
        case "Standard Pyramid":
        if (i === 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + weightIncrement
            }
            )
        } else if (i > 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: displaySets[i-1].weight
            }
            )
        } 
        break

      case "Reverse Pyramid":
        if (i === 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + weightIncrement
            }
            )
        } else if (i > 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: (displaySets[i-1].weight - round((displaySets[i-1].weight * .1), 5)) 
            }
            )
        } 
        break

      case "Rest Pause":
        if (i === 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + weightIncrement
            }
            )
        } else if (i > 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: displaySets[i-1].weight
            }
            )
        } 
        break

      default:


    }
    
    
    
    
    
    
  }
}

function determineSetIncrease (templateSets, lastSets, type) {
  for (let i = 0; i < templateSets.length; i ++) {
    if (lastSets[i].reps === null){
        //account for standard pyramid as the else and then reverse and standard tweaked as their own - and turn it into a function at the end
        if (type === "Reverse Pyramid"){
          if (i === 0) {
            displaySets.push(
              {
                low: templateSets[i].low,
                high: templateSets[i].high,
                weight: "max weight"
              }
              )
          } else if (i > 0) {
            displaySets.push(
              {
                low: templateSets[i].low,
                high: templateSets[i].high,
                weight: `${(10-i)*10}% of max weight`
              }
              )
          } 
        } else if (type === "Standard Pyramid Tweaked"){
          if (i < templateSets.length -1) {
            displaySets.push(
              {
                low: templateSets[i].low,
                high: templateSets[i].high,
                weight: "max weight"
              }
              )
          } else {
            displaySets.push(
              {
                low: templateSets[i].low,
                high: templateSets[i].high,
                weight: displaySets[i-1].weight + " - 5"
              }
              )
          } 
        } else {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: "max weight"
            }
            )
        }
    } else if (lastSets[i].reps >= templateSets[i].high) {
      displaySets.push(
        {
          low: null,
          high: lastSets[i].reps,
          weight: lastSets[i].weight
        }
      )
    } else if (lastSets[i].reps + 1 >= templateSets[i].high) {
      displaySets.push(
        {
          low: null,
          high: templateSets[i].high,
          weight: lastSets[i].weight
        }
      )
    } else {
      displaySets.push(
        {
          low: (lastSets[i].reps + 1),
          high: templateSets[i].high,
          weight: lastSets[i].weight
        }
      )
    }
  }
}

function displaySetsCreator(templateSets, lastSets, type, weightIncrement) {
  if (checkSets(templateSets,lastSets)){
  increaseWeight(templateSets, lastSets, type, weightIncrement)
  } else {
  determineSetIncrease(templateSets, lastSets, type)
  }
}

const sumArray = function(array){
  let sum = 0
  array.forEach(function(element){
      sum = sum + element
  })
  return sum
}



function checkSets (templateSets, lastSets) {
  const array = []
  templateSets.forEach(function(set, i){
     if (lastSets[i].reps >= set.high) {
         array.push(0)
     } else {
         array.push(1)
     }
  })
  if (sumArray(array) === 0) {
      return true
  } else {
      return false
  }
}

function barCalc(disPlayWeight) {
    const barWeight = 45
    let weightMinusBar = disPlayWeight - barWeight
    const weights = [90, 70, 50, 20, 10, 5]
    let weightsOutPut = []
    for (let i = 0; i < weights.length; i++){
      //set weightsoutput to the dividend of input and specific weight
      weightsOutPut[i] = Math.floor(weightMinusBar / weights[i])
      //find remainder and set it to the evaluated value
      weightMinusBar = weightMinusBar % weights[i] 
    }
    return weightsOutPut
}

function fillExercises(lastExercisesArray,exercisesArray, foundExercisesArray, fakeLastExercise){
  exercisesArray.forEach(function(exercise){
    lastExercisesArray.push(fakeLastExercise)
  })

  foundExercisesArray.forEach(function(foundExercise, i){
    lastExercisesArray.splice(foundExercise._id.order,1,foundExercise)
  })
}


module.exports = {setsCreator, round, sumTemplate, sumLast, displaySetsCreator, determineSetIncrease, increaseWeight, sumArray, checkSets, maxWeightText, barCalc, fillExercises}