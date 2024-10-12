function updateClock() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const now = new Date();

  // Format Date
  $("#Date").text(`${dayNames[now.getDay()]} ${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`);

  // Format Time
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const period = hours < 12 ? "AM" : "PM";
  hours = String(hours % 12 || 12).padStart(2, '0'); // Convert to 12-hour format

  $("#hours").text(hours);
  $("#min").text(minutes);
  $("#sec").text(seconds);
}

$("#toggleButton").on("click", () => {
  $("body").toggleClass("day-mode night-mode");
});

// Set initial mode to night-mode
$("body").addClass("night-mode");

// Update clock every second
setInterval(updateClock, 1000);