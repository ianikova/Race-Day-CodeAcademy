let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 20;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`${raceNumber}, you will race at 9:30 am`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`${raceNumber}, you will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber}, you will race at 12:30 pm`);
} else if (runnerAge === 18) {
  console.log("Please see registration desk");
}
