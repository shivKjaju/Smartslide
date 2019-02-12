function on(){
    var one = document.getElementById("overlay");
    one.style.display = "block";
}

function off(){
    var two = document.getElementById("overlay");
    two.style.display = "none";
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 4000);
}

function showPage() {
    // document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("CvVid").style.display = "none";
    document.body.style.backgroundColor = "black";
}

