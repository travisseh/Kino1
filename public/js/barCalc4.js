//BARCALC LOGIC

function round(number, roundToNumber)
{
    return Math.round(number/roundToNumber)*roundToNumber;
}

function toKgs(number){
    return round((number / 2.2046226218),.5)
  }

//Returns the array of recommended weights
function weightCalc(weightMinusBar, holderArray, weightsArray){
    for (let i = 0; i < weightsArray.length; i++){
      //set weightsoutput to the dividend of input and specific weight
      holderArray[i] = Math.floor(weightMinusBar / weightsArray[i])
      //find remainder and set it to the evaluated value
      weightMinusBar = weightMinusBar % weightsArray[i] 
    }
    return holderArray
  }
  
  //Adds the word And where appropriate as another array item
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
  
  //turns the array into a properly spaced sentence instead of an array
  function sentenceCreator(array){
    let sentence = ""
      array.forEach(function(phrase){
        sentence += " " + phrase
      })
    return sentence
  }
  
  function numberToWord (number){
    switch (number){
      case 1:
      return "one"
      case 2:
      return "two"
      case 3:
      return "three"
      case 4:
      return "four"
      case 5: 
      return "five"
      case 6:
      return "six"
      case 7:
      return "seven"
      case 8:
      return "eight"
      case 9:
      return "nine"
    }
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
            removes.push(`${numberToWord(Math.abs(result))} ${weightsArray[i]/2}${s}`)
          }else if (result > 0){
            adds.push(`${numberToWord(result)} ${weightsArray[i]/2}${s}`)
          }
      })
      
      //Add the word "Add into the removes and adds arrays"
      addAnd(removes)
      addAnd(adds)
      
      //create the full sentence
      let fullSentence = ""
      if (removes.length > 0 && adds.length > 0){
        fullSentence = `on each side remove${sentenceCreator(removes)} then add${sentenceCreator(adds)}.`
      } else if (adds.length > 0) {
        fullSentence = `on each side add ${sentenceCreator(adds)}.`
      } else if (removes.length > 0){
        fullSentence = `on each side remove ${sentenceCreator(removes)}.`
      } else {
        fullSentence = `no weights to add`
      }
     
      return fullSentence
    
  }
  
  function barCalc2(previousWeight, displayWeight, barWeight, weightUnit) {
    let weights = [90, 70, 50, 20, 10, 5]
    if (weightUnit === "kgs"){
      weights = [50, 40, 30, 20, 10, 5, 2.5]
    } 
    let currentWeightMinusBar = displayWeight - barWeight
    let lastWeightMinusBar = previousWeight - barWeight
    let lastWeightsOutPut = []
    let currentWeightsOutPut = []
    let currentWeights
    let lastWeights
    if (currentWeightMinusBar < 0){
      if (weightUnit === "kgs"){
        currentWeights = [0,0,0,0,0,0,0]
      } else {
        currentWeights = [0,0,0,0,0,0]
      }
    } else {
      //do weightCalc on displayWeight
      currentWeights = weightCalc(currentWeightMinusBar,currentWeightsOutPut, weights)
    }
    if (lastWeightMinusBar < 0){
      if (weightUnit === "kgs"){
        lastWeights = [0,0,0,0,0,0,0]
      } else {
        lastWeights = [0,0,0,0,0,0]
      }
    } else {
      //do weightCalc on lastWeight
      lastWeights = weightCalc(lastWeightMinusBar, lastWeightsOutPut, weights)
    }
    const finalResult = []
    for (let i = 0; i < weights.length; i++){
      finalResult.push(currentWeights[i] - lastWeights[i])
    }
  
    return finalResultInterpreter(finalResult, weights)
  
  }

  function passBarCalcValues () {
    //lookup barWeight
    const barWeight = $('#barWeight').data("bar-weight")
    const weightUnit = $("#weightUnit").val()
    
    //warmup weight BarCalc
    $(".barCalcWarmUp").html(function(){
        //get id of barCalc
        const appendId = $(this).attr("id")
        .substring(7,10)
        const lastCharacter = $(this).attr("id").substring(10)
        const newLastCharacter = lastCharacter - 1
        let lastWeight
        //Handle if this is the first warmup
        if (newLastCharacter < 0) {
            lastWeight = barWeight
        } else {
            //find the corresponding lastweight from the warmup <p>
            const lastWarmUpId = ("warmup" + appendId + newLastCharacter)
            lastWeight = $(`#${lastWarmUpId}`).data("weight")
        }
        //find the corresponding currenweight from warmup <p>
        const currentWarmUpId = ("warmup" + appendId + lastCharacter)
        const currentWeight = $(`#${currentWarmUpId}`).data("weight")
        return "<img src='/icons/dumbbell.svg'> " + barCalc2(lastWeight,currentWeight, barWeight, weightUnit)
    })

    //Normal weight BarCalc
    $(".barCalc").html(function(){
        //get id of barCalc
        const appendId = $(this).attr("id").substring(7,10)
        const lastCharacter = $(this).attr("id").substring(10)
        const newLastCharacter = lastCharacter - 1
    
        let lastWeight
        //Handle if this is the first exercise 
        if (newLastCharacter < 0) {
            //Handle if there are warmups and set it to the last warmup
            if ($(".weightWarmUp").length > 0){
                //traverse up to get the per workout div id - something like E0 or E1
                id = $(this).parent().parent().attr("id")
                //traverse down and find the warmups if there are any
                lastWeight = $(`#${id}`).children(".weightWarmUp").last().data("weight")
            } else {
                //handle if there aren't any warm-ups
                lastWeight = barWeight
            }
        } else {
            const lastWeightId = ("weight" + appendId + newLastCharacter)
            lastWeight = $(`#${lastWeightId}`).val()
        }
        const currentWeightId = ("weight" + appendId + lastCharacter)
        const currentWeight = $(`#${currentWeightId}`).val()
        return "<img src='/icons/dumbbell.svg'> " + barCalc2(lastWeight,currentWeight, barWeight, weightUnit)
        })
  }

function updateWarmUps (newValue, callback) {
  if ($(this).data("set-weight") === 0 && $(this).data("has-warmups") === 1) {
    //traverse back to however many warmups and change their value
    const exercise = $(this).data("exercise")
    $.each($(".warmup").filter(`[data-exercise="${exercise}"]`), function(i){
      $(this).html(function(){
        const percent = $(this).data("percent")
        const newWarmupWeight = round(((percent * newValue)/100), 5)
        $(this).data("weight", newWarmupWeight)
        return newWarmupWeight
      })
    }) 
    callback()
  } else {
    callback()
  }
}

//PASS VALUES TO BARCALC

$(document).ready(function () {
  $(".quantity").change(function(){
    const newValue = $(this).val()
    updateWarmUps.call($(this), newValue, passBarCalcValues)
  })

  //on page load/document ready trigger change so it's always there
  $(".quantity").trigger("change")

  $(".weight-button").on("click", function(){
    $(".quantity").trigger("change")
  })

//END JQUERY.READY
});