
// Display different  date formats using JavaScript
    var date = new Date();
    var date1 = date.toLocaleDateString();
    var date2 = date.toLocaleTimeString();  
    var date3 = date.toLocaleString();
    var date4 = date.toDateString();
    var date5 = date.toTimeString();
    var date6 = date.toUTCString();
    var date7 = date.toISOString();
    var date8 = date.toGMTString();
    var date9 = date.toString();
    var date10 = date.toJSON();
    var date11 = date.valueOf();
    var date12 = date.getTime();
    var date13 = date.getFullYear();
    var date14 = date.getMonth();    
    var date15 = date.getDate();
    var date16 = date.getHours();
    var date17 = date.getMinutes(); 
    var date18 = date.getSeconds();
    var date19 = date.getMilliseconds();
    var date20 = date.getDay();
    var date21 = date.getTimezoneOffset();
    var date22 = date.getUTCFullYear();
    var date23 = date.getUTCMonth();    
    var date24 = date.getUTCDate();
    var date25 = date.getUTCHours();
    var date26 = date.getUTCMinutes(); 
    var date27 = date.getUTCSeconds();
    var date28 = date.getUTCMilliseconds();
    var date29 = date.getUTCDay();
    var date30 = date.getUTCDate();
    var date31 = date.getUTCMonth();
    var date32 = date.getUTCFullYear();
    var date33 = date.getTimezoneOffset();
    var date34 = date.getTimezoneOffset();

    // Display the date formats in the console
    console.log("Date in Locale Format: " + date1);
    console.log("Time in Locale Format: " + date2);
    console.log("Date and Time in Locale Format: " + date3);
    console.log("Date in Locale Format: " + date4);
    console.log("Time in Locale Format: " + date5);
    console.log("Date and Time in Locale Format: " + date6);
    console.log("Date in Locale Format: " + date7);
    console.log("Time in Locale Format: " + date8);
    console.log("Date and Time in Locale Format: " + date9);
    console.log("Date in Locale Format: " + date10);
    console.log("Time in Locale Format: " + date11);
    console.log("Date and Time in Locale Format: " + date12);
    console.log("Date in Locale Format: " + date13);
    console.log("Time in Locale Format: " + date14);
    console.log("Date and Time in Locale Format: " + date15);
    console.log("Date in Locale Format: " + date16);
    console.log("Time in Locale Format: " + date17);
    console.log("Date and Time in Locale Format: " + date18);
    console.log("Date in Locale Format: " + date19);
    console.log("Time in Locale Format: " + date20);
    console.log("Date and Time in Locale Format: " + date21);
    console.log("Date in Locale Format: " + date22);    
    console.log("Time in Locale Format: " + date23);
    console.log("Date and Time in Locale Format: " + date24);
    console.log("Date in Locale Format: " + date25);
    console.log("Time in Locale Format: " + date26);    
    console.log("Date and Time in Locale Format: " + date27);
    console.log("Date in Locale Format: " + date28);
    console.log("Time in Locale Format: " + date29);    
    console.log("Date and Time in Locale Format: " + date30);    
    console.log("Date in Locale Format: " + date31);    
    console.log("Time in Locale Format: " + date32);    
    console.log("Date and Time in Locale Format: " + date33);    
    console.log("Date in Locale Format: " + date34);    

// create a new date object and customize it
var date1 = new Date();
date1.setFullYear(2023);
date1.setMonth(11); // December (0-based index)
date1.setDate(25);
date1.setHours(12);
date1.setMinutes(30);
date1.setSeconds(45);
date1.setMilliseconds(0);
// Display the customized date
console.log("Customized Date: " + date1.toString());

// Generate next 10 dates from today
var today = new Date(); 
var nextDates = [];
for (var i = 1; i <= 10; i++) {
    var nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    nextDates.push(nextDate);
}

// Display the next 10 dates
console.log("Next 10 Dates:");
nextDates.forEach(function(date) {
    console.log(date.toString());
});