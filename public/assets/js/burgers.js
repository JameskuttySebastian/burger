$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevouredState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".remove-devoured").on("click", function(event){
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id ,{
            type: "DELETE"
        }).then(
            function(){
                console.log("Deleted devoured : ", id);
                // Reload the page to get the updated list
                location.reload();
            })
    });

    $(".burger-form").on("submit", function(event){
        // console.log(event);
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        $.ajax("/api/burgers/",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("New burger created ");
                // Reload the page to get the updated list
                location.reload();
            })
    })


})