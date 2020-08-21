// Business Logic 
function roboger (initialNumber){ 

}






// Interface Logic
$(document).ready(function(){  
  $("form#roboger-form").submit(function(event){
    event.preventDefault();
    $("#answerDisplay").show();
    $("#result").text(roboger($("#initialNumber").val()));
  })
});
