const express = require("express")
const _ = require("lodash")

//GENERALIZED FUNCTIONS
function round(number, roundToNumber)
{
    return Math.round(number/roundToNumber)*roundToNumber;
}

const sumArray = function(array){
  let sum = 0
  array.forEach(function(element){
      sum = sum + element
  })
  return sum
}


//WORKOUT.JS

    //Save Exercise Helper
function setsCreator(setsArray, repsArray, weightsArray, notesArray) {
  for (let i = 0; i < repsArray.length; i++){
    setsArray.push(
      {
        reps: repsArray[i],
        weight: weightsArray[i],
        note: notesArray[i]
      }
      )
  }
}

    //optionMapper

function optionMapper(name, number){
  switch (name) {
    case "Pushups":
        switch(number){
          case 0:
            return "Kneeling"
          case 1:
            return "Standard"
          case 2:
            return "Feet Elevated"
          case 3: 
            return "5lbs on Back"
          case 4: 
            return "10lbs on Back"
          case 5: 
            return "15lbs on Back"
          default: 
            return "you beat the game"
        }
    case "Hip Bridge Hold":
      switch(number){
        case 0:
          return "Hip Brigdge Hold"
        case 1:
          return "Full Bridge Hold"
        case 2:
          return "Full Bridge w/ 5lbs"
        case 3:
          return "Full Bridge w/ 10lbs"
        default: 
          console.log("error with hip bridge hold!!!!")
          return "you beat the game"
      }
    case "Plank Hold":
      switch(number){
        case 0:
          return "Plank Hold"
        case 1:
          return "Long Lever Plank"
        case 2:
          return "Full Bridge w/ Band"
        default: 
          console.log("error with hip bridge hold!!!!")
          return "you beat the game"
      }
      
  }
}


    //Displaysets Creator
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

    //Logic for When No LastExercises
function fillExercises(lastExercisesArray,exercisesArray, foundExercisesArray, fakeLastExercise){
  exercisesArray.forEach(function(exercise){
    lastExercisesArray.push(fakeLastExercise)
  })
  foundExercisesArray.forEach(function(foundExercise, i){
    lastExercisesArray.splice(foundExercise._id.order,1,foundExercise)
  })
}


//WORKOUT.EJS
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


module.exports = {setsCreator, round, displaySetsCreator, determineSetIncrease, increaseWeight, sumArray, checkSets, barCalc, fillExercises, optionMapper}