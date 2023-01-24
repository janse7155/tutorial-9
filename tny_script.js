"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Jaedan
   Date:  01/24/23 

*/

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

/* Display the time left until New Year's Eve*/
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

/*Store the current date and time */
var currentDay = new Date("May 23, 2018 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/*Display the current date and time*/
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/*Calculate the days until January 1st*/
var newYear = new Date("January 1, 2018");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);

/*Display the time until New Year's Eve*/
document.getElementById("days").textContent = Math.floor(daysLeft); 