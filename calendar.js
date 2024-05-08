// Array used to generate entries for tables
var volunteerOpenings = new Array();
volunteerOpenings[1] = "<br>0/5 Positions filled.";
volunteerOpenings[2] = "<br>2/5 Positions filled.";
volunteerOpenings[3] = "<br>Repair shop closed.";
volunteerOpenings[4] = "<br>3/5 Positions filled.";
volunteerOpenings[5] = "<br>4/5 Positions filled.";
volunteerOpenings[6] = "<br>1/5 Positions filled.";
volunteerOpenings[7] = "<br>Repair shop closed.";
volunteerOpenings[8] = "<br>4/5 Positions filled.";
volunteerOpenings[9] = "<br>Repair shop closed.";
volunteerOpenings[10] = "<br>5/5 Positions filled";
volunteerOpenings[11] = "<br>Repair shop closed.";
volunteerOpenings[12] = "<br>Repair shop closed.";
volunteerOpenings[13] = "<br>Repair shop closed.";
volunteerOpenings[14] = "<br>5/5 Positions filled.";
volunteerOpenings[15] = "<br>5/5 Positions filled.";
volunteerOpenings[16] = "<br>1/5 Positions filled.";
volunteerOpenings[17] = "<br>Repair shop closed.";
volunteerOpenings[18] = "<br>2/5 Positions filled.";
volunteerOpenings[19] = "<br>Repair shop closed.";
volunteerOpenings[20] = "<br>4/5 Positions filled.";
volunteerOpenings[21] = "<br>3/5 Positions filled.";
volunteerOpenings[22] = "<br>Repair shop closed.";
volunteerOpenings[23] = "<br>4/5 Positions filled.";
volunteerOpenings[24] = "<br>Repair shop closed.";
volunteerOpenings[25] = "<br>5/5 Positions filled.";
volunteerOpenings[26] = "<br>5/5 Positions filled.";
volunteerOpenings[27] = "<br>Repair shop closed.`";
volunteerOpenings[28] = "<br>2/5 Positions filled.";
volunteerOpenings[29] = "<br>2/5 Positions filled.";
volunteerOpenings[30] = "<br>3/5 Positions filled.";
volunteerOpenings[31] = "<br>1/5 Positions filled.";

/* Set the date displayed in the calendar */
var thisDay = new Date();

/* Write the calendar to the element with the id calendar */
document.getElementById("volunteerCalendar").innerHTML = createCalendar(thisDay);

/* Function to generate the calendar table */
function createCalendar(calDate) {
   var calendarHTML = "<table id='volunteerTable'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

/* Function to write the calendar caption */
function calCaption(calDate) {
   // monthName array contains the list of month names
   var monthName = ["Jan", "Feb", "Mar", "Apr", 
                     "May", "Jun", "Jul", "Aug", "Sep", 
                     "Oct", "Nov", "Dec"];

   // Determine the current month
   var thisMonth = calDate.getMonth();

   // Determine the current year
   var thisYear = calDate.getFullYear();

   // Write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";

}

/* Function to write a table row of weeday abbreviations */
function calWeekdayRow() {
   // Array of weekday abbreviations
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   // Loop through the dayName array 
   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calednar_weekdays'>" + dayName[i] + "</th>";
   }

   rowHTML += "</tr>";
   return rowHTML;
}

/* Function to calculate the number of days in the month */
function daysInMonth(calDate) {
   // Array of days in each month
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   // Extract the four digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 29;
      }
   }

   // Return the number of days for the current month
   return dayCount[thisMonth];
}

/* Function to write table rows for each day of the month */
function calDays(calDate) {
   // Determine the starting day of the month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

   // Write blank cells preceding the starting day
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }

   // Write cells for each day of the month
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   for (var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) htmlCode += "<tr>";
      if (i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + volunteerOpenings[i] + "</td>";
      } else {
         htmlCode += "<td class='calendar_dates'>" + i + volunteerOpenings[i] + "</td>";
      }
      if (weekDay === 6) htmlCode += "</tr>";
   }

   return htmlCode;
}
