var totalBeat = 0;
$(document).ready(function(){
  console.log("blah");
  $('.beat').on('click', function(){
    $(".instrumentBoxScrambled").css({"border-color": "rgba(0, 0, 0, 0.3)"});
    if(totalBeat + parseFloat(this.id) <= 1)
    {
      totalBeat += parseFloat(this.id);

      if(this.id == "1")
      {
        console.log("blah");
        $("#notes").append(
          "<div class='wholeNote'><img class='wholeNoteImage' src='images/wholeNote.png'></div>");
      }
      else if(this.id == "0.5")
      {
        $("#notes").append(
          "<div class='halfNote'><img class='halfNoteImage' src='images/halfNote.png'></div>");
      }
      else if(this.id == "0.25")
      {
        $("#notes").append(
          "<div class='quarterNote'><img class='quarterNoteImage' src='images/quarterNote.png'></div>");
      }
      else if(this.id == "0.125")
      {
        $("#notes").append(
          "<div class='eighthNote'><img class='eighthNoteImage' src='images/eighthNote.png'></div>");
      }
      else if(this.id == "0.0625")
      {
        $("#notes").append(
          "<div class='sixteenthNote'><img class='sixteenthNoteImage' src='images/sixteenthNote.png'></div>");
      }
      console.log($("#" + this.id).parent());
      $(this).parent().css({"border-color": "green"});
    }
    else {
      $(this).parent().css({"border-color": "red"});
    }
    console.log("total: " + totalBeat);
    //$(this).addClass('note');
    //console.log("has note: " + $(this).hasClass('note'));
  });

  $("#reset").on("click", function(){
      $("#notes").html("");
      $(".instrumentBoxScrambled").css({"border-color": "rgba(0, 0, 0, 0.3)"});
      totalBeat = 0;
  });
});
