getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 5;
        break;
    }
  }
  
  getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  getIdealSleepHours = idealHours => idealHours * 7;
  
  calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours('6');
  
    console.log({
        'actualSleepHours': actualSleepHours,
        'idealSleepHours': idealSleepHours
    });
    
    if(actualSleepHours == idealSleepHours) {
      console.log("==")
    } else if(actualSleepHours > idealSleepHours) {
      console.log("sleepyhead")
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`Sleep dude. Lack of hours: ${idealSleepHours - actualSleepHours}`)
    }
  
    return '';
  }
  
  console.log(calculateSleepDebt());