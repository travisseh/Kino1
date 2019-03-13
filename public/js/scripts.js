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


$(".addNote").on("click", function (e) { 
    e.preventDefault()
    const appendId = $(this).attr("id").substring(7)
    const id = ("note"+appendId)
    $(`#${id}`).attr("type", "text")
    $(this).remove()
    // $(this).attr("class", "removeNote")
    // $(this).text("Remove Note")
})

// $(".removeNote").on("click", function (e) { 
//     e.preventDefault()
//     const appendId = $(this).attr("id").substring(7)
//     console.log(appendId)
//     const id = ("note"+appendId)
//     console.log(id)
//     $(`#${id}`).attr("type", "hidden")
//     $(this).attr("class", "addNote")
//     $(this).text("Add Note")
// })

})
