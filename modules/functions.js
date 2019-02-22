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


const displaySets = []

const summedLastReps = _.sumBy(lastSetsReal, "reps")
const summedTemplateReps = _.sumBy(templateSetsReal, "high")

function increaseWeight (templateSets, lastSets) {
  for (let i = 0; i < templateSets.length; i++){
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

function displaySetsCreator(templateSets, lastSets) {
  if (summedLastReps === summedTemplateReps) {
    increaseWeight(templateSets, lastSets)
  } else {
    determineSetIncrease(templateSets, lastSets)
  }
}

// displaySetsCreator(templateSetsReal, lastSetsReal)

module.exports = {setsCreator, round, increaseWeight, determineSetIncrease, displaySetsCreator}