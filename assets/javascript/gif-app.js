//ensures dom is ready when buttons generate
$(document).ready(function () {
  btnLoop();
  
  //TODO: fix event key listener for enter key
  if (keyCode == '13') {
    //stops page reload
    event.preventDefault();
    //runs user input and button creation loop
    getAnimal();
  }
});


//array of animals
var animals = ["cat", "dog", "shark", "sloth"];
console.log(animals);

//loop to make the buttons
function btnLoop() {

  $(".btn-div").empty();

  for (let i = 0; i < animals.length; i++) {

    var gifBtn = $("<button>");

    gifBtn.addClass("btn btn-success gifTrigger");

    gifBtn.attr("data-letter", animals[i]);

    gifBtn.text(animals[i]);

    $(".btn-div").append(gifBtn);

    console.log(animals[i]);
  }
}

//function to take user input of animal
function getAnimal() {

  var search = $(".form-control").val().trim();
  $(".form-control").val("");
  console.log(search);
  event.preventDefault();
  if (animals.includes(search)) {

    alert("That animal is already there!")

  } else {

    animals.push(search);
    console.log(animals);
    btnLoop();

  }
};

var queryURL = "api.giphy.com/v1/gifs/search?&q=" +
  +"&api_key=7Wkp2d9UIXdEznvgxR7roo4cBBH7gQC6";



//$.ajax({
//    url: queryURL,
//    method: "GET"
//  }).then(function(response) {
//    console.log(response);
//  });


// *** 1. array of animals to loop through for buttons
// *** 2. var to pick up what animal the user adds through the search form
// ***      a. adds user animal input to array
// ***      a. does not add if animal is already in the array
// ***      b. alert user if animal is already in the array
// *** 3. make buttons dynamically of each animal in the animal array
// 4. var for api url including api key
// 5. function to start working with the api 
// 6. on click event to post 10 gifs to card
//      a. clear div that gifs go in
//      b. take input and search giphy
//      c. filter results by rating
//      d. filter to only show 10 results
//      e. on click to start and stop gif
//      f. add css to make all cards the same size