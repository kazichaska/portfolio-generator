

// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);
// console.log(process);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// arrow function with no parameter so removed () from profileDataArr
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
    });
  };

printProfileData(profileDataArgs);