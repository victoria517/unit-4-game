$(document).ready(function() {


var randomNum;
var numberArray = [];
var losses;
var wins;

for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var crystal = $("img");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
    });
// $(".crystals").append(crystal);
}
})