/////////global variables/////////
var getPetFactsButton = document.querySelector (".btn")
var dogQueryUrl = "https://dog.ceo/api/breeds/image/random";
var dogContainerEl = document.createElement("img")
var dogParentContainerEl = document.querySelector(".dog-parent-container");
var dogFactsParentContainer = document.querySelector(".parent-dog-facts");
var dogFactsContainer = document.createElement("p")


var catContainerEl = document.createElement("img");
var catParentContainerEl = document.querySelector(".cat-parent-container");

//////Event Listener for the get pet facts button//////
getPetFactsButton.addEventListener("click", function(){

getRandomDogFacts();
})




//////////fetching random dog fact//////////////////
function getRandomDogFacts(){
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
        "http://dog-api.kinduff.com/api/facts")}`).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          displayRandomDogFacts(data);
        });
      }
    });
}
////////////displaying random dog fact///////////////
function displayRandomDogFacts(data){
  // console.log(data.message)
  dogFactsParentContainer.append(dogFactsContainer);
  dogFactsContainer.innerHTML = "<p>" + data.contents + "</p>"
  
}
