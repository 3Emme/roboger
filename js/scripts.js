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

  //for (let index = 0; index < arrayLength; index +=1) {
    for (let number of numberArray){
    let numberLength = number.length;
    let numberDigitArray = number.split("");
    console.log("numberDigitArray: " + numberDigitArray);
    console.log("numberUnderScope: " + number);
    console.log("Length of number under scope: " + numberLength);
    //const digitArray = numberUnderScope.split("");
    console.log("numberArray index looped");
    //console.log("digitArray: " + digitArray);
    let triggerDigit = 0;
      for (let digit of numberDigitArray){
      console.log("digitArray digit looped");
        if (triggerList.includes(digit) && parseInt(digit) > triggerDigit) {
          triggerDigit = digit;
          console.log("digit triggered");
          // let xArray = [];
          // stringArray.forEach(function(letter) {
          //   if (vowels.includes(letter)) {
          //     xArray.push("x");
          //   } else {
          //     xArray.push(letter);
          //   }
          // turn boolean true; if
          //triggerOutput.push(numberArray[index]);
        } else {
        console.log("digit not triggered");
        //triggerOutput.push(numberArray[index]);
          }
    }
    console.log("triggerDigit: " + triggerDigit);
  }

  //return triggerOutput;
} 

















// Interface Logic
$(document).ready(function(){  
  $("form#roboger-form").submit(function(event){
    event.preventDefault();
    $("#answerDisplay").show();
    $("#result").text(roboger($("#initialNumber").val()));
  })
});