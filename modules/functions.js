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
    if (lastSets[i] === undefined){
      lastSets[i] = {
        _id: 000000000000000000000001,
        reps: 0,
        weight: 0,
        note: ''
      }
    }
    if (lastSets[i].reps === undefined){
      lastSets[i].reps = null
    } 
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
        if (i === 0){
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: lastSets[i].weight + weightIncrement
            }
          )
        }
        else if (i > 0 && i < templateSets.length - 1) {
          displaySets.push(
            {
              low: templateSets[i].low,
              high: templateSets[i].high,
              weight: displaySets[i-1].weight
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
              weight: (displaySets[i-1].weight - round((displaySets[i-1].weight * .1), weightIncrement)) 
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
    return lastExercisesArray
  })
}

function secondsToMinutes(secondsInput){
  if (secondsInput >= 60){
    const seconds = secondsInput % 60
    const minutes = Math.floor(secondsInput / 60)
    let ms = ""
    let ss = ""
    if (minutes > 1){
      ms = "s"
    }
    if (seconds > 1){
      ss = "s"
    }
    return `${minutes} minute${ms}, ${seconds} second${ss}`
  } else {
    return `${secondsInput} seconds`
  }
}

//DASHBOARD

function nextDay(letter, numberOfExercises){
  const number = numberLetterConverter("number", letter)
  const newNumber = number + 1
  let nextLetter
  let nextNumber
  if(newNumber > numberOfExercises){
    nextLetter = "A"
    nextNumber = 0
  } else {
    nextLetter = numberLetterConverter("letter", newNumber)
    nextNumber = newNumber
  }
  return [nextLetter, nextNumber]
}

function numberLetterConverter(desiredOutPut, input){
  let result
  if (desiredOutPut === "number"){
    result = letterToNumber(input)
  } else if (desiredOutPut === "letter") {
    result = NumberToLetter(input)
  } else {
    console.log("wrong input")
  }
  return result
}

function letterToNumber(letter){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const lowerCaseLetter = _.toLower(letter)

  let number
  alphabet.forEach(function(el, i){
    if (el === lowerCaseLetter){
      number = i
    }
  })
  return number
}

function NumberToLetter(number){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let letter
  alphabet.forEach(function(el, i){
    if (i === number){
      letter = alphabet[i]
    }
  })
  return letter
}

function toKgs(number){
  return round((number / 2.2046226218),.5)
}

function toLbs(number){
  if (number === ''){
    return ''
  } else {
    return round((number * 2.2046226218),.5)
  }
}

function packagesToPhasesIndex (packageUrl) {
  switch (packageUrl){
    case "warrior_shredded":
      return 0
    case "goddess_toning":
      return 1
  }
}

module.exports = {setsCreator, round, displaySetsCreator, determineSetIncrease, increaseWeight, sumArray, checkSets, fillExercises, optionMapper, secondsToMinutes, nextDay, letterToNumber, toKgs, toLbs, packagesToPhasesIndex}