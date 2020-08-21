// Business Logic 
function roboger (initialNumber){ 
  console.log("initialNumber: " + initialNumber);
  const numberArray =  countUp(parseInt(initialNumber));
  console.log("numberArray: " + numberArray);

  function countUp(endNumber){
    let countArray = [];
    for (let i = 0; i <= endNumber; i++){
      countArray.push(i);
    }
    return countArray;
  }

  let arrayLength = initialNumber.length();
  console.log("arrayLength: " + arrayLength);
  console.log("numberArray: " + numberArray);
  return triggerDetect(arrayLength,numberArray);
}

function triggerDetect(arrayLength,numberArray) {  
  let triggerList = [1,2,3]; 
  let triggerOutput = [];
  const digitString = numberArray[index];
  
  for (let index = 0; index < arrayLength; index +=1) {
    if (numberArray[index] !== undefined) {
      triggerOutput.push(numberArray[index]);      
    } else {
      triggerOutput.push(numberArray[index]);
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
