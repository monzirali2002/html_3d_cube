
// set the intered angeler
var step = 5;
function setstep(input_step) {
  step = Number(input_step);
  console.log(step);
}



// on page loaded excute function

$(document).ready(function(){
  const div = $(".contener");
  var rotateY = 30;
  var rotateX = -30;
  
  rotate()
  anser()
  // set cube posetion
  
  function anser() {
    var str = "Rotate X : " + rotateX + " , Rotate Y : " + rotateY
    $("span").last().html(str)
  }
  
  // rotate in prisafice angilar
  
  function rotate() {
    div.css({ transform: "rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)" })
  };

  // set the angler in one step
  
  $("#top").click(function() {
    rotateX -= step;
    rotateX %= 360
    rotate();
    anser()

  });

  // set event in all buttons 
  
  $("#bottom").click(function() {
    rotateX += step;
    rotateX %= 360;
    rotate();
    anser()
  });


  $("#right").click(function() {
    rotateY -= step;
    rotateY %= 360;
    rotate();
    anser()
  });


  $("#left").click(function() {
    rotateY += step;
    rotateY %= 360;
    rotate();
    anser()
  })
  
  // reset the cube to original posetion
  
  $("#reset").click(function() {
    rotateX = 0;
    rotateY = 0;
    rotate();
    anser()
  })
})
