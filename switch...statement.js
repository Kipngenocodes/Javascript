/*
switch (expression) {
   case condition 1: statement(s)
   break;
   
   case condition 2: statement(s)
   break;
   ...
   
   case condition n: statement(s)
   break;
   
   default: statement(s)
}
*/

// Example of switch statement

var fruit = "Banana";

switch (fruit) {
    case "Bananat":
        console.log("Banana is a popular fruit");
        break;
    case "Apple":
        console.log("Apple is a healthy fruit");
        break;
    case "Orange":
        console.log("Orange is a sweet fruit");
        break;
    case "Papaya", "Pineapples":
        console.log("Papayas and Pineapples are popular fruits");
        break;
    case "Banana":
        console.log("Banana is a popular fruit");
        break;
    case "Mango fruit":
        console.log("Mango is a tropical fruit");
        break;
    default:
        console.log("I don't know this fruit");
}
