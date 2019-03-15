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
          return "Regular"
        case 1:
          return "Full Bridge Hold"
        case 2:
          return "Full Bridge w/ Band"
        case 3:
          return "Full Bridge w/ 5lbs"
        default: 
          console.log("error with hip bridge hold!!!!")
          return "you beat the game"
      }
    case "Side Plank Hold":
      switch(number){
        case 0:
          return "Regular"
        case 1:
          return "Arm Straightened"
        case 2:
          return "Outer Leg Lifted"
        case 3: 
          return "Feet Elevated"
        case 4:
          return "Holding 10 lbs"
        case 5:
          return "Holding 20 lbs"
        default: 
          console.log("error with hip bridge hold!!!!")
          return "you beat the game"
      }
    case "Plank Hold":
    switch(number){
      case 0:
        return "Regular"
      case 1:
        return "Long Lever Plank"
      case 2:
        return "Long Lever + 5 lbs"
      case 3: 
        return "Long Lever + 10 lbs"
      case 4:
        return "Long Lever + 15 lbs"
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


function weightCalc(weightMinusBar, holderArray, weightsArray){
  for (let i = 0; i < weightsArray.length; i++){
    //set weightsoutput to the dividend of input and specific weight
    holderArray[i] = Math.floor(weightMinusBar / weightsArray[i])
    //find remainder and set it to the evaluated value
    weightMinusBar = weightMinusBar % weightsArray[i] 
  }
  return holderArray
}


function addAnd(array){
  if (array.length > 1){
    for (let i = 0; i < array.length; i++ ){
      if(i % 2 === 1){
        array.splice(i,0,"and")
      }
    }
    return array
    } else {
      return array
    }
  }

function sentenceCreator(array){
  let sentence = ""
    array.forEach(function(phrase){
      sentence += " " + phrase
    })
  return sentence
}

function finalResultInterpreter(finalResultArray, weightsArray){
    let removes = []
    let adds = []
    //negative values
    finalResultArray.forEach(function(result, i){
        let s
        if (Math.abs(result) > 1){
          s = "'s"
        } else {
          s = ""
        }
        if(result < 0){
          removes.push(`${Math.abs(result)} ${weightsArray[i]/2}${s}`)
        }else if (result > 0){
          adds.push(`${result} ${weightsArray[i]/2}${s}`)
        }
    })
    
    addAnd(removes)
    addAnd(adds)

    let fullSentence = ""
    if (removes.length > 0 && adds.length > 0){
      fullSentence = `On each side remove${sentenceCreator(removes)} then add${sentenceCreator(adds)}.`
    } else if (adds.length > 0) {
      fullSentence = `On each side add ${sentenceCreator(adds)}.`
    } else if (removes.length > 0){
      fullSentence = `One each side remove ${sentenceCreator(removes)}.`
    } else {
      fullSentence = `No weights to add!`
    }
   
    return fullSentence
  
}

function barCalc2(previousWeight, disPlayWeight) {
  const barWeight = 45
  const weights = [90, 70, 50, 20, 10, 5]
  let currentWeightMinusBar = disPlayWeight - barWeight
  let lastWeightMinusBar = previousWeight - barWeight
  let lastWeightsOutPut = []
  let currentWeightsOutPut = []

  const currentWeights = weightCalc(currentWeightMinusBar,currentWeightsOutPut, weights)
  const lastWeights = weightCalc(lastWeightMinusBar, lastWeightsOutPut, weights)
  const finalResult = []

  for (let i = 0; i < weights.length; i++){
    finalResult.push(currentWeights[i] - lastWeights[i])
  }

  return finalResultInterpreter(finalResult, weights)

}



module.exports = {setsCreator, round, displaySetsCreator, determineSetIncrease, increaseWeight, sumArray, checkSets, barCalc, fillExercises, optionMapper, barCalc2}