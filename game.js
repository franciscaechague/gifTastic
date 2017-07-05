

var animals = ["Mickey", "Mufasa", "Apu", "The Aristocats", "The Little Mermaid", "Aladdin", "Snowhite", "Cinderella", "Moana", "Scar", "Flounder", "Baloo", "Mougli"];

function displayAnimalGifs() {

  var animal= $(this).attr("data-name");

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    animal + "&limit=10&api_key=30db3a798af94f95aa129b46c07c029d";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    console.log(response);

    $("#gifs-view").empty();

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div class='item'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var animalImage = $("<img>");

      animalImage.attr("src", results[i].images.fixed_height.url);

      animalImage.attr("class", "imageGif");

      gifDiv.prepend(p);

      gifDiv.prepend(animalImage);

      $("#gifs-view").prepend(gifDiv);

    }

  });

}


function renderButtons() {

  $("#buttons-view").empty();


  for (var i = 0; i < animals.length; i++) {

    var a = $("<button>");

    a.addClass("animal");

    a.attr("data-name", animals[i]);

    a.text(animals[i]);

    $("#buttons-view").append(a);
  }
}


$("#add-animal").on("click", function(event) {
  event.preventDefault();

  var animal = $("#animal-input").val().trim();

  $("#animal-input").val("");

  animals.push(animal);

  renderButtons();
});


$(document).on("click", ".animal", displayAnimalGifs);

renderButtons();


$("#gifs-view").on("click", ".item", function(){

    var imgPath = $(this).attr(".imageGif");

    var gifImage = imgPath.attr("src");

    if (gifImage.endsWith("_s.gif")) {

      gifImage = gifImage.replace("_s.gif", ".gif");

    } else {

      gifImage = gifImage.replace(".gif", "_s.gif");

    }

    $().attr("src", gifImage);

});
