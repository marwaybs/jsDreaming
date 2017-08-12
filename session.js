var totalReps = 4;
var rep = 0;
var maxTime = 30;
var minTime = 45;
var wanderTextList = ["Did what you were thinking of change?", "Is there another way to see it?", "Do you feel any different?"];



function updateSlowAnimation(time){
  sideToSideIteration = (Math.ceil((time-2)/4))*2;
  sideToSideTime = 2*sideToSideIteration
  sideToSideDelay = 2 + sideToSideTime;
  fadeOutDelay = sideToSideDelay + 2
  //Apply class before changing the css class
  iterString = "1, 1, "+sideToSideIteration+", 1, 1"
  delayString = "0s, 1s, 2s, "+sideToSideDelay+"s, "+fadeOutDelay+"s";
  // console.log(iterString, delayString);
  $(".blsAnimation").css({"animation-iteration-count": iterString,"animation-duration": "1s, 1s, 2s, 2s, 1s","animation-delay": delayString});
}


function updateFastAnimation(time) {
  sideToSideIteration = (Math.ceil((time-3)/4))*4;
  sideToSideTime = sideToSideIteration
  sideToSideDelay = 1.5 + sideToSideTime;
  fadeOutDelay = sideToSideDelay + 2
  //Apply class before changing the css class
  iterString = "1, 1, "+sideToSideIteration+", 1, 1"
  delayString = "0s, 1s, 1500ms, "+sideToSideDelay+"s, "+fadeOutDelay+"s";
  // console.log(iterString, delayString);
  $(".blsAnimation").css({"animation-iteration-count": iterString,"animation-duration": "1s, 500ms, 1s, 1s, 1s","animation-delay": delayString});
}

function restartAnimation(speed, time) {
    console.log('animation');
  if (speed == "slow"){
    updateSlowAnimation(time);
  }else{
    updateFastAnimation(time);
  }
  var circle = $('#bls'),
  newone = circle.clone(true);
  circle.before(newone);
  circle.remove();
};


function fade(){
  var wanderText = $('#wanderText'),
  newone = wanderText.clone(true);
  wanderText.before(newone);
  wanderText.remove();
};

function blsRep(){
  if (rep >= totalReps){
          $("#wanderText").text("Session is finished");
          $("#wanderText").css("opacity", "1");

  }else{
    var time = Math.random() * (maxTime - minTime) + minTime;
    time = 2 * Math.round(time / 2); //time needs to be even for animation to work correctly

    console.log(time);
    restartAnimation("fast", time);

    setTimeout(function(){
      console.log(wanderTextList[Math.floor(Math.random()*wanderTextList.length)]);
      $("#wanderText").text(wanderTextList[Math.floor(Math.random()*wanderTextList.length)]);
      fade();

    }, (time+3)*1000);

    setTimeout(function(){
      rep++
      blsRep();
    }, (time+6)*1000);
  }
}

$(function() {
    $('#bls').addClass('blsAnimation');
    console.log("class added");
    blsRep();
});