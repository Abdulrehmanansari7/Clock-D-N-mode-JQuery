function clock() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var today = new Date();

  $("#Date").html(
    dayNames[today.getDay()] +
      " " +
      today.getDate() +
      " " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear()
  );

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 12 ? "AM" : "PM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  $("#hours").html(h);
  $("#min").html(m);
  $("#sec").html(s);
}

$("#toggleButton").on("click", function () {
  $("body").toggleClass("day-mode night-mode");
});

$("body").addClass("night-mode");

var inter = setInterval(clock, 400);