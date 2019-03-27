$(document).ready(function () {
    
$(".viewPast").on("click", function(){
    //look up the last exercises
    const exercise = $(this).data("exercise")
    const templateExerciseId = $("input[name='templateId']")[exercise].value

    $.get(`http://localhost:8080/workout/warrior_shredded/A/exercise/${templateExerciseId}`, function(data){
        //open a div and fill it with content
        $(".modal-body.past-exercises").eq(exercise).html(function(){
            return `
                ${data.map(function(el){
                    //make the date relative to now
                    const daysFromNow = moment(el.date).fromNow()
                    //return the date
                    return `<h5>${daysFromNow}</h5>
                    ${el.sets.map(function(set, i){
                        //return each set
                        return `<p>Set ${i}: ${set.reps} at ${set.weight} lbs</p>`
                    }).join('')}
                    <br>`
                }).join('')}
            `  
        })
    })
})
});