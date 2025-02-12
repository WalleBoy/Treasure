var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Надзвичайно гаряче!";
    } else if (distance < 20) {
        return "Справді гаряче";
    } else if (distance < 40) {
        return "Гаряче";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Справді холодно";
    } else {
        return "Замерзаємо!";
    }
};

var width = 400;
var height = 400;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;

var distance = getDistance(event, target);
var distanceHint = getDistanceHint(distance);
$("#distance").text(distanceHint);

if (distance < 8) {
    alert("Знайшов скарб за " + clicks + " кліків!");
}
});