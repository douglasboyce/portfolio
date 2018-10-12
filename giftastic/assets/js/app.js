// Initial array of animals
var animals = ["Cat", "Dog", "Deer", "Dolphin"];
var state = 'still';
var animateURL = [];
var stillURL = [];

  // Calling the renderButtons function at least once to display the initial list of animals
  renderButtons();

// This function handles events where one button is clicked
$("#add-animal").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var animal = $("#animal-input").val();
  // The animal from the textbox is then added to our array
  animals.push(animal);

  // clear out text box
  $("#animal-input").val(' ');

  // calling renderButtons which handles the processing of our animal array
  renderButtons();
});


// Function for displaying animal data
function renderButtons() {
      
  // Deleting the animal buttons prior to adding new animal buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#animals-view").empty();

  // Looping through the array of animals
  for (var i = 0; i < animals.length; i++) {

    // Then dynamicaly generating buttons for each animal in the array.
    // This code $("<button>") iis all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button data-animal=" + animals[i]+ ">");
    // Adding a class
    a.addClass("animal");
    a.addClass('data-animal='+animals[i]);
    // Adding a data-attribute with a value of the animal at index i
    a.attr("data-name", animals[i]);
    // Providing the button's text with a value of the animal at index i
    a.text(animals[i]);
    // Adding the button to the HTML
    $("#animals-view").append(a);
  }
}

// Adding click event listen listener to all buttons
$(document).on("click", 'button', function () {
    // Grabbing and storing the data-animal property value from the button
    var animal = $(this).attr("data-animal");
    state = "still";

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10"

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        $("#gifs-1").empty();
        $('#gifs-2').empty();

        // storing the data from the AJAX request in the results variable
        results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var animalDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          animalImage = $("<img>");
          
          // Setting the src attribute of the image to a property pulled off the result item
          if (state == 'animate') { animalImage.attr("src", results[i].images.fixed_height.url); }
          else { animalImage.attr("src", results[i].images.original_still.url ); }
          
          animateURL.push(results[i].images.fixed_height.url);
          stillURL.push(results[i].images.original_still.url);

          // Appending the paragraph and image tag to the animalDiv
          animalDiv.append(p);
          animalDiv.append(animalImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          console.log('i = ' + i)
          if (i == 0 || i == 2 || i == 4) { $("#gifs-1").prepend(animalDiv); } 
          else {   $("#gifs-2").prepend(animalDiv); }
        
        }
      });


  });

  $(document).on("click", 'img', function () {
    
    if (state == 'animate') {
      let m = animateURL.indexOf(this.src);
      $(this).attr("src", stillURL[m]);
      state = 'still';
    } else {
      let s= stillURL.indexOf(this.src);
      $(this).attr("src", animateURL[s]);
      state = 'animate';

    }

  });



