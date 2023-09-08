let day = "Monday";
let alarm = "none";
const wakeUp = {
  weekendAlarm: "No Alarm Needed",
  weekdayAlarm: "Get up at 07:00 a.m.",
};

if (day == "Saturday" || day == "Sunday") {
  alarm = wakeUp.weekendAlarm;
} else {
  alarm = wakeUp.weekdayAlarm;
}
console.log(alarm);
