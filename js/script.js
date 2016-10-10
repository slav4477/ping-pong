function pingPong(userNumber) {
  if(userNumber <= 0) {
    alert("Please enter a number that is greater than 0.");
  } else if(userNumber >= 1 && userNumber <= 1000) {
    outputArray = [];
    for(i = 1; i <= userNumber; i++){
      if(i % 15 === 0) {
        outputArray.push("<li>Ping Pong</li>");
      } else if(i % 5 === 0) {
        outputArray.push("<li>Pong</li>");
      } else if(i % 3 === 0) {
        outputArray.push("<li>Ping</li>");
      } else{
        outputArray.push("<li>" + i + "</li>");
      }
    }
    return outputArray;
  } else {
    alert("Please enter a number that is 1000 or less.");
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {

    $("ul.game-result li").remove();

    var userNumber = parseInt($("#input-number").val());

    var pingPongArray = pingPong(userNumber);

    pingPongArray.forEach(function(output) {
      $(".game-result").append(output);
    });

    $("#results").show();

    event.preventDefault();
  });
});
