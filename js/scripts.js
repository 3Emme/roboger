// Business Logic 
function roboger (initialNumberString){ 
  console.log("initialNumberString: " + initialNumberString);
  const numberArray =  countUp(initialNumberString);

  function countUp(endNumber){
    let countArray = [];
    for (let i = 0; i <= parseInt(endNumber); i++){
      countArray.push(String(i));
    }
    return countArray;
  }

  let arrayLength = parseInt(initialNumberString) + 1;
  console.log("arrayLength: " + arrayLength);
  console.log("numberArray: " + numberArray);
  return triggerDetect(arrayLength,numberArray);
}

function triggerDetect(arrayLength,numberArray) {  
  let triggerList = ["1","2","3"]; 
  let triggerOutput = [];

    for (let number of numberArray){
    let numberLength = number.length;
    let numberDigitArray = number.split("");
    console.log("numberDigitArray: " + numberDigitArray);
    console.log("numberUnderScope: " + number);
    console.log("Length of number under scope: " + numberLength);
    console.log("numberArray index looped");
    let triggerDigit = 0;
      for (let digit of numberDigitArray){
        console.log("digitArray digit looped");
        if (triggerList.includes(digit) && parseInt(digit) > triggerDigit) {
          triggerDigit = digit;
          console.log("digit triggered");
        } else {
        console.log("digit not triggered");
          }
      }
    console.log("triggerDigit: " + triggerDigit);
    if (triggerDigit === "3"){
      triggerOutput.push("Won't you be my neighbor?");
      console.log("triggerOutput: pushed #3");
    } else if (triggerDigit === "2"){
      triggerOutput.push("Boop!");
      console.log("triggerOutput: pushed #2");
    } else if (triggerDigit === "1"){
      triggerOutput.push("Beep!");
      console.log("triggerOutput: pushed #1");
    } else {
      triggerOutput.push(number);
      console.log("no trigger, pushed number");
    }
    }
    console.log("triggerOutput: " + triggerOutput);
  return triggerOutput;
} 

// Interface Logic
$(document).ready(function(){  
  $("form#roboger-form").submit(function(event){
    event.preventDefault();
    $("#answerDisplay").show();
    $("#result").text(roboger($("#initialNumber").val()));
  })
});