$(document).ready(function(){const localUrl='http://localhost:8000'
const prodUrl='https://www.lesswork.me'
let scroll=localStorage.getItem('scroll-pos',0)
let referrer=document.referrer
let currentUrl=window.location.href
if(scroll&&referrer===currentUrl){$(window).scrollTop(scroll)}
$(".workout-button").on("click",function(){localStorage.setItem('scroll-pos',$(window).scrollTop())})
setTimeout(function(){$(".alert").slideUp(500)},3000)
$(".addNote").on("click",function(e){e.preventDefault()
const appendId=$(this).attr("id").substring(7)
const id=("note"+appendId)
$(`#${id}`).toggle()
if($(this).text()==="Remove Note"){$(`#${id}`).val("")
$(this).text("Add Note")}else{$(this).text("Remove Note")}})
$(document).on('hidden.bs.modal',function(event){if($('.modal:visible').length){$('body').addClass('modal-open');}});$('.special-modal').on('click',function(){$('.modal-backdrop2').appendTo($('body'));})
$("#dismissCalTracks").on("click",function(){
    $.post(`${prodUrl}/macroCalc/dismissCalTracks/`, function(err,data){
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
        $("#calTracks").hide()})})
$('.mdb-select').materialSelect()
$(".button-collapse").sideNav();var sideNavScrollbar=document.querySelector('.custom-scrollbar');Ps.initialize(sideNavScrollbar);})