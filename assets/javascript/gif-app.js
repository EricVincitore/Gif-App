//ensures dom is ready
$(document).ready(function () {

  //starting buttons
  btnLoop();

  //event listener for enter key
  $(document).on("keypress", function (e) {
    if (e.which == 13) {

      //stops page reload/takes input
      e.preventDefault();
      getAnimal();
    };
  });
});


//array of animals for buttons
var animals = ["cat", "dog", "shark", "sloth"];
console.log(animals);

//loop to make the buttons
function btnLoop() {

  $(".btn-div").empty();

  //loops through animals array
  for (let i = 0; i < animals.length; i++) {

    //creates button
    var gifBtn = $("<button>");

    //adds class & bootstrap
    gifBtn.addClass("btn btn-success gifTrigger");

    //button text
    gifBtn.text(animals[i]);

    //appends to page
    $(".btn-div").append(gifBtn);

    console.log(animals[i]);
  }
}

//function to take user input of animal
function getAnimal() {

  //takes input value and clears form
  var search = $(".form-control").val().trim();
  $(".form-control").val("");
  console.log(search);

  //checks if input already exists
  if (animals.includes(search)) {

    alert("That animal is already there!")

  } else if (search.includes("")) {

    alert("You have to add an animal!")

  } else {

    //adds input to array and creates new buttons
    animals.push(search);
    console.log(animals);
    btnLoop();

  }
};

function empty() {

  $(".gif-div").empty();

};



function getGif() {
  var cors = "https://cors-anywhere.herokuapp.com/";
  var animalSearch = $(this).text().trim();
  var queryURL = cors + "api.giphy.com/v1/gifs/search?&q=" + animalSearch + "&api_key=7Wkp2d9UIXdEznvgxR7roo4cBBH7gQC6";
  console.log("do i work")
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    var data = response.data;

    for (let i = 0; i < data.length; i++) {

      for (let i = 0; i < 10; i++) {

        let topicDiv = $("<div class='topicDiv d-flex'>");
        let rating = $("<p>").text("Rating: " + data[i].rating);

        topicDiv.append(rating);

        let img1 = $("<img>");
        img1.attr("src", data[i].images.fixed_height_still.url);

        let img2 = $("<img>");
        img2.attr("src", data[i].images.fixed_height.url);

        img2.hide();

        topicDiv.append(img1, img2);

        $(".gif-div").prepend(topicDiv)
      };
    };
  });
};

$(document).on("click", ".gifTrigger", getGif)
$(document).on("click", "img", function () {
  $(this).hide();
  $(this).siblings().show();
})

// *** 1. array of animals to loop through for buttons
// *** 2. var to pick up what animal the user adds through the search form
// ***      a. adds user animal input to array
// ***      a. does not add if animal is already in the array
// ***      b. alert user if animal is already in the array
// *** 3. make buttons dynamically of each animal in the animal array
// *** 4. var for api url including api key
// *** 5. function to start working with the api 
// *** 6. on click event to post 10 gifs to card
// ***      a. clear div that gifs go in
// ***      b. take input and search giphy
// ***      c. filter results by rating
//      d. make page scrollable
// ***      e. fix reset button
//      f. filter to only show 10 results
// ***      g. on click to start and stop gif
// ***     h. add css to make all cards the same size