// Get the calendar div
const calendar = document.getElementById("calendar");

// Get current month and year
const today = new Date();
const month = today.getMonth(); // 0 = January, 1 = February...
const year = today.getFullYear();

// Get number of days in this month
const daysInMonth = new Date(year, month + 1, 0).getDate();

// Create the days
for (let day = 1; day <= daysInMonth; day++) {
  const dayElement = document.createElement("div");
  dayElement.textContent = day; // number of the day
  dayElement.style.border = "1px solid #ccc"; // simple border to see the day
  dayElement.style.display = "inline-block";
  dayElement.style.width = "40px";
  dayElement.style.height = "40px";
  dayElement.style.textAlign = "center";
  dayElement.style.margin = "2px";
  dayElement.style.lineHeight = "40px";
  
  calendar.appendChild(dayElement);
}
  dayElement.addEventListener("click", function() {
    const plan = prompt("Write your plan for this day:");
    if (plan) {
      dayElement.textContent = day + "\n" + plan;
    }
  });
const savedPlan = localStorage.getItem("plan-" + day);
if (savedPlan) {
  dayElement.textContent = day + "\n" + savedPlan;
}
