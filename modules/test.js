//CALLBACKS TEST

const templateSets = [1,2,3,4]
const lastSets = [1,2,3,4]



function checkSets (templateSets, lastSets) {
    const array = []
    lastSets.forEach(function(set, i){
       if (set.reps === templateSets[i].high) {
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

checkSets(templateSets,lastSets)