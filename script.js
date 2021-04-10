$(document).ready(function() {
  // save button \\\\
  $(".saveBtn").on("click", function() {
    // get any nearby values \\
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // localStorage that i can save to \\
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    // grab the local hours i can use \\
    var currentHour = moment().hours();

    // looping over the time blocks that can split in space \\
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // the time has past did it work  like the X=men movie still like dead pool \\
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // how to update the setInterval \\
  var interval = setInterval(hourUpdater, 10000);

  // this is the storage and discription that will be by the hour \\
  $("#hour-1 .description").val(localStorage.getItem("hour-6"));
  $("#hour-2 .description").val(localStorage.getItem("hour-7"));
  $("#hour-3 .description").val(localStorage.getItem("hour-8"));
  $("#hour-4 .description").val(localStorage.getItem("hour-9"));
  $("#hour-5 .description").val(localStorage.getItem("hour-10"));
  $("#hour-6 .description").val(localStorage.getItem("hour-11"));
  $("#hour-7 .description").val(localStorage.getItem("hour-12"));
  $("#hour-8 .description").val(localStorage.getItem("hour-13"));
  $("#hour-9 .description").val(localStorage.getItem("hour-14"));
  $("#hour-10 .description").val(localStorage.getItem("hour-14"));
  $("#hour-11 .description").val(localStorage.getItem("hour-14"));
  $("#hour-12 .description").val(localStorage.getItem("hour-14"));
  $("#hour-1 .description").val(localStorage.getItem("hour-14"));
  $("#hour-2 .description").val(localStorage.getItem("hour-14"));

  // this will be the time of current and day text \\
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});