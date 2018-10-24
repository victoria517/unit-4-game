

var losses = 0;
var wins = 0;
var previous = 0;
        

var startGame = function(){    

        $(".crystals").empty();

        var images = [
        "assets/images/Blue.png",
        "assets/images/Gem-PNG-Picture.png",
        "assets/images/smallyellow.png",
        "assets/images/Green.png"];

        random_result = Math.floor(Math.random() * 101 ) + 19;

        $("#ranN").html('Random Number: ' + random_result);

        for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
        });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })

        $(".crystals").append(crystal);
    }

    $(".col-5").html("Total Score: " + previous);
};

    $(document).click(function(){
      $(".col-5").animate({fontSize: '3em'}, "slow");
      $(".col-5").animate({fontSize: '1em'}, "slow");
})

    $(document).click(function(){
        $("#ranN").animate({fontSize: '3em'}, "slow");
    })

startGame();    

$(document).on('click', ".crystal", function() {
    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $(".col-5").html("Total Score: " + previous);

    $("#ranN").html('Random Number: ' + random_result);

    if(previous > random_result) {
        alert("You Lost!");
        losses++;
        previous = 0;
        $(".col-3").html("Losses: " + losses);
        $(".col-3").animate({fontSize: '3em'}, "slow");
        $(".col-3").animate({fontSize: '1em'}, "slow");
        $("#ranN").animate({fontSize: '1em'}, "slow");
        startGame();
    }
    else if(previous === random_result) {
        alert("You Win!");
        wins++;
        $(".col-4").html("Wins: " + wins);
        $(".col-4").animate({fontSize: '3em'}, "slow");
        $(".col-4").animate({fontSize: '1em'}, "slow");
        $("#ranN").animate({fontSize: '1em'}, "slow");
        previous = 0;
        startGame();
    };

})
    