// Example usage
const baseTicketPrice = 1000; // base ticket price
const age = 65;
const isWeekday = true;
const isFestivalWeek = false;
const isStudent = false;
const hasStudentId = false;
const currentMonth = "August";
const dayOfWeek = "Monday";

const finalPrice = calculateTicketPrice(
    baseTicketPrice, age, isWeekday, isFestivalWeek,
    isStudent, hasStudentId, currentMonth, dayOfWeek
);


function calculateTicketPrice(basePrice, age, isWeekday, isFestivalWeek, isStudent, hasStudentId, currentMonth, dayOfWeek) {
    let discount = 0;

    // Senior citizen discount
    if (age > 60 && isWeekday && !isFestivalWeek) {
        discount = 30;
    }
    // Student discount
    else if (age < 25 && isStudent && hasStudentId && currentMonth.toLowerCase() !== "december") {
        discount = 20;
    }
    // Sunday discount (only if no other discount applied)
    else if (dayOfWeek.toLowerCase() === "sunday") {
        discount = 10;
    }

    const finalPrice = basePrice - (basePrice * discount / 100);
    return finalPrice;
}
console.log("Final Ticket Price:", finalPrice);