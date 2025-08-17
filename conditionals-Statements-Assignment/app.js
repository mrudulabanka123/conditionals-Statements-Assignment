// First question
const baseTicketPrice = 1000; // base ticket price
const age = 65;
const isWeekday1 = true;
const isFestivalWeek = false;
const isStudent = false;
const hasStudentId = false;
const currentMonth = "August";
const dayOfWeek = "Monday";

const finalPrice = calculateTicketPrice(
    baseTicketPrice, age, isWeekday1, isFestivalWeek,
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

//2nd qustionlet orderamount = 450;
let orderAmount = 1200;           // order amount in ₹
let isPremium1 = true;             // premium member or not
let isWeekday = true;             // true if weekday
let orderTime = 19;               // 24-hour format (19 = 7 PM)
let usedCoupon = false;           // true if coupon already used
let day = "Sunday";               // current day
let timeOfDay = "morning";        // "morning" / "afternoon" / "evening"
let benefit = "";                 // store final benefit description

if (orderAmount > 1000 && isPremium1) {
    benefit = "Free Delivery + 15% Off";
}
else if (orderAmount >= 500 && orderAmount <= 1000 
         && isWeekday && orderTime >= 18 && orderTime <= 20 && !usedCoupon) {
    benefit = "₹100 Discount";
}
else if (orderAmount < 500 && day === "Sunday" && timeOfDay === "morning") {
    benefit = "Free Delivery";
}
else {
    benefit = "No Special Benefit";
}

console.log("Customer Benefit: " + benefit);

// 3rd Question
let loanAmount = 1200000;     // loan amount in ₹
let creditScore = 820;        // borrower credit score
let monthlyIncome = 60000;    // monthly income in ₹
let isGovEmployee = true;     // true if govt employee, else false
let month = "December";       // current month
let interestRate;             // final interest rate

if (loanAmount > 1000000 && creditScore > 800) {
    interestRate = 7;
    if (isGovEmployee) {
        interestRate -= 0.5;
    }
}
else if (creditScore >= 650 && creditScore <= 800 && monthlyIncome > 50000) {
    interestRate = 9;
    if (isGovEmployee) {
        interestRate -= 0.5;
    }
}
else if (month === "December") {
    interestRate = 10 - 1;  // Base rate 10% with 1% discount
}
else {
    interestRate = 10;      // Default rate
}

console.log("Applicable Interest Rate: " + interestRate + "%");

//4th Question
let orderValue = 2500;           // Order amount in ₹
let destination = "sameCity";    // "sameCity", "sameState", "otherState"
let isPriority = true;           // true if marked as priority
let isPremium = false;           // true if premium member
let isWeekend = true;            // true if weekend
let shippingCharge = 0;          // final shipping cost

if (destination === "sameCity" && isPriority) {
    if (orderValue > 2000) {
        shippingCharge = 0;   // free
    } else {
        shippingCharge = 50;
    }
}
else if (destination === "sameState") {
    if (orderValue > 5000) {
        shippingCharge = 0;
    } else {
        shippingCharge = 100;
    }
}
else if (destination === "otherState") {
    if (isPremium && isWeekend) {
        shippingCharge = 100;
    } else {
        shippingCharge = 200;
    }
}
else {
    shippingCharge = 150; // fallback/default if none matches
}

console.log(`Shipping Charge: ₹${shippingCharge}`);
//%th Question
let membershipType = "Silver";   // "Gold", "Silver", "Bronze"
let attendance = 18;             // number of days attended in a month
let paymentMethod = "UPI";       // "UPI", "DebitCard", "Cash"
let monthlyFee = 2000;           // base monthly fee (assumed)
let cashback = 0;                // cashback initialized
let finalAmount;                 // final payable amount

if (membershipType === "Gold" && attendance > 20) {
    cashback = 500;
}
else if (membershipType === "Silver" && attendance > 15 && paymentMethod === "UPI") {
    cashback = 300;
}
else if (membershipType === "Bronze" && attendance > 10 && paymentMethod === "DebitCard") {
    cashback = 100;
}

finalAmount = monthlyFee - cashback;

console.log(`Membership: ${membershipType}`);
console.log(`Attendance: ${attendance} days`);
console.log(`Payment Method: ${paymentMethod}`);
console.log(`Cashback: ₹${cashback}`);
console.log(`Final Payable Amount: ₹${finalAmount}`);

//6th Question
let size = "medium";  // "small", "medium", "large", "extra-large"
let addOns = ["extra shot", "syrup", "whipped cream"]; // array of selected add-ons

let basePrice = 0;
let totalBill = 0;

//  Switch case for size
switch (size) {
    case "small":
        basePrice = 100;
        break;
    case "medium":
        basePrice = 150;
        break;
    case "large":
        basePrice = 200;
        break;
    case "extra-large":
        basePrice = 250;
        break;
    default:
        console.log(" Invalid cup size selected");
        basePrice = -1;
}

if (basePrice !== -1) {
    totalBill = basePrice;

    // Add-on prices
    for (let addOn of addOns) {
        if (addOn === "extra shot") {
            totalBill += 30;
        } else if (addOn === "syrup") {
            totalBill += 20;
        } else if (addOn === "whipped cream") {
            totalBill += 25;
        } else {
            console.log(`Invalid add-on: ${addOn}`);
        }
    }

    console.log(` Coffee Size: ${size}`);
    console.log(`Add-ons: ${addOns.join(", ")}`);
    console.log(` Total Bill: ₹${totalBill}`);
}
//7th Questions
let plan = "Combo Pack";     // "Talktime", "Data Pack", "Combo Pack", "Unlimited Plan"
let rechargeDate = "2025-08-17"; // recharge date (YYYY-MM-DD)
let isSpecialWeek = true;    // true if recharge date is in special week

let validity = 0;

// Switch case for plan validity
switch (plan) {
    case "Talktime":
        validity = 28;  // Talktime validity in days
        break;
    case "Data Pack":
        validity = 21;
        break;
    case "Combo Pack":
        validity = 56;
        break;
    case "Unlimited Plan":
        validity = 84;
        break;
    default:
        console.log("Invalid plan selected");
        validity = -1;
}

//Add bonus validity if it’s a special week
if (validity !== -1) {
    if (isSpecialWeek) {
        validity += 2;
    }

    console.log('Plan: ${plan}');
    console.log(`Recharge Date: ${rechargeDate}`);
    console.log(`Remaining Validity: ${validity} days`);
}
//8th Question
let category = "Breakfast";   // "Breakfast", "Lunch", "Dinner"
let item = "Dosa";            // sub-item name
let quantity = 3;             // number of items ordered

let price = 0;
let bill = 0;

switch (category) {
    case "Breakfast":
        switch (item) {
            case "Idli":
                price = 30;
                break;
            case "Dosa":
                price = 50;
                break;
            case "Paratha":
                price = 40;
                break;
            default:
                console.log("Item not Available");
                price = -1;
        }
        break;

    case "Lunch":
        switch (item) {
            case "Thali":
                price = 120;
                break;
            case "Fried Rice":
                price = 100;
                break;
            case "Paneer Curry":
                price = 150;
                break;
            default:
                console.log("Item not Available");
                price = -1;
        }
        break;

    case "Dinner":
        switch (item) {
            case "Biryani":
                price = 180;
                break;
            case "Roti":
                price = 20;
                break;
            case "Dal Tadka":
                price = 130;
                break;
            default:
                console.log("Item not Available");
                price = -1;
        }
        break;

    default:
        console.log("Category not Available");
        price = -1;
}

if (price !== -1) {
    bill = price * quantity;
    console.log(`Category: ${category}`);
    console.log(`Item: ${item}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Price per item: ₹${price}`);
    console.log(`Final Bill: ₹${bill}`);
}
//9th Question
let bookCategory = "Fiction";   // "Fiction", "Non-Fiction", "Reference", "Magazine"
let overdueDays = 6;            // number of overdue days
let isStudent1 = true;           // true if user is a student

let finePerDay = 0;
let totalFine = 0;

switch (bookCategory) {
    case "Fiction":
        finePerDay = 5;
        break;
    case "Non-Fiction":
        finePerDay = 7;
        break;
    case "Reference":
        finePerDay = 10;
        break;
    case "Magazine":
        finePerDay = 3;
        break;
    default:
        console.log("Invalid book category");
        finePerDay = -1;
}

if (finePerDay !== -1) {
    totalFine = finePerDay * overdueDays;

    //  Apply 50% discount for students
    if (isStudent1) {
        totalFine = totalFine / 2;
    }

    console.log(`Book Category: ${bookCategory}`);
    console.log(`Overdue Days: ${overdueDays}`);
    console.log(`Fine per Day: ₹${finePerDay}`);
    console.log(`Total Fine: ₹${totalFine}`);
}
// 10th Question
let categorys = "VIP";        // "Standard", "Premium", "VIP", "Balcony"
let isWeekend2 = true;        // true if booking on weekend
let ticketPrice = 0;
let finalAmounts = 0;

switch (categorys) {
    case "Standard":
        ticketPrice = 150;
        break;
    case "Premium":
        ticketPrices = 250;
        break;
    case "VIP":
        ticketPrices = 400;
        break;
    case "Balcony":
        ticketPrices = 300;
        break;
    default:
        console.log(" Invalid Category");
        ticketPrices = -1;
}

if (ticketPrices !== -1) {
    //  Weekend surcharge
    if (isWeekend2) {
        finalAmounts = ticketPrices + (ticketPrices * 0.20); // add 20%
    } else {
        finalAmounts = ticketPrices;
    }

    console.log(` Category: ${categorys}`);
    console.log(`Base Price: ₹${ticketPrices}`);
    console.log(`Booking Day: ${isWeekend2 ? "Weekend" : "Weekday"}`);
    console.log(` Final Amount: ₹${finalAmounts}`);
}

