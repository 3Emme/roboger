// Business Logic 
function roboger (initialNumberString){ 
  const numberArray =  countUp(initialNumberString);

  function countUp(endNumber){
    let countArray = [];
    for (let i = 0; i <= parseInt(endNumber); i++){
      countArray.push(String(i));
    }
    return countArray;
  }

  let arrayLength = parseInt(initialNumberString) + 1;
  return triggerDetect(arrayLength,numberArray);
}

function triggerDetect(arrayLength,numberArray) {  
  let triggerList = ["1","2","3"]; 
  let triggerOutput = [];

  for (let number of numberArray){
    let numberLength = number.length;
    let numberDigitArray = number.split("");
    let triggerDigit = 0;
      for (let digit of numberDigitArray){
        if (triggerList.includes(digit) && parseInt(digit) > triggerDigit) {
          triggerDigit = digit;
        } else {
          }
      }
    if (triggerDigit === "3"){
      triggerOutput.push("Won't you be my neighbor?");
    } else if (triggerDigit === "2"){
      triggerOutput.push("Boop!");
    } else if (triggerDigit === "1"){
      triggerOutput.push("Beep!");
    } else {
      triggerOutput.push(number);
    }
  }
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