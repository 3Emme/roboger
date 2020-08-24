// Business Logic 
function roboger (initialNumberString){ 
  const numberArray =  countUp(initialNumberString);
  return triggerDetect(numberArray);
}

function countUp(endNumber){
  let countArray = [];
  for (let i = 0; i <= parseInt(endNumber); i++){
    countArray.push(String(i));
  }
  return countArray;
}

function triggerDetect(numberArray) {  
  let triggerList = ["1","2","3"]; 
  let triggerOutput = [];

  for (let number of numberArray){
    let numberDigitArray = number.split("");
    let triggerDigit = 0;
      for (let digit of numberDigitArray){
        if (triggerList.includes(digit) && parseInt(digit) > triggerDigit) {
          triggerDigit = digit;
        } 
      }
    if (triggerDigit === "3"){
      triggerOutput.push(" Won't you be my neighbor?");
    } else if (triggerDigit === "2"){
      triggerOutput.push(" Boop!");
    } else if (triggerDigit === "1"){
      triggerOutput.push(" Beep!");
    } else {
      triggerOutput.push(" " + number);
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