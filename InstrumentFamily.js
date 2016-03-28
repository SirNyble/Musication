
var parent = "";
var numCorrect = 0;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    parent = document.getElementById(ev.target.id).parentNode.id;
    $("#" + parent).css('border', '5px solid rgba(0, 0, 0, 0.3)');
}
// When the draggable p element leaves the droptarget, reset the DIVS's border style
function dragLeave(ev) {

  //ev.target.style.border = "5px solid rgba(0, 0, 0, 0.3)";
}
//Todo: figure out exactly what ev is
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var answerArray = ["windAnswer1","windAnswer2","windAnswer3","windAnswer4",
                       "brassAnswer1","brassAnswer2","brassAnswer3","brassAnswer4",
                       "stringAnswer1", "stringAnswer2", "stringAnswer3", "stringAnswer4",
                       "percussionAnswer1","percussionAnswer2","percussionAnswer3","percussionAnswer4"];

    //Check if image is there!!
    var parentDiv = $("#" + ev.target.id).parent();
    //allow for dropping in the box pool!!
    if( (data != ev.target.id) && (answerArray.indexOf(ev.target.id) > -1) )
    {

      var draggedFamilyClass = $("#" + data).attr('class');
      var divFamilyClass = ev.target.className;

      //if($(divFamilyClass).attr("class")."instrumentBox"))
      console.log("DraggedFamilyClass: " + draggedFamilyClass);
      console.log("divFamilyClass: " + divFamilyClass);
      if(divFamilyClass.indexOf(draggedFamilyClass) > -1  && divFamilyClass.indexOf("instrumentBox") > -1 )
      {
        $("#" + ev.target.id).css("border", "5px solid green");
        console.log("BLAH: " + $("#" + data).attr("draggable"));
         $("#" + data).attr("draggable", "False");
        console.log("Correct family!");
        $("#neutral").hide();
        $("#wrong").hide();
        $("#correct").show();
        numCorrect++;
        if(numCorrect == 4)
        {
          console.log("AYYAYA");
          //$(body).modal("<img src='images/HCI.png' style=''/>");
          $("#container").modal({opacity:80,overlayCss: {backgroundColor:"#fff"}});
        }
      }
      else {
        $("#" + ev.target.id).css("border", "5px solid red");
        console.log("Wrong family");
        $("#neutral").hide();
        $("#wrong").show();
        $("#correct").hide();
      }
      ev.target.appendChild(document.getElementById(data));
      //console.log('Children size: ' + $("#" + ev.target.id).children().size());
    }
    else
    {
      var parent = $("#" + data).parent().attr("id");
      var draggedFamilyClass =  $("#" + data).parent().attr("class");
      var divFamilyClass = ev.target.className;
      console.log("dragged: " + draggedFamilyClass);
      console.log("div: " +  divFamilyClass);
      //console.log("Same movement: " + draggedFamilyClass);
      //this.indexOf(s) > -1
      if(draggedFamilyClass.indexOf(divFamilyClass) > -1  )
      {
        $("#" + parent).css("border", "5px solid green");
        console.log("Correct family!");
        $("#neutral").hide();
        $("#wrong").hide();
        $("#correct").show();
        numCorrect++;
      }
      else {
        $("#" + parent).css("border", "5px solid red");
        console.log("Wrong f bvamily");
        $("#neutral").hide();
        $("#wrong").show();
        $("#correct").hide();
      }
    }

}
