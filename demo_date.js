// gets right now
const now = new Date();

// set a specific date and time
// month counting start with zero!
const randomDate = new Date(2015, 3, 12, 6, 25, 58);

// set a specific date - time set to midnight
const win95Launch = new Date(1995, 7, 24);

console.log(randomDate);
console.log(win95Launch);

/*------ Setting Date Values -------*/
now.setFullYear(2014); // sets year
now.setMonth(3); // April (counting starts at zero!)
now.setDate(4); // sets day

now.setHours(4); // 24 hour clock
now.setMinutes(24);
now.setSeconds(46);

console.log(now);

/*----- Getting Date Values ------*/

// all of the set functions have get
console.log(now.getMonth());

// milliseconds since 1 Jan 1970
console.log(now.getTime());

// day of the week (Sunday = 0)
console.log(now.getDay());

const demoDate = new Date();
demoDate.setMonth(0);

console.log(`Day of week: ${demoDate.getDay()}`); // 0 = Sunday, 1 = Monday, ...
