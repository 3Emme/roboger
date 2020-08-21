// Business Logic 
function roboger (initialNumber){ 
  console.log("initialNumber: " + initialNumber)
  const numberArray =  countUp(parseInt(initialNumber));

  function countUp(endNumber){
    let countArray = [];
    for (let i = 0; i <= endNumber; i++){
      countArray.push(i);
    }
    return countArray;
  }
  console.log("numberArray: " + numberArray)
  return numberArray;
}






// Interface Logic
$(document).ready(function(){  
  $("form#roboger-form").submit(function(event){
    event.preventDefault();
    $("#answerDisplay").show();
    $("#result").text(roboger($("#initialNumber").val()));
  })
});
