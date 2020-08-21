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
    //let numberUnderScope = numberArray[index];
    console.log("numberUnderScope: " + number);
    console.log("Length of number under scope: " + numberLength);
    //const digitArray = numberUnderScope.split("");
    console.log("numberArray index looped");
    //console.log("digitArray: " + digitArray);

    //for (let index = 0; index < numberLength; index +=1){
      for (let digit of number);
      console.log("numberArray digit looped " + index);
      if (triggerList.includes(digitArray[index])) {
        // let digitArray = numberArray[index].split("");
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
        triggerOutput.push(numberArray[index]);
        }
    }

  }

  //return triggerOutput;
//} 

















// Interface Logic
$(document).ready(function(){  
  $("form#roboger-form").submit(function(event){
    event.preventDefault();
    $("#answerDisplay").show();
    $("#result").text(roboger($("#initialNumber").val()));
  })
});
