$(document).ready(function() {
  $("form#letter-form").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".user-name").text(nameInput);
    $("#letter").show();

    event.preventDefault();
  });
});
