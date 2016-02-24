$(document).ready(function() {
  //Load Audio
  $(".sounds").each(function(){
    $(this).trigger('load');
  })

  //Register key press on Piano Note
  $('.key').mousedown(function(){
    //Load appropriate file based on key pressed
    var id = $(this).attr("id");
    $("#sound-" + id).prop("currentTime",0);
    $("#sound-" + id).trigger("play");

    //Remove up state to show key pressed visually
    $(this).removeClass("up");
  });

  //On Mouse up we raise the keys
  $(this).mouseup(function(){
    $('.key').addClass("up");
  });

  //Possible to drag in which case we ensure all keys are up
  $(this).on("dragend",function(){
    $('.key').addClass("up");
  });
});
