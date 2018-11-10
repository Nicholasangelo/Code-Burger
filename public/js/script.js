// creates a new burger based on user input
$("#newBurgerBtn").on("click", function () {
    event.preventDefault;
    var newBurger = {
        burger_name: $("#userBurger").val().trim(),
        devoured: 0
    }


    // POST request to router.post("/api/burgers", ...) in burgers_controller.js
    $.ajax("/api/burgers",
        // and send POST body JSON with data
        {
            type: "POST",
            data: newBurger
        })

        // .then, when POST responds by sending (res),
        .then(function () {

            // confirm creation of new item
            console.log("created new code to devour");

            // and reload the page so selectAll() can display updated list
            location.reload();

        });

});

// this is where we devour the burger and update the DB
$(".devourBtn").on("click", function () {
        var id = $(this).data("id");
    // change the devoured boolean to true or 1
        var newDevoured = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevoured
        }).then(
          function() {
            location.reload();
          }
        );
      });

// here we can delete burgers we don't like, I dont know if I need this feature, but... maybe also update? we will see
$(".deleteBtn").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});