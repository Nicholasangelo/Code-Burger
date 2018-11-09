$("#newBurgerBtn").on("click", function () {
    event.preventDefault;
    var newBurger = {
        burger_name: $("#userBurger").val().trim(),
        devoured: 0
    }


    // POST request to router.post("/api/items", ...) in burgers_controller.js
    $.ajax("/api/burgers",
        // and send POST body JSON with data: value as the newItem object
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

        }); // end .then promise handler function

});

// EVENT HANDLER FOR .change-status BUTTON
$(".devourBtn").on("click", function () {
        var id = $(this).data("id");
        // var makeTrue = $(this).data("makeTrue");
    
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
