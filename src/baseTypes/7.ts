/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Monday = "Working day", 
  Tuesday = "Working day", 
  Wednesday = "Working day", 
  Thursday = "Working day", 
  Friday = "Working day", 
  Saturday = 0,
  Sunday = 0
}
 
function Weekend(isWeekend:DayWeek){
 if(isWeekend === 0){
  return "Day off"
 } else {
  return "Working day"
 }
}