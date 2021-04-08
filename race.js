let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if(runnerAge > 18 && registeredEarly == true) {
  raceNumber += 1;
  console.log(`raceNumber: ${raceNumber}`)
  console.log(`Race Time is at 9:30 am`)
} else if (runnerAge > 18 && registeredEarly == false) {
  console.log(`raceNumber: ${raceNumber}`)
  console.log(`Race Time is at 11:00 am`)
} else if (runnerAge < 18) {
  console.log(`raceNumber: ${raceNumber}`)
  console.log(`Youth registrants run at 12:30 pm`)
} else {
  console.log(`Kindly see the registration desk.`)
}
