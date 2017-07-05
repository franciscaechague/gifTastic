
$("#find-animal").on("click", function(event) {

var animals = ["cat", "dog", "otter", "bever"];

event.preventDefault();

var animal = $("#animal-input").val();

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=30db3a798af94f95aa129b46c07c029d";

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {

    var results = response.data;

    $("#buttons-view").empty();

    for (var i = 0; i < animals.length; i++) {

      var a = $("<button>");

      a.addClass("animal");

      a.attr("data-name", animals[i]);

      a.text(animals[i]);

      $("#buttons-view").append(a);
    }
  }

  $("#add-movie").on("click", function(event) {

    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();
  });

  });

});
