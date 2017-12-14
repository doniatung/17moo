var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var style = document.getElementsByTagName("style")[0];

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    x = x1 - x0;
    y = y1 - y0;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

//popup function!

var popup = function(e) {
    alert("You found the cow!");
};

var findIt = function(e) {
    dist = distance(targetX, targetY, e.clientX, e.clientY);
    max = distance(targetX, targetY, boxWidth, boxHeight);
    console.log(dist);
    console.log(style.innerHTML);
    ratio = dist / max * 100;
    if (ratio < 10) {
        style.innerHTML = style.innerHTML + "body {background-color: white;} div {cursor:pointer;}";
        document.addEventListener("click", popup);
    }
    else if (ratio < 40) {
        style.innerHTML = style.innerHTML + "body {background-color: lightcyan;} div {cursor:default;}";
        document.removeEventListener("click", popup);
    }
    else if (ratio < 40) {
        style.innerHTML = style.innerHTML + "body {background-color: paleturquoise;} div {cursor:default;}";
        document.removeEventListener("click", popup);
    }
    else if (ratio < 60) {
        style.innerHTML = style.innerHTML + "body {background-color: turquoise;} div {cursor:default;}";
        document.removeEventListener("click", popup);
    }
    else if (ratio < 80) {
        style.innerHTML = style.innerHTML + "body {background-color: mediumturquoise;} div {cursor:default;}";
        document.removeEventListener("click", popup);
    }
    else {
        style.innerHTML = style.innerHTML + "body {background-color: lightseagreen;} div {cursor:default;}";
        document.removeEventListener("click", popup);
    }
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
