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

function increaseWeight (templateSets, lastSets, type, special) {
  for (let i = 0; i < templateSets.length; i++){
    
    switch (type) {
      case "Standard Pyramid":
        if (i === 0) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + 5
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
              weight: lastSets[i].weight + 5
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
              weight: lastSets[i].weight + 1
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
              weight: lastSets[i].weight + 5
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
              weight: lastSets[i].weight + 5
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

function determineSetIncrease (templateSets, lastSets) {
  for (let i = 0; i < templateSets.length; i ++) {
    if (lastSets[i].reps >= templateSets[i].high) {
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

function displaySetsCreator(templateSets, lastSets, type, special) {
  if (checkSets(templateSets,lastSets)){
  increaseWeight(templateSets, lastSets, type, special)
  } else {
  determineSetIncrease(templateSets, lastSets)
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
  lastSets.forEach(function(set, i){
     if (set.reps >= templateSets[i].high) {
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

function optionMapper(name, number){
  switch (name) {
    case "Pushups":
        switch(number){
          case 1:
            return "Kneeling"
          case 2:
            return "Standard"
          case 3:
            return "Feet Elevated"
          case 4: 
            return "5lbs on Back"
          case 5: 
            return "10lbs on Back"
          case 6: 
            return "15lbs on Back"
          default: 
            return "you beat the game"
        }
    case "Hip Bridge Hold":
      switch(number){
        case 1:
          return "Hip Brigdge Hold"
        case 2:
          return "Full Bridge Hold"
        case 3:
          return "Full Bridge w/ 5lbs"
        case 4:
          return "Full Bridge w/ 10lbs"
        default: 
          console.log("error with hip bridge hold!!!!")
          return "you beat the game"
      }
    case "Plank Hold":
      switch(number){
        case 1:
          return "Plank Hold"
        case 2:
          return "Long Lever Plank"
        case 3:
          return "Full Bridge w/ Band"
        default: 
          console.log("error with hip bridge hold!!!!")
          return "you beat the game"
      }
      
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


module.exports = {setsCreator, round, sumTemplate, sumLast, displaySetsCreator, determineSetIncrease, increaseWeight, sumArray, checkSets, maxWeightText, optionMapper, barCalc}