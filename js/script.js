function pingPong(userNumber) {
  if(userNumber <= 0) {
    alert("Please enter a number that is greater than 0.");
  } else if(userNumber >= 1 && userNumber <= 1000) {

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
