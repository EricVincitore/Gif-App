var animals = ["cat", "dog", "shark", "sloth"]

var search = $(".form-control").val();

var queryURL = "api.giphy.com/v1/gifs/search?&q=" +
 search + "&api_key=7Wkp2d9UIXdEznvgxR7roo4cBBH7gQC6";



$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });


// 1. array of animals to loop through for buttons
// 2. var to pick up what animal the user adds through the search form
// 3. var for api url including api key
// 4. function sto start working with the api 