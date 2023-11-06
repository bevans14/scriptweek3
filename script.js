console.log("!!!!FIRST CHALLENGE FIRST CHALLENGE!!!!")




// Look into maybe using an object for this instead of two arrays?

// const exercisePlan = {
//   daysOfWeek: {
//     Monday: ["Rest Day"],
//     Tuesday: ["Running"],
//     Wednesday: ["Jogging"],
//     Thursday: ["Tennis"],
//     Friday: ["Swimming"],
//     Saturday: ["Core Strength"],
//     Sunday: ["Hiking"]
//   }
// };

// ok that was too hard ^

// could have done an if else but want to practice functions / objects more

var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var exercisesForWeek = ["Rest Day", "Running", "Jogging", "Tennis", "Swimming", "Core Strength", "Hiking"];


  function weeklyExcercise() {
//dont forget to return
// this function holds an object, and i need to target specific data within the object to display in the console
    return {                        
      setExercise: function(daysOfWeek, exercisesForWeek) {
       {
          console.log(` ${daysOfWeek}: ${exercisesForWeek}`);
          
        } 
      },
      todaysExercise: function(){
        var today = new Date().getDate();
        const dayOfWeek = daysOfWeek[today]; // Map it to the day's name
        const exercise = exercisesForWeek[today]; // Get the exercise for the current day
        console.log(`today is ${dayOfWeek} so today's exercise is ${exercise}`)
      
      }
  
      
    };
  
  }
    var exerciseOfWeek = weeklyExcercise(); // nesting data
    exerciseOfWeek.todaysExercise(); // call the function to perform

  


    for (let i = 0; i < daysOfWeek.length; i++) { // goes through the array

      exerciseOfWeek.setExercise(daysOfWeek[i], exercisesForWeek[i]);  
    
    }
  

      // need to make it console log the excercise that is today
      // var today = Date.getDay
      // var today = new Date();
      // console.log(today)
      // var today = daysOfWeek[today.getDay()]; //getday is a built in method
      // console.log(`today is ${today} so todays excerise will be ${excerise}`)

      // function todaysExcercise() {
      // var today = new Date().getDay();
      // console.log(today)
      // var dayOfWeek = daysOfWeek[today]; // Map it to the day name
      // this.setExercise(dayOfWeek, exercisesForWeek);
       // return
       //this doesn't work because it needs to be inside of the function since that is where all the data is, and also i need to define everything 
 
     
     console.log("!!!!SECOND CHALLENGE SECOND CHALLENGE!!!!")

function calculatePizzaSlices(slices, numPeople) {
  
    const slicesPerPerson = slices / numPeople; 
  
    return `Both people get ${slicesPerPerson} because the pizza has ${slices} slices`;
  }
  
  var slices = 7;
  var numberOfPeople = 2; 
  
  var answer = calculatePizzaSlices(slices, numberOfPeople);
  console.log(answer);
 
  //ez pz

  // Third GI //
  console.log("!!!!THIRD CHALLENGE THIRD CHALLENGE!!!!")

  function createPII() {
    var PII = {
      name: "Nikki",
      ssn: 123456789,  // this function stores an object, the object stores data inside of it
      // test: 123,
    };

// function is simply storing data while the return is outputting data
// I dont want to return SSN because it needs to be unaccessable

    return {
      getName: function() { // getName is a method given to this function. 
        return PII.name // could user PII.ssn to return the ssn ?
      }};
    }
  
  var piiInfo = createPII(); 
  
var info = piiInfo.getName(); // calls piiInfo which holds my data in createPII, then calls the getName method
  
console.log(`Name: ${name}`);
  
console.log(`SSN: ${piiInfo.ssn}`);  // the SSN is not part of the object that is being returned, so it is undefined



  
  
  
  // last GI



  const personinfo = {
    name: "Wendy",
    job: "programmer", // okkk kinda getting there with understanding objects yaas slay
    age: 27,
    busy: true, 
  
    exercise: function() {
      console.log("This is hard");
    },
  
    fetchJob: function() {
      console.log(`${this.name} is a ${this.job}`); // "this" grabs whatever value comes after it
    },
  
    newTask: function() {
      if (this.busy) {
        console.log(`${this.name} is busy`); // just grabbing the info i need using this and console logging it
      } else {
        console.log(`${this.name} is not busy`);
      }
    }, // busy was set to true so this function will always console log ""Wendy" (because this.name) is busy"
  };
  const programmingLanguages = ["JavaScript", "Java"]


  programmingLanguages.push("C#", "CSS"); // push method adds to the array :,(