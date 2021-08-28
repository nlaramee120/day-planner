$(document).ready(function(){


var timeDisplayEl = $('#display-time');
var saveBtn = document.querySelector('.saveBtn')
var middleBox1 = document.getElementById('9')


function displayTime() {
    console.log('Time')
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}



function saveColumn(){
    console.log(middleBox1.textContent)
    var newTask = localStorage.getItem('9')
    

    localStorage.setItem("9", newTask);
}
// $(".saveBtn").on("click", function(){
// var taskValue = $("#9").value();
//     console.log(taskValue)
// })

saveBtn.addEventListener("click", saveColumn)




function columnColor() {
    var getColor = new Date(). getHours();
    console.log(getColor)
    if (getColor < 9) {
        $("#9").addClass("future");
}   else if (getColor === 9) {
        $("#9").addClass("present");
}   else {
        $("#9").addClass("past");
}
    if (getColor < 10) {
        $("#10").addClass("future");
}   else if (getColor === 10) {
        $("#10").addClass("present");
}   else {  
        $("#10").addClass("past");
}
    if (getColor < 11) {
        $("#11").addClass("future");
}   else if (getColor === 11) {
        $("#11").addClass("present");
}   else {
        $("#11").addClass("past");
}
    if (getColor < 12) {
        $("#12").addClass("future");
}   else if (getColor === 12) {
        $("#12").addClass("present");
}   else {
        $("#12").addClass("past");
}
    if (getColor < 13) {
        $("#13").addClass("future");
}   else if (getColor === 13) {
        $("#13").addClass("present");
}   else {
        $("#13").addClass("past");
}
    if (getColor < 14) {
        $("#14").addClass("future");
}   else if (getColor === 14) {
        $("#14").addClass("present");
}   else {
        $("#14").addClass("past");
}
    if (getColor < 15) {
        $("#15").addClass("future");
}   else if (getColor === 15) {
        $("#15").addClass("present");
}   else {
        $("#15").addClass("past");
}
    if (getColor < 16) {
        $("#16").addClass("future");
}   else if (getColor === 16) {
        $("#16").addClass("present");
}   else {
        $("#16").addClass("past");
}
    if (getColor < 17) {
        $("#17").addClass("future");
}   else if (getColor === 17) {
        $("#17").addClass("present");
}   else {
        $("#17").addClass("past");
}
    if (getColor < 18) {
        $("#18").addClass("future");
}   else if (getColor === 18) {
        $("#18").addClass("present");
}   else {
        $("#18").addClass("past");
}
}

columnColor();






setInterval(displayTime, 1000)

})