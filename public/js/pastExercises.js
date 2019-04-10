$(document).ready(function () {

const localUrl = 'http://localhost:8080'
const prodUrl = 'https://kinohelper.herokuapp.com'
    
$(".viewPast").on("click", function(){
    //look up the last exercises
    const exercise = $(this).data("exercise")
    // const templateExerciseId = $("input[name='templateId']")[exercise].value
    const templateExerciseName = $("input[name='exerciseName']")[exercise].value
    templateExerciseName.split(' ').join('_')

    $.get(`${prodUrl}/workout/warrior_shredded/A/exercise/${templateExerciseName}`, function(data){
        $(".modal-body.past-exercises").eq(exercise).html(function(){
            return "loading history..."
        })
    })
    .fail(function(){
        $(".modal-body.past-exercises").eq(exercise).html(function(){
            return "sorry there was a problem loading history - please try refreshing"
        })
    })
    .done(function(data){
        //open a div and fill it with content
        $(".modal-body.past-exercises").eq(exercise).html(function(){
            if (data === null || data === undefined || data.length === 0 || data[0].sets[1].weight === null){
                return '<p>No sets of this exericse have been recorded yet!</p>'
            } else {
                return `
                ${data.map(function(el){
                    //ignore NUX generated exercise
                    if (el.sets[1].weight != null) {
                        //make the date relative to now
                    const daysFromNow = moment(el.date).fromNow()
                    //return the date
                    return `<h5>${daysFromNow}</h5>
                    ${el.sets.map(function(set, i){
                        //return each set
                        let note = ""
                        if (set.note != "" && set.note != null && set.note != undefined){
                            note = `, ${set.note}`
                        }
                        return `<p>Set ${i + 1}: ${set.reps} at ${set.weight} lbs${note}</p>`
                    }).join('')}
                    <br>`
                    }
                }).join('')}
            `  
            }
        })
    })
})
});