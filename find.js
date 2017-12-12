var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var style = document.getElementsByTagName("style");

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    x = x1 - x0;
    y = y1 - y0;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

var findIt = function(e) {
    dist = distance(targetX, targetY, e.clientX, e.clientY);
    max = distance(targetX, targetY, boxWidth, boxHeight);
    ratio = dist / max * 100;
    if (ratio < 20) {
        style.innerHTML = style.innerHTML + "\n"
    };
    else if (ratio < 40) {
        
    };
    else if (ratio < 60) {
        
    };
    else if (ratio < 80) {
        
    };
    else {

    };
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);