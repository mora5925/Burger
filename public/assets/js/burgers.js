
$(function () {
  $(".devour-it").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var eaten = {
      devoured: devoured
    };

  
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function () {
        console.log("Burger got devoured", devoured);
      
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: false
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Added a New Burger");
        
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id); 
        location.reload();
      }
    );
  });
});
