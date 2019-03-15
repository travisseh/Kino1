// const functions = require("../../modules/functions")

// window.onload = function() {
//   if (window.jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!")
//   } else {
//       // jQuery is not loaded
//       alert("Doesn't Work")
//   }
// }

$(document).ready(function () {

let scroll = localStorage.getItem('scroll-pos', 0)
let referrer = document.referrer
let currentUrl = window.location.href
if (scroll && referrer === currentUrl){
    $(window).scrollTop(scroll)
}


$(".addNote").on("click", function(e){
    e.preventDefault()
    const appendId = $(this).attr("id").substring(7)
    const id = ("note"+appendId)
    $(`#${id}`).toggle()
    if ($(this).text() === "Remove Note"){
        $(`#${id}`).val("")
        $(this).text("Add Note")
    } else {
        $(this).text("Remove Note")
    }
    
})

$(".workout-button").on("click", function(){
    localStorage.setItem('scroll-pos', $(window).scrollTop())
})


//get the id of the Barcalc

//look up 
$(".barCalc").text(function(){
    //get id of barCalc
    const appendId = $(this).attr("id").substring(7,10)
    const lastCharacter = $(this).attr("id").substring(10)
    const newLastCharacter = lastCharacter - 1

    let lastWeight
    //Handle if this is the first exercise 
    if (newLastCharacter < 0) {
        //Handle if there are warmups and set it to the last warmup
        if ($(".weightWarmUp").length > 0){
            dataId = $(this).parent().parent().data("exercise")
            console.log("dataid: " + dataId)
            lastweight = $(`${dataId} > .weightWarmup`).last().data("weight")
        } else {
            lastWeight = 45
        }
    } else {
        const lastWeightId = ("weight" + appendId + newLastCharacter)
        lastWeight = $(`#${lastWeightId}`).val()
    }
    const currentWeightId = ("weight" + appendId + lastCharacter)
    const currentWeight = $(`#${currentWeightId}`).val()
    console.log("lastWeight: " + lastWeight)
    console.log("currentWeight: " + currentWeight)
    return barCalc2(lastWeight,currentWeight)
})




})




//function - learn how to import this later



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