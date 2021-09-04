$(document).ready(function(){


var timeDisplayEl = $('#display-time');



function displayTime() {
    console.log('Time')
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

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

$('#save1').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save2').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save3').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save4').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save5').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save6').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save7').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save8').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save9').click(function(event) {
        event.preventDefault();
        storeEntry();
});
$('#save10').click(function(event) {
        event.preventDefault();
        storeEntry();
});

var entry1 = $('#9');
var entry2 = $('#10');
var entry3 = $('#11');
var entry4 = $('#12');
var entry5 = $('#13');
var entry6 = $('#14');
var entry7 = $('#15');
var entry8 = $('#16');
var entry9 = $('#17');
var entry10 = $('#18');

        

function storeEntry() {
        localStorage.setItem("event1", entry1.text());
        localStorage.setItem("event2", entry2.text());
        localStorage.setItem("event3", entry3.text());
        localStorage.setItem("event4", entry4.text());
        localStorage.setItem("event5", entry5.text());
        localStorage.setItem("event6", entry6.text());
        localStorage.setItem("event7", entry7.text());
        localStorage.setItem("event8", entry8.text());
        localStorage.setItem("event9", entry9.text());
        localStorage.setItem("event10", entry10.text());
}

var getEntry1 = localStorage.getItem("event1");
var getEntry2 = localStorage.getItem("event2");
var getEntry3 = localStorage.getItem("event3");
var getEntry4 = localStorage.getItem("event4");
var getEntry5 = localStorage.getItem("event5");
var getEntry6 = localStorage.getItem("event6");
var getEntry7 = localStorage.getItem("event7");
var getEntry8 = localStorage.getItem("event8");
var getEntry9 = localStorage.getItem("event9");
var getEntry10 = localStorage.getItem("event10");


var pullEvents = [getEntry1, getEntry2, getEntry3, getEntry4, getEntry5, getEntry6, getEntry7, getEntry8, getEntry9, getEntry10]

for(i = 0; i < pullEvents.length; i++) {
        entry1.text(getEntry1);
        entry2.text(getEntry2);
        entry3.text(getEntry3);
        entry4.text(getEntry4);
        entry5.text(getEntry5);
        entry6.text(getEntry6);
        entry7.text(getEntry7);
        entry8.text(getEntry8);
        entry9.text(getEntry9);
        entry10.text(getEntry10);
        
}

})

