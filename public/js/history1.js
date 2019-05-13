$(document).ready(function () {

const localUrl = 'http://localhost:8000'
const prodUrl = 'https://www.kinohelper.com'
    
$(".viewPast2").on("click", function(){
    //look up the last exercises
    const exercise = $(this).data("exercise")
    const templateExerciseName = $("input[name='exerciseName']")[exercise].value
    templateExerciseName.split(' ').join('_')

    $.get(`${prodUrl}/workout/warrior_shredded/A/exercise/${templateExerciseName}/`, function(data){
        $(".past-exercises2").eq(exercise).html(function(){
            console.log("loading history")
            return "loading history..."
        })
    })
    .fail(function(){
        $(".past-exercises2").eq(exercise).html(function(){
            return "sorry there was a problem loading history - please try refreshing"
        })
    })
    .done(function(data){
        //open a div and fill it with content
        $(".past-exercises2").eq(exercise).html(function(){
            if (data === null || data === undefined || data.length === 0 || data[0].sets[1].weight === null){
                return '<p>No sets of this exericse have been recorded yet!</p>'
            } else {
                return `
                ${data.map(function(el){
                    //ignore NUX generated exercise
                    if (el.sets[1].weight != null) {
                    //make the date relative to now
                    const daysFromNow = moment(el.date).format('dddd, MMMM Do')
                    //return the date
                    return `<h6>${daysFromNow}</h6>
                    ${el.sets.map(function(set, i){
                        //return each set
                        let note = ""
                        if (set.note != "" && set.note != null && set.note != undefined){
                            note = `, ${set.note}`
                        }
                        return `<p><button class="btn-list-number">${i + 1}</button>   ${set.reps} reps at ${set.weight} lbs${note}</p>`
                    }).join('')}
                    <div class="spacer-div"></div>`
                    } 
                }).join('')}
            `  
            }
        })
    })
})




})