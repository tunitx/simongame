var buttonColors = ["red", "yellow", "blue", "green"];
var gamePattern = [];
var userClickedPattern  = [];
var level = 0;
var started = false;


$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
// console.log(userChosenColor);
userClickedPattern.push(userChosenColor);
// $("#" + userChosenColor).fadeOut(100).fadeIn(100);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length - 1);

});

$(document).keypress(function() {
    if (started=== false) {
  
      //3. The h1 title starts o+ ut saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  $(document).tap(function(){
    if (started=== false) {
  
        //3. The h1 title starts o+ ut saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }

  });
  
// $(document).on("keypress", function(event){
//     // console.log(event.key);
//     nextSequence();
// })


function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length=== gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },700);
        }
    }
    else {
        console.log("fail");
        $("h1").text("Game over, Press any key to restart")
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },1000);
        startOver();
    }
}

function startOver(){
    level= 0;
    started = false;
    gamePattern =[];
}


function nextSequence() {
    level++;
    userClickedPattern = [];
    $("#level-title").text("level "+ level);
    var randomnumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomnumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    
}
function playSound(x) {
    var audio = new Audio("sounds/"+ x +".mp3");
    audio.play();
    
}

function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColor).removeClass("pressed");

    },100);
}

