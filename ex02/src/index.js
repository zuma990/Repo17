// Only change code below this line
const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
function myWeek(days) {
    const week = ['SAT', 'SUN'];

    week.push(...days);
    return week;
}
// Only change code above this line
console.log(myWeek(workDays));
module.exports = myWeek;