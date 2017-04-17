const moment = require('moment');

console.log(moment().format());

// how unix timestamps work
// January 1st, 1970 @ 12:00am -> 0
// January 1st, 1970 @ 12:01am -> 60
// January 1st, 1970 @ 11:59am -> -60

// create timestamp (now)
const now = moment();
console.log('Current timestamp:', now.unix()); // number of seconds since January 1st, 1970

// convert to timestamp object
const timestamp = 1492198444;
const currentMoment = moment.unix(timestamp);
console.log('Current moment (converted from timestamp):', currentMoment.format());

// format timestamps (Display)
// see https://momentjs.com/docs

// Friday, April 14th 2017, 1:34:04 pm
console.log('Current moment (formatted nicely):', currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// Apr 14, 2017 @ 1:34pm
console.log('Current moment (formatted nicely 2):', currentMoment.format("MMM D, YYYY @ h:mma"));

// April 14th, 2017 @ 1:34 PM
console.log('Current moment (formatted nicely 3):', currentMoment.format("MMMM Do, YYYY @ h:mm A"));

