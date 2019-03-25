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

//AUTO-SCROLL TO WHERE BUTTON WAS CLICKED 
let scroll = localStorage.getItem('scroll-pos', 0)
let referrer = document.referrer
let currentUrl = window.location.href
if (scroll && referrer === currentUrl){
    $(window).scrollTop(scroll)
}

$(".workout-button").on("click", function(){
    localStorage.setItem('scroll-pos', $(window).scrollTop())
})

setTimeout(function(){
    $(".alert").slideUp(500)
}, 3000)

//ADD-REMOVE NOTE 
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


//initiatlize dropdowns
$('.mdb-select').materialSelect()

//convert lastDate on Dashboard page
// $(".relative-date").text(function(){
//     const currentDate = moment($(this).data("date")).fromNow()
//     return "Last completed " + currentDate
// })

// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
Ps.initialize(sideNavScrollbar);





//END DOC.READY
})




