$(function () {
  // added code to displat the current date in header
  // function currentTime() {
  var realTime = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A");
  console.log(realTime);
  $("#currentDay").text(realTime);
  // };
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val()
    console.log(value);
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, value);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $('.time-block').ready(function () {
    // Get the current hour
    var currentHour = dayjs().hour();

    // Iterate through each time block element
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('data-hour'));
      console.log(blockHour, currentHour)

      // Compare the block hour with the current hour
      if (blockHour < currentHour) {
        // Add class for past time block
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        // Add class for present time block
        $(this).addClass('present');
      } else {
        // Add class for future time block
        $(this).addClass('future');
      }
    });
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $("#hour-9  .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
