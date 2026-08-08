/* ==========================================================
   BASIC WEBSITE PROTECTION
========================================================== */


// Disable right click

document.addEventListener(
"contextmenu",
function(e){

e.preventDefault();

});



// Disable common inspect shortcuts

document.addEventListener(
"keydown",
function(e){


if(
e.key === "F12" ||

(e.ctrlKey && e.shiftKey && e.key==="I") ||

(e.ctrlKey && e.shiftKey && e.key==="J") ||

(e.ctrlKey && e.key==="U")

){

e.preventDefault();

}


});



// Disable text selection

document.addEventListener(
"selectstart",
function(e){

e.preventDefault();

});